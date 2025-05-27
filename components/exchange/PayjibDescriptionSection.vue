<script setup lang="ts">
import { ref } from 'vue'

defineProps({
    countryName: {
        type: String,
        required: true
    },
    monetaryUnit: {
        type: String,
        required: true
    },
});

const isShowVideo = ref(false)
</script>
<template>
    <BaseVideoModal v-model:visible="isShowVideo" />
    <!-- services  -->
    <div class="bg-[#f0f2f5] w-full py-[72px] lg:py-[96px] px-6 lg:px-24">
        <BaseContainer>
            <div
                class="flex flex-col-reverse gap-12 lg:gap-[30px] items-center lg:flex-row lg:justify-between ">
                <div class="w-full lg:w-[65%] flex flex-col items-center lg:items-start">
                    <h2 class="ms-6 lg:ms-0 text-[#0F1114] text-center lg:text-start text-[23px]  font-bold">
                        فرآیند تبادل ارز در پی‌جیب چگونه انجام می‌شود؟
                    </h2>
                    <p
                        class="mt-6 mb-8 custom-lineHeight leading-12 text-center text-[#2626BF] text-xl lg:text-3xl lg:text-start">
                        شما درخواست خود را برای
                        <strong class="font-bold custom-lineHeight"> خرید یا فروش {{ monetaryUnit }}</strong>
                        ثبت می‌کنید. پی‌جیب، افراد دارای نیاز معکوس را به هم وصل کرده و
                        تبادل ارز را تحت نظارت و از طریق حساب‌های امن خود انجام می‌دهد. این یعنی بدون انتقال فیزیکی پول،
                        <strong class="font-bold custom-lineHeight"> حواله ارزی
                            شما از ایران به {{ countryName }} یا از {{ countryName }} به ایران با اطمینان کامل انجام
                            می‌شود.</strong>
                    </p>
                    <button  class="hidden lg:flex items-center gap-2" @click="isShowVideo = true">
                        <img src="/home/img/home/video-octagon.svg">
                        <span class="text-lg font-semibold text-[#2E2EE5]">مشاهده ویدئو</span>
                    </button>
                    <div class="block lg:hidden">
                        <video controls class=" rounded-xl h-[500px">
                            <source src="/home/video/video_2025-05-21_22-34-11.mp4" type="video/mp4">
                            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                        </video>
                    </div>
                </div>
                <img class="w-[35%]" src="/home/img/home/payjibSteps3.svg">
            </div>
        </BaseContainer>
    </div>

</template>
