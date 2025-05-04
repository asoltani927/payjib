<template>
    <!-- footer  -->
    <div class="tw-w-full tw-flex tw-flex-col-reverse lg:tw-flex-row tw-gap-6 lg:tw-gap-8 tw-bg-[#f0f2f5] tw-py-8 lg:tw-pb-[100px] lg:tw-pt-[60px] tw-px-6 lg:tw-px-[139px]">
        <div class="tw-flex tw-flex-col tw-gap-3 tw-items-start">
            <img class="" src="/img/home/Logo2.svg">
            <div class="tw-font-medium tw-text-[13px] tw-w-[214px] tw-text-[#71757A]">
                لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده
                از طراحان گرافیک است
            </div>
            <div class="tw-flex tw-items-center tw-text-[10px] tw-text-[#A0A1A3] tw-gap-1">
                <img class="" src="/img/home/Group.svg">
                <span>کلیه حقوق برای پی جیب محفوظ است.</span>
            </div>
        </div>
        <div class="tw-flex tw-gap-8">
            <div class="tw-hidden lg:tw-block tw-mt-5 tw-font-bold tw-text-[13px]  tw-text-[#71757A]">خدمات</div>
            <div class="tw-flex tw-flex-col tw-items-start lg:tw-mt-5">
                <div class="tw-block lg:tw-hidden tw-mb-4 tw-font-bold tw-text-[13px]  tw-text-[#71757A]">خدمات</div>
                <NuxtLink to="#" class=" text-[#71757A]">
                    <span class="tw-text-[12px] tw-text-[#71757A]">پشتیبانی</span>
                </NuxtLink>
                <NuxtLink to="#" class="text-[14px] font-bold text-[#2E2EE5]">
                    <span class="tw-text-[14px] tw-text-[#2E2EE5]">سوالات پرتکرار</span>
                </NuxtLink>
                <NuxtLink to="#" class="text-[14px] font-bold text-[#71757A]">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">چطور کار می کند</span>
                </NuxtLink>
                <NuxtLink to="#" class="text-[14px] font-bold text-[#71757A]">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">قوانین</span>
                </NuxtLink>
                <NuxtLink to="#" class="tw-block lg:tw-hidden tw-text-[14px] tw-font-bold tw-text-[#71757A] tw-mt-4">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">درباره پی جیب</span>
                </NuxtLink>
                <NuxtLink to="#" class="tw-block lg:tw-hidden tw-text-[14px] tw-font-bold tw-text-[#71757A] tw-mt-1">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">وبلاگ</span>
                </NuxtLink>
            </div>
            <div class="tw-hidden lg:tw-flex tw-flex-col tw-items-start tw-gap-2 lg:tw-mt-5">
                <NuxtLink to="#" class="tw-text-[14px] tw-font-bold tw-text-[#71757A]">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">درباره پی جیب</span>
                </NuxtLink>
                <NuxtLink to="#" class="tw-text-[14px] tw-font-bold tw-text-[#71757A]">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">وبلاگ</span>
                </NuxtLink>
            </div>
            <div class="tw-flex tw-flex-col tw-items-start tw-gap-1 lg:tw-mt-5">
                <div class="tw-text-[13px] tw-font-bold tw-text-[#71757A] tw-mb-1">تماس با پی جیب</div>
                <NuxtLink to="#" class="tw-flex tw-items-center tw-gap-1 tw-text-[14px] tw-font-bold tw-text-[#71757A]">
                    <img class="" src="/img/home/sms.svg">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">info@payjib.ir</span>
                </NuxtLink>
                <NuxtLink to="#" class="tw-flex tw-items-center tw-gap-1 tw-text-[14px] tw-font-bold tw-text-[#71757A]">
                    <img class="" src="/img/home/call.svg">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">+۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷ - +۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷</span>
                </NuxtLink>
                <NuxtLink to="#" class="tw-flex tw-items-center gtw-ap-1 tw-text-[14px] tw-font-bold tw-text-[#71757A]">
                    <img class="" src="/img/home/whatsapp.svg">
                    <span class="tw-text-[#71757A] tw-text-[13px] ">+۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷ - +۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
