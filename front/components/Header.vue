
<template>
  <header class="container mx-auto flex items-center justify-between px-3 py-8">
    <a href="/">
      <img
        class="w-[126px] sm:w-[160px]"
        src="/dcomm_logo.svg"
        :alt="$t('title')"
    /></a>

    <LangSwitcher />
  </header>
</template>

<script>
export default {
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  name: "Header",
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
