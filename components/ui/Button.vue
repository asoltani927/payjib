<template>
    <button
        :class="[
            'px-4 py-2 rounded text-white font-semibold',
            variantClass,
            { 'opacity-50 cursor-not-allowed': disabled }
        ]"
        :disabled="disabled"
        @click="handleClick"
    >
        <slot />
    </button>
</template>

<script setup>
import { computed } from "vue";

const { variant } = defineProps({
    variant: {
        type: String,
        default: "primary", // Options: primary, secondary, danger
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["click"]);

const variantClass = computed(() => {
    switch (variant) {
        case "secondary":
            return "bg-gray-500 hover:bg-gray-600";
        case "danger":
            return "bg-red-500 hover:bg-red-600";
        default:
            return "bg-blue-500 hover:bg-blue-600";
    }
});

const handleClick = (event) => {
    if (!disabled) {
        emit("click", event);
    }
};
</script>

<style scoped>
button {
    transition: background-color 0.2s ease;
}
</style>
