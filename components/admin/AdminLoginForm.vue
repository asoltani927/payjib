<script setup lang="ts">
import { string } from "yup";
import { emailErr, requiredErr } from "@/constants";
import { passwordErr } from "@/constants";

definePageMeta({
    layout: false
})
const checked = ref(true)

const validationSchema = {
    email: string().email(emailErr).required(requiredErr),
    password: string()
        .min(8, passwordErr)
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, passwordErr)
        .required(requiredErr),
};

const initialValues = {
    email: "",
    password: "",
};

const isSubmitting = ref(false);

const onSubmit = async (values: { email: string; password: string }) => {
    isSubmitting.value = true;
    console.log(values.email, values.password , checked.value)
    isSubmitting.value = false;
    values = initialValues;
};
</script>


<template>
    <UiForm :validation-schema="validationSchema" :initial-values="initialValues" @submit="onSubmit" class="w-full">
        <div class="w-full flex flex-col items-center gap-8">
            <UiInputText name="email" placeholder="ایمیل" class="w-full" />
            <UiInputText name="password" placeholder="رمز عبور" type="password" class="w-full" />
            <div class="w-full flex items-center justify-between text-[13px] font-semibold">
                <label class="flex items-center gap-2 cursor-pointer select-none">
                    <input type="checkbox" v-model="checked" class="hidden peer" />
                    <div class="w-5 h-5 rounded border border-yellow-500 peer-checked:bg-yellow-400 peer-checked:border-yellow-500
             flex items-center justify-center transition-colors duration-200">
                        <svg v-if="checked" class="w-3 h-3 text-black" fill="none" stroke="currentColor"
                            stroke-width="3" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span>مرا به خاطر بسپار</span>
                </label>

                <div>بازیابی رمز عبور</div>
            </div>
            <UiButton id="btn-submit" :loading="isSubmitting" caption="ورود به حساب کاربری"
                class="!w-full !rounded-2xl -mt-2" />

        </div>
    </UiForm>
</template>
