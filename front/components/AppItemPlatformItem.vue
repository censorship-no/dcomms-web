<template>
  <div class="sm:mx-0" v-if="data">
    <div
      class="mb-5 text-sm font-semibold uppercase text-gray-600"
      v-if="desktop"
    >
      {{ $t("items.desktopApp") }}
    </div>
    <div class="mb-5 text-sm font-semibold uppercase text-gray-600" v-else>
      {{ $t("items.mobileApp") }}
    </div>
    <div class="sm:pr-6">
      <div class="mb-3 flex items-center">
        <span
          v-if="data.serversLabel"
          class="block sm:inline mr-3 text-sm min-w-[90px] text-right"
          >{{ data.serversLabel[$i18n.locale] }}</span
        >
        <Button
          :link="`https://${data.linkSubdomain}.${server}.${domain}`"
          v-if="
            data.serversLabel && data.linkSubdomain && data.btnType !== 'copy'
          "
          >{{
            data.serversLabel[$i18n.locale] + " " + $t("cities." + server)
          }}</Button
        >
        <span class="text-sm text-gray-600 flex" v-if="data.btnType === 'copy'">
          <ButtonGroups>
            <div
              id="adresServer"
              class="
                px-1
                min-h-[30px]
                inline-block
                text-xs
                border border-gray-300
                bg-white
                py-1
                shadow-sm
                rounded
                text-primary
                underline
                text-center
                focus:outline-none
              "
            >
              {{ `${data.linkSubdomain}.${server}.${domain}` }}
            </div>
            <Button @click.native="copyDivToClipboard('adresServer')">
              <span class="flex flex-nowrap">
                <img
                  src="/icons/copy.svg"
                  class="w-4 mr-1 cursor-pointer"
                  alt=""
              /></span>
            </Button>
          </ButtonGroups>
        </span>
      </div>
      <!-- <div v-if="itemServers.docs" class="flex items-center mb-3">
        <span class="block sm:inline mr-3 text-sm min-w-[90px] sm:text-right"
          >{{ $t("items.instruction") }}
        </span>

        <ButtonGroups>
          <Button
            :key="itemDocs.link[$i18n.locale]"
            :link="itemDocs.link[$i18n.locale]"
            >{{ itemDocs.name }}
          </Button>
        </ButtonGroups>
      </div> -->
    </div>

    <div v-if="data.docs" class="flex items-center mb-3">
      <span class="block sm:inline mr-3 text-sm min-w-[90px] sm:text-right"
        >{{ $t("items.instruction") }}
      </span>
      <ButtonGroups>
        <Button
          v-for="itemDocs in data.docs"
          :key="itemDocs.link[$i18n.locale]"
        >
          <a
            class="text-gray-700"
            v-if="itemDocs.type == 'doc'"
            :href="itemDocs.link[$i18n.locale]"
            target="_blank"
          >
            {{ itemDocs.name }}
          </a>
          <NuxtLink
            v-else
            class="text-gray-700"
            :to="localePath(itemDocs.link)"
          >
            {{ itemDocs.name }}
          </NuxtLink>
        </Button>
      </ButtonGroups>
    </div>
    <div class="mb-3 items-center" v-if="data.downloads">
      <div class="flex items-center">
        <span class="block sm:inline mr-3 text-sm min-w-[90px] sm:text-right"
          >{{ $t("items.downloads") }}
        </span>
        <ButtonGroups>
          <Button
            v-for="itemDownload in data.downloads.mirrors"
            :key="itemDownload.label ? itemDownload.label : itemDownload.name"
            :link="itemDownload.link"
            >{{
              itemDownload.label
                ? $t("labels." + itemDownload.label)
                : itemDownload.name
            }}
          </Button>
        </ButtonGroups>
      </div>
      <div
        v-if="data.platforms.length"
        class="italic text-sm sm:ml-[110px] pt-3"
      >
        (<span
          v-for="(platformItem, index) in data.platforms"
          :key="platformItem.name"
        >
          <a
            v-if="platformItem.link"
            :href="platformItem.link"
            class="text-sm"
            >{{
              platformItem.name +
              (index === data.platforms.length - 1 ? "" : ", ")
            }}</a
          >
          <span v-else class="text-sm">{{
            platformItem.name +
            (index === data.platforms.length - 1 ? "" : ", ")
          }}</span> </span
        >)
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col">
    <div
      class="mb-5 text-sm font-semibold uppercase text-gray-600"
      v-if="desktop"
    >
      {{ $t("items.desktopApp") }}
    </div>
    <div class="mb-5 text-sm font-semibold uppercase text-gray-600" v-else>
      {{ $t("items.mobileApp") }}
    </div>
    <div
      class="
        bg-gray-50
        rounded-lg
        py-8
        px-5
        w-full
        flex
        items-center
        justify-center
      "
      style="flex-basis: 100%"
    >
      <img
        src="/icons/fail.svg"
        alt=""
        class="mr-2 max-w-[30px] max-h-[30px]"
      />
      <span class="text-gray-700 text-lg">{{ $t("items.notAvail") }}</span>
    </div>
  </div>
</template>
<script>
import copy from "~/mixins/copy.js";

export default {
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  name: "AppItemPlatformItem",
  props: { data: Object, desktop: Boolean },
  mixins: [copy],
  data() {
    return {
      domain: this.$store.state.rootDomain,
    };
  },
  computed: {
    server() {
      if (this.$t(`cities`)[`${window.location.host.split(".")[0]}`]) {
        return window.location.host.split(".")[1]
          ? window.location.host.split(".")[0]
          : "kyiv";
      } else {
        return "kyiv";
      }
    },
    item() {
      if (this.data.servers) {
        return this.data.servers.filter((item) => {
          return item.label === this.server || item.label === "all";
        });
      } else {
        return false;
      }
    },
  },
};
</script>
<style >
p {
  margin-bottom: 10px;
}
</style>
