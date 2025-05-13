<script setup lang="ts">
import { ErrorMessage } from 'vee-validate'

const { name } = defineProps({
    name: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <div class="text-red-500 text-xs text-left absolute left-3 -top-2 bg-white px-2">
        <ErrorMessage :name="name" />
    </div>
</template>