<script setup lang="ts">
const props = defineProps({
    countryName: {
        type: String,
        required : true
    },
});

</script>

<template>
    <!-- steps -->
    <div class="w-full flex flex-col items-center pt-12 pb-8 lg:pb-[113px] lg:pt-[80px] gap-12 bg-[#f0f2f5]">
        <h2 class="text-[#0F1114] text-lg text-center lg:text-[30px] font-bold">
            چرا پی‌جیب را برای حواله ارز {{ props.countryName }} انتخاب کنیم؟
        </h2>
        <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
            <div class="flex flex-col items-center gap-4">
                <img class="w-[64px] h-[64px]" src="/img/home/whyCoose1.svg">
                <span class="text-[24px] lg:text-3xl text-wrap text-[#2626BF] font-bold text-center">
                    صرفه‌جویی در زمان
                </span>
                <p class="text-sm leading-6 text-[#71757A] text-center">
                    بدون مراجعه حضوری و فقط با چند کلیک انتقال ارز<br > شما انجام می‌شود.
                </p>
            </div>
            <div class="flex flex-col items-center gap-4 text-center">
                <img class="w-[64px] h-[64px]" src="/img/home/whyCoose2.svg">
                <span class="text-[24px] lg:text-3xl text-[#2626BF] font-bold">
                    نرخ توافقی
                </span>
                <p class="text-sm leading-6 text-[#71757A]">
                    شما و طرف مقابلتان نرخ تبادل ارز<br >
                    را تعیین می‌کنید.
                </p>
            </div>
            <div class="flex flex-col items-center gap-4 text-center">
                <img class="w-[64px] h-[64px]" src="/img/home/whyCoose3.svg">
                <span class="text-[24px] lg:text-3xl text-[#2626BF] font-bold">
                    بدون واسطه
                </span>
                <p class="text-sm leading-6 text-[#71757A]">
                    بدون نیاز به صرافی‌های فیزیکی یا واسطه‌های<br > غیررسمی تبادل 
                    ارز را کامل می‌کنید.
                </p>
            </div>
        </div>
    </div>
</template>
