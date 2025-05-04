<template>
    <!-- start login  -->
    <div class="tw-w-full tw-grid lg:tw-grid-cols-2 tw-items-center">
        <div class="tw-w-full tw-h-[212px] lg:tw-h-full tw-bg-[#FFBF00] tw-flex tw-flex-col tw-gap-6 lg:tw-gap-8 tw-items-center lg:tw-items-start tw-justify-center tw-pb-6 tw-pt-10 lg:tw-pb-0 lg:tw-pe-[139px]">
            <div class="tw-text-[24px] lg:tw-text-[40px] tw-text-center lg:tw-text-right tw-font-semibold tw-text-[#2E2EE5]">
                تبادل ارز <span class="tw-font-black tw-text-[24px] lg:tw-text-[47px]">به صرفه و <span class="tw-block lg:tw-hidden"><br></span> ایمن</span> را با ما شروع کنید
            </div>
            <nuxt-link to="/auth/login" class="tw-w-[128px] tw-h-[41px] lg:tw-w-[167px] lg:tw-h-[61px] tw-text-white tw-rounded-full tw-bg-[#2E2EE5] tw-flex tw-items-center tw-justify-center lg:tw-text-xl font-bold">
                شروع ثبت نام
            </nuxt-link>
        </div>
        <div class="tw-w-full tw-h-auto lg:tw-h-[367px] tw-bg-gray-200">
            <img class="tw-w-full tw-h-full" src="/img/home/Rectangle26296.png">
            <!-- img -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'SecondRegistrationSection'
}
</script>
