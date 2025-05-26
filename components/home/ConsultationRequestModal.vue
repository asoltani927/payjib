<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { string } from "yup";
import { requiredErr, phoneErr, phoneRegex, stringErr } from "@/constants";
import { postConselingRequest } from "~/api/conseling-request";

const visible = ref(false)


const validationSchema = {
    fullName: string().required(stringErr),
    phone: string().matches(phoneRegex, phoneErr).required(requiredErr),
};

const initialValues = {
    fullName: "",
    phone: "",
};

const toEnglishDigits = (str: string): string => {
  return str.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
};


const isSubmitting = ref(false);

const onSubmit = async (values: { fullName: string; phone: string }) => {
    isSubmitting.value = true;
    values.phone = toEnglishDigits(values.phone);
    await postConselingRequest(values.fullName, values.phone)
    isSubmitting.value = false;
    visible.value = false;
    values = initialValues
};

onMounted(() => {
        setTimeout(() => {
            visible.value = true
            sessionStorage.setItem('hasSeenDialog', 'true')
        }, 10000)
    // const hasSeenDialog = sessionStorage.getItem('hasSeenDialog')

    // if (!hasSeenDialog) {
    //     setTimeout(() => {
    //         visible.value = true
    //         sessionStorage.setItem('hasSeenDialog', 'true')
    //     }, 1000)
    // }
})
</script>

<template>
    <Dialog v-model:visible="visible"
        class="!bg-[#2626BF] consultation-dialog pt-4 pb-2 px-2 rounded-none lg:rounded-3xl" modal :closable="false"
        dir="rtl" :dismissable-mask="true" :close-on-escape="true" :style="{ width: '740px' }">
        <div class="flex flex-col-reverse lg:flex-row justify-between">
            <div class="flex flex-col lg:flex-row items-center gap-2">
                <img class="lg:-ms-2" src="/img/home/headphone2.svg">

                <span class="text-3xl lg:text-[40px] font-bold text-[#FFBF00]">فرم درخواست مشاوره</span>
            </div>
            <div class="flex justify-end w-full lg:w-fit cursor-pointer" @click="visible = false">
                <img src="/img/home/icon-close.svg">
            </div>
        </div>
        <div class="w-full rounded-xl bg-white flex flex-col p-6 gap-4 mt-10 lg:mt-6">
            <span class="text-[#0F1114]">
                برای دریافت مشاوره رایگان نام و شماره تماس خود را وارد کنید.
            </span>
            <UiForm :validation-schema="validationSchema" :initial-values="initialValues" @submit="onSubmit">
                <div class="flex flex-col lg:flex-row items-center gap-4">
                    <div class="w-full lg:w-fit flex-grow flex flex-col lg:flex-row items-center gap-4">
                        <UiInputText name="fullName" placeholder="نام و نام خانوادگی" />
                        <UiInputText name="phone" placeholder="شماره موبایل" />

                    </div>
                    <UiButton id="btn-submit" :loading="isSubmitting" caption="ارسال" />
                </div>
            </UiForm>

        </div>
    </Dialog>
</template>
<style>
.consultation-dialog .p-dialog-header {
    padding: 0 !important;
}
</style>