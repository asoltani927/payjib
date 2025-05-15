<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
    const hasSeenDialog = sessionStorage.getItem('hasSeenDialog')

    if (!hasSeenDialog) {
        setTimeout(() => {
            visible.value = true
            sessionStorage.setItem('hasSeenDialog', 'true')
        }, 1000)
    }
})
</script>

<template>
    <Dialog
         v-model:visible="visible"
        class="!bg-[#2626BF] consultation-dialog pt-4 pb-2 px-2 rounded-none lg:rounded-3xl" modal :closable="false"
        dir="rtl" :dismissable-mask="true" :close-on-escape="true" :style="{ width: '740px' }">
        <div class="flex flex-col-reverse lg:flex-row justify-between">
            <div class="flex flex-col lg:flex-row items-center gap-2">
                <img class="lg:-ms-2" src="/img/home/headphone2.svg" >

                <span class="text-3xl lg:text-[40px] font-bold text-[#FFBF00]">فرم درخواست مشاوره</span>
            </div>
            <div class="flex justify-end w-full lg:w-fit cursor-pointer" @click="visible = false">
                <img src="/img/home/icon-close.svg" >
            </div>
        </div>
        <div class="w-full rounded-xl bg-white flex flex-col p-6 gap-4 mt-10 lg:mt-6">
            <span class="text-[#0F1114]">
                برای دریافت مشاوره رایگان نام و شماره تماس خود را وارد کنید.
            </span>
            <div class="flex flex-col lg:flex-row items-center gap-4">
                <div class="w-full lg:w-fit flex-grow flex flex-col lg:flex-row items-center gap-4">
                    <input
                        class="inputs-style w-full lg:w-1/2 h-[48px] rounded-xl ps-5 text-[#33373D] placeholder:text-[#33373D] border border-[#D5DDEA] focus:border-[#D5DDEA] appearance-none focus:ring-0 focus:outline-none"
                        type="text" placeholder="نام و نام خانوادگی">
                    <input
                        class="inputs-style w-full lg:w-1/2 h-[48px] rounded-xl ps-5 text-[#33373D] placeholder:text-[#33373D] border border-[#D5DDEA] rtl focus:border-[#D5DDEA] appearance-none focus:ring-0 focus:outline-none"
                        type="tel" placeholder="شماره تماس یا واتساپ">
                </div>
                <button
                    class="bg-[#FFBF00] text-[#0F1114] text-sm w-full lg:w-[151px] h-[48px] font-medium rounded-full">ارسال</button>
            </div>
        </div>
    </Dialog>
</template>
<style>
.consultation-dialog .p-dialog-header {
    padding: 0 !important;
}
</style>