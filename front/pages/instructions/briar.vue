<template>
  <main class="container mx-auto sm:px-0 instruction">
    <H1 class="text-center">{{ $t("instructions.briar.title") }}</H1>
    <div
      class="max-w-[700px] mx-auto"
      v-html="$t('instructions.briar.content')"
    ></div>
  </main>
</template>

<script>
export default {
  layout: "default",
  nuxtI18n: {
    locales: ["ua"],
  },
  name: "BriarDocs",
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
  },
};
</script>
<style>
.instruction img,
video,
figure {
  margin: 20px 0 15px 0;
}
h2 {
  text-transform: uppercase;
  font-size: 1.125rem;
  line-height: 1.75rem;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
