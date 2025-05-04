<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const currentDir = computed(() =>
  locales.value.find(l => l.code === locale.value)?.dir || 'ltr'
)
useHead({
  htmlAttrs: {
    dir: currentDir
  }
})
</script>

