<script setup lang="ts">
import { string } from "yup";
import { requiredErr, phoneErr, phoneRegex, stringErr } from "@/constants";
import { postConselingRequest } from "~/api/conseling-request";

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
  values = initialValues
};
</script>
<template>
  <div class="py-6 px-6 lg:px-24 bg-[#2626BF] w-full">
    <BaseContainer>
      <div class="flex flex-col lg:flex-row items-center gap-10">
        <img class="hidden lg:block w-full lg:w-[367px] h-[112px] -ms-2" src="/home/img/home/oneClick.svg">
        <img class="block lg:hidden w-full lg:w-[153px] h-[208px]" src="/home/img/home/oneClickMobile.svg">
        <div class="w-full rounded-xl bg-white flex flex-col p-6 gap-4">
          <span>برای مشاوره رایگان اطلاعات خود را وارد کنید</span>
          <UiForm :validation-schema="validationSchema" :initial-values="initialValues" @submit="onSubmit">
            <div class="flex flex-col lg:flex-row items-center gap-4">
              <div class="w-full flex flex-col lg:flex-row flex-grow items-center gap-4">
                <div class="w-full lg:w-fit flex-grow flex flex-col lg:grid lg:grid-cols-2 gap-4">
                  <UiInputText name="fullName" placeholder="نام و نام خانوادگی" />
                  <UiInputText name="phone" placeholder="شماره موبایل" />
                </div>
                <div class="w-full lg:w-[150px] flex justify-end">
                  <UiButton id="btn-submit" :loading="isSubmitting" caption="ارسال" />
                </div>
              </div>
            </div>
          </UiForm>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
