<template>
  <div class="mb-8 shadow bg-white rounded-xl p-4 sm:p-8">
    <div class="md:flex mb-4">
      <img
        :src="data.logo"
        alt=""
        class="
          mb-6
          md:mb-0 md:mx-auto
          h-[48px]
          w-[48px]
          object-contain
          md:mr-10
        "
      />
      <div class="mb-6 md:mb-0">
        <div
          class="text-sm font-semibold uppercase text-primary mb-3"
          v-if="data.explain"
        >
          {{ data.explain[$i18n.locale] }}
        </div>
        <div class="text-2xl font-bold mb-3">
          {{ data.name[$i18n.locale] }}
        </div>
        <div v-html="data.descr[$i18n.locale]" class="text-sm"></div>
        <div class="lg:grid lg:grid-cols-2 mt-8">
          <AppItemPlatformItem
            :data="data.mobileApp"
            class="lg:border-r lg:border-gray-300 lg:pr-8"
          />
          <hr class="lg:hidden mt-6 mr-20" />
          <AppItemPlatformItem
            desktop
            :data="data.desktopApp"
            class="pt-6 lg:pt-0 lg:mt-0 lg:pl-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "AppItem", props: ["data"] };
</script>
<style >
p {
  margin-bottom: 10px;
}
</style>
