
<script setup lang="ts">
import { defineProps } from "vue";

const emits = defineEmits(["click"]);

// type ButtonType = "submit" | "button" | "reset" | undefined
defineProps({
  // type: {
  //     default: "submit"
  // },
  caption: {
    type: String,
    default: "ارسال",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const onClick = async (event: unknown) => {
  emits("click", event);
};
</script>

<template>
  <button
    type="submit"
    class="bg-[#FFBF00] text-[#0F1114] w-full lg:w-[151px] h-[48px] font-semibold rounded-full"
    @click="onClick"
  >
    <div class="flex justify-center items-center gap-1">
      <UiLoaderSpinner v-show="loading" />
      <span v-show="!loading" class="font-bold">{{ caption }}</span>
    </div>
  </button>
</template>

