<template>
    <!-- blog -->
    <div class="tw-w-full tw-flex tw-flex-col tw-items-center tw-pt-8 tw-pb-6 lg:tw-py-[80px] lg:tw-px-[139px] tw-bg-white">
        <!-- title -->
        <div class="tw-w-full tw-flex tw-justify-between tw-items-center tw-mb-8 tw-px-6 lg:tw-px-0">
            <h3 class="tw-text-[#0F1114] tw-text-lg lg:tw-text-[30px] tw-font-bold">ما را بخوانید</h3>
            <nuxt-link to="https://payjib.com/blog/" class="tw-flex tw-items-center tw-gap-2 tw-font-bold tw-text-[14px] lg:tw-text-lg tw-cursor-pointer">
                <span class="tw-text-[#2E2EE5]">ادامه در وبلاگ</span>
                <img src="/img/home/arrow-square-left.svg">
            </nuxt-link>
        </div>

        <!-- cards -->
        <div class="tw-w-[99%]  rtl tw-flex tw-items-center tw-gap-4 tw-mx-auto tw-overflow-x-auto notShowScrollbar">
            <!-- card 1 -->
            <div v-for="i in 5" :key="i" class="tw-mx-6 lg:tw-mx-0 tw-flex-shrink-0 tw-w-[312px] tw-min-w-[312px] lg:tw-w-[352px] lg:tw-min-w-[352px] tw-bg-white tw-rounded-2xl tw-p-4 tw-ps-7 tw-border-2 tw-border-[#D5DDEA] tw-flex tw-flex-col tw-items-start">
                <div class="tw-flex tw-justify-between tw-items-center tw-w-full tw-gap-3">
                    <img cclass="tw-w-[76px] tw-h-[102px] tw-rounded-lg tw-me-3 tw-bg-gray-400" src="/img/Rectangle 6304.png">
                    <div class="tw-flex tw-flex-col">
                        <h4 class="tw-text-[#0F1114] tw-font-semibold lg:tw-text-xl tw-mb-2">پرداخت دانشگاه‌های خارج از کشور</h4>
                        <p class="tw-text-[#0F1114] tw-text-[12px] lg:tw-text-sm">
                            این روزها اهداف بسیاری از دانشجویان داخل ایران سفر
                            به کشوری دیگر برای...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogSection'
}
</script>
