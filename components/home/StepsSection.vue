<script setup lang="ts">
import { ref } from 'vue'

const isShowVideo = ref(false)


</script>

<template>
    <BaseVideoModal v-model:visible="isShowVideo" />
    <!-- steps -->
    <div class="w-full flex flex-col items-center pt-12 pb-8 lg:pb-[113px] lg:pt-[80px] gap-12 bg-[#f0f2f5]">
        <h2 class="text-[#0F1114] text-lg text-center lg:text-[30px] font-bold">
            با سه قدم ساده در پی‌جیب تبادل ارز انجام دهید.
        </h2>
        <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
            <div class="flex flex-col items-center gap-4">
                <img class="w-[64px] h-[64px]" src="/img/home/payjibSteos1.svg">
                <span class="text-[24px] lg:text-3xl text-wrap text-[#2626BF] font-bold text-center">۱. ثبت‌نام<br
                        class="hidden lg:block">
                    سریع</span>
                <span class="text-sm text-[#71757A] text-center">
                    یک حساب کاربری بسازید و جزئیات معامله (مقدار<br> ارز، نوع معامله و مقصد) را ثبت کنید.
                </span>
            </div>
            <div class="flex flex-col items-center gap-4 text-center">
                <img class="w-[64px] h-[64px]" src="/img/home/payjibSteos2.svg">
                <span class="text-[24px] lg:text-3xl text-[#2626BF] font-bold">۲. انتخاب پیشنهاد<br
                        class="hidden lg:block"> مناسب</span>
                <span class="text-sm text-[#71757A]">بین پیشنهادهای موجود، مناسب‌ترین گزینه را<br> انتخاب کنید.</span>
            </div>
            <div class="flex flex-col items-center gap-4 text-center">
                <img class="w-[64px] h-[64px]" src="/img/home/payjibSteps3.svg">
                <span class="text-[24px] lg:text-3xl text-[#2626BF] font-bold">۳. تایید و<br class="hidden lg:block">
                    انتقال</span>
                <span class="text-sm text-[#71757A]">مبلغ را واریز و رسید را آپلود
                    کنید.<br>تبریک! تراکنش شما با موفقیت انجام شد.</span>
            </div>
        </div>
        <button class="hidden lg:flex items-center gap-2" @click="isShowVideo = true" >
            <img src="/img/home/video-octagon.svg">
            <span class="text-lg font-bold text-[#2E2EE5]">مشاهده ویدئو</span>
        </button>

        <div class="block lg:hidden px-4">
            <video controls class=" rounded-xl h-[500px">
                <source src="/video/video_2025-05-21_22-34-11.mp4" type="video/mp4">
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
        </div>

    </div>
</template>
