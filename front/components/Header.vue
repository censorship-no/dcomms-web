
<template>
  <header class="container mx-auto">
    <div class="flex items-center justify-between px-3 py-8">
      <a href="/">
        <img
          class="w-[126px] sm:w-[160px]"
          src="/dcomm_logo.svg"
          :alt="$t('title')"
      /></a>
      <nav class="flex items-center">
        <ul class="hidden sm:flex justify-end items-center mr-6 mb-0">
          <li>
            <NuxtLink
              class="text-gray-700 uppercase"
              :to="localePath('about')"
              >{{ $t("pages.about.title") }}</NuxtLink
            >
          </li>
        </ul>
        <LangSwitcher />
      </nav>
    </div>
    <div>
      <ul class="sm:hidden flex justify-center items-center mr-3 mb-6">
        <li>
          <NuxtLink class="text-gray-700 uppercase" :to="localePath('about')">{{
            $t("pages.about.title")
          }}</NuxtLink>
        </li>
      </ul>
    </div>
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
