
<template>
  <v-select
    class="
      min-w-[160px]
      focus:outline-none
      hover:bg-gray-50
      active:bg-gray-100
      p-[4px]
    "
    :class="{ 'border-2 border-primary rounded-xl p-[2px]': focus }"
    :clearable="false"
    :searchable="false"
    v-model="lang"
    :options="availableLocales"
    @open="focus = true"
    @close="focus = false"
  >
    <template #option="{ code }">
      <span class="px-2 sm:px-3 py-1 sm:py-2">
        {{ $t(`lang.${code}`) }}
      </span>
    </template>
    <template #selected-option="{}">
      <span class="py-1">
        {{ $t(`lang.${lang.code}`) }}
      </span>
    </template>
  </v-select>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    "v-select": vSelect,
  },
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  data() {
    return {
      lang: this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0],
      focus: false,
    };
  },
  watch: {
    lang: function (val) {
      this.$i18n.setLocale(val.code);
    },
  },
  name: "LangSwitcher",

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
<style >
.vs__dropdown-toggle {
  border: 1px solid #d1d5db !important;
  border-radius: 10px !important;
  background: #fff;
}
.vs__dropdown-menu {
  border-radius: 10px !important;
  margin-top: 10px;
  min-width: 224px !important;
  right: 0px !important;
  left: auto !important;
}
.vs__dropdown-option--highlight,
.vs__dropdown-option--selected {
  background: #f3f4f6;
  background-color: #f3f4f6;

  color: black;
}
.vs__actions {
  padding-right: 10px;
}
.vs__dropdown-toggle {
  height: 42px !important;
}
</style>
