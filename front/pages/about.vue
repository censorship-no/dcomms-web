


<template>
  <main class="container mx-auto sm:px-0">
    <H1 class="text-center mb-10 mt-16"> {{ $t("pages.about.title") }}</H1>
    <div
      class="max-w-[700px] mx-auto content px-3"
      v-html="$t('pages.about.content')"
    ></div>
    <hr class="mt-16" />
  </main>
</template>

<script>
export default {
  layout: "default",
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
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
.content h2 {
  text-transform: uppercase;
  font-size: 1.125rem;
  line-height: 1.75rem;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
