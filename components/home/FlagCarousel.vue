<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const countries = [
  { id: 1, IMG_URL: 'germany.svg' },
  { id: 2, IMG_URL: 'australia.svg' },
  { id: 3, IMG_URL: 'finland.svg' },
  { id: 4, IMG_URL: 'turkey.svg' },
  { id: 5, IMG_URL: 'switzerland.svg' },
  { id: 6, IMG_URL: 'sweden.svg' },
  { id: 7, IMG_URL: 'united-kingdom.svg' },
  { id: 8, IMG_URL: 'spain.svg' },
  { id: 9, IMG_URL: 'russia.svg' },
  { id: 10, IMG_URL: 'portugal.svg' },
  { id: 11, IMG_URL: 'norway.svg' },
  { id: 12, IMG_URL: 'belgium.svg' },
  { id: 13, IMG_URL: 'italy.svg' },
  { id: 14, IMG_URL: 'austria.svg' },
  { id: 15, IMG_URL: 'france.svg' },
  { id: 16, IMG_URL: 'netherlands.svg' }
]

const startIndex = ref(0)

const visibleCountries = computed(() => {
  const endIndex = startIndex.value + 5
  if (endIndex <= countries.length) {
    return countries.slice(startIndex.value, endIndex)
  } else {
    return [
      ...countries.slice(startIndex.value),
      ...countries.slice(0, endIndex - countries.length)
    ]
  }
})

let intervalId: ReturnType<typeof setInterval>

onMounted(() => {
  intervalId = setInterval(() => {
    startIndex.value = (startIndex.value + 1) % countries.length
  }, 1500)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="h-20 lg:flex items-center mt-2 overflow-hidden w-[calc(5*2.75rem+4*1.5rem)]">
    <Transition name="" mode="out-in">
      <div :key="startIndex" class="flex gap-6">
        <img
          v-for="(flag, index) in visibleCountries"
          :key="`flag-${index}`"
          :src="`/img/home/${flag.IMG_URL}`"
          class="w-11 h-11"
        >
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500 ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}
</style>
  

