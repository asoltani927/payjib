<template>
  <div>
    <BaseToast />
    <NuxtLayout />
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const currentDir = computed(
  () => locales.value.find((l) => l.code === locale.value)?.dir || "ltr"
);
useHead({
  title: "پی جیب تبادل ارز سریع و امن با کمترین کارمزد",
  titleTemplate: "%s | پی جیب",
  htmlAttrs: {
    dir: currentDir,
  },
});
</script>

