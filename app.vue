<template>
  <div>
    <!--  Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54DCTNB3" height="0" width="0"
        style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <BaseToast />
    <template v-if="$route.meta.layout !== false">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    <template v-else>
      <NuxtPage />
    </template>
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
