<template>
  <div
    v-if="visible"
    :class="[
      'fixed bottom-6 right-6 p-4 rounded-2xl shadow-lg flex items-center gap-4',
      toastClass,
    ]"
    @click="hideToast"
  >
    <component :is="icon" class="text-2xl" />
    <div>
      <h3 class="text-lg font-semibold">{{ currentToast.title }}</h3>
      <p class="text-sm text-gray-600">{{ currentToast.message }}</p>
    </div>
    <button
      class="ml-auto text-gray-400 hover:text-gray-600"
      @click.stop="hideToast"
    >
      &times;
    </button>
  </div>
</template>

<script setup>
import { useToast } from "@/composables/useToast";

const { visible, icon, toastClass, hideToast, currentToast } = useToast();
</script>

<style scoped>
.fixed {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 1;
  transform: translateY(0);
}
.fixed-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>
