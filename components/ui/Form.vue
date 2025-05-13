<script setup>
import { Form } from 'vee-validate';

const { validationSchema, initialValues } = defineProps({
    validationSchema: { type: Object, default: {} },
    initialValues: { type: Object, default: {} }
})

const emit = defineEmits(["submit"])

const onSubmitClick = (args) => {
    emit("submit", args)
}

</script>

<template>
    <Form :validation-schema="validationSchema" :initial-values="initialValues" @submit="onSubmitClick">
        <slot />
    </Form>
</template>