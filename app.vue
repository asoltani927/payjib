<template>
  <div>
    <!-- <NuxtLayout /> -->
     {{ currencies }}
  </div>
</template>

<script setup>
import { useCurrencies } from './composables/useCurrencies'

const { locale, locales } = useI18n()
const currentDir = computed(() =>
  locales.value.find(l => l.code === locale.value)?.dir || 'ltr'
)
useHead({
  htmlAttrs: {
    dir: currentDir
  }
})

const currencies = await useCurrencies();
</script>

