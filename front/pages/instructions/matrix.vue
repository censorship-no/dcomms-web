<template>
  <main class="container mx-auto sm:px-0 instruction">
    <H1 class="text-center">{{ $t("instructions.matrix.title") }}</H1>
    <div
      class="max-w-[700px] mx-auto"
      v-html="
        $t('instructions.matrix.content', {
          chat: `https://chat.${server}.${domain}/`,
          server: `https://matrix.${server}.${domain}/`,
        })
      "
    ></div>
  </main>
</template>

<script>
export default {
  layout: "default",
  nuxtI18n: {
    locales: ["ua"],
  },
  name: "MatrixDocs",
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
</style>
