<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";

const { name, type } = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  wrapperClass: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator(value: string, _props: unknown) {
      // The value must match one of these strings
      return ["text", "password"].includes(value as string);
    },
  },
  icon: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="relative">
    <ErrorMessage :name="name" />
    <div :class="wrapperClass">
      <span v-if="label" class="">{{ label }}</span>
      <Field
        :name="name"
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        class="inputs-style w-full h-[48px] rounded-xl ps-5 placeholder:text-[#33373D] text-[#33373D] border border-[#D5DDEA] focus:border-[#D5DDEA] appearance-none focus:ring-0 focus:outline-none"
      />
      <!-- <maz-icon v-if="icon" :src="icon" size="1.5rem" class="text-default-gray" /> -->
    </div>
  </div>
</template>