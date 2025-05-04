<template>
    <!-- comments  -->
    <!-- TODO -->
    <div class="tw-w-full tw-flex tw-flex-col tw-items-center tw-py-12 lg:tw-py-[96px] tw-bg-[#f0f2f5] lg:tw-px-[139px]">
        <h3 class="tw-text-center tw-text-[#2626BF] tw-text-[44px] tw-mb-[80px] tw-font-bold tw-px-6 lg:tw-px-0">
            پی جیب را از کاربران ما
            <br>
            <span class="tw-font-black tw-text-[60px]">
                بشنوید
            </span>
            <span>!
            </span>
        </h3>
        <div class="tw-w-full tw-flex tw-flex-col tw-gap-12 tw-items-center">
            <div class="tw-w-[99%]  tw-flex tw-items-center tw-mx-auto tw-overflow-x-auto notShowScrollbar tw-gap-4">
                <div v-for="i in 5" :key="i" class="tw-mx-6 lg:tw-mx-0 tw-flex-shrink-0 tw-min-w-[376px] tw-w-[376px] tw-p-3 tw-rounded-2xl tw-shadow-xl  tw-bg-white tw-flex tw-flex-col tw-gap-4">
                    <!-- user info -->
                    <div class="tw-flex tw-justify-between tw-items-center">
                        <!-- right: user name -->
                        <div class="tw-flex tw-items-center tw-gap-2">
                            <img class="tw-w-5 tw-h-5" src="/img/home/profile-circle.svg">
                            <span class="tw-font-medium tw-text-[14px] tw-text-[#0F1114]">حمیدرضا</span>
                        </div>

                        <!-- left: country -->
                        <div class="tw-flex tw-items-center tw-gap-1 tw-bg-[#F0F2F5] tw-pe-1 tw-ps-2 tw-h-[26px] tw-rounded-full">
                            <img src="https://flagcdn.com/us.svg" alt="USA Flag" class="tw-w-[18px] tw-h-[18px] tw-rounded-full">
                            <span class="tw-text-sm tw-font-semibold tw-text-[#0F1114]">آمریکا</span>
                        </div>
                    </div>

                    <!-- comment text -->
                    <p class="tw-text-[#33373D] tw-text-sm tw-leading-relaxed">
                        خیلی ممنونم از پلتفرم پی جیپ<br>
                        جدا از <span class="tw-font-bold">خدمات خوب و مطمئنشون</span>، <span class="tw-font-bold">پشتیبانی آن
                            تایم، پیگیر و قابل اعتمادی</span> دارند و واقعا جابه‌جایی ارز رو برای مایی که خارج از ایران
                        هستیم آسون‌تر کردند.
                    </p>

                    <!-- audio player -->
                    <div class="tw-flex tw-items-center tw-gap-3 tw-w-full">
                        <audio controls class="tw-w-full tw-direction-ltr tw-bg-[#F0F2F5] tw-rounded-xl tw-overflow-hidden">
                            <source src="" type="audio/mpeg">
                            مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
                        </audio>
                    </div>
                </div>
            </div>
            <!-- pagination -->
            <div class="tw-flex tw-items-center tw-gap-0.5">
                <div class="tw-w-2 tw-h-2 tw-rounded-full tw-bg-[#c9cbf2]"> <!-- img --></div>
                <div class="tw-w-[36px] tw-h-2 tw-rounded-full tw-bg-[#2E2EE5]"> <!-- img --></div>
                <div class="tw-w-2 tw-h-2 tw-rounded-full tw-bg-[#c9cbf2]"> <!-- img --></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentsSection'
}
</script>
