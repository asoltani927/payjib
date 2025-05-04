<template>
    <div class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-6 tw-py-6 tw-px-6 lg:tw-px-[139px] tw-bg-[#2626BF]">
        <img class="tw-hidden lg:tw-block tw-w-[249px] tw-h-[112px]" src="/img/home/Frame 12950.svg">
        <img class="tw-block lg:tw-hidden  tw-w-[153px] tw-h-[208px]" src="/img/home/contact.svg">
        <div class="tw-w-full tw-rounded-xl tw-bg-white tw-flex tw-flex-col tw-p-6 tw-gap-4">
            <span>برای دریافت اطلاعات و مشاوره از سمت ما نام و شماره تلفن خود را ارسال کنید</span>
            <div class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4">
                <div class="tw-flex tw-flex-col lg:tw-flex-row  tw-flex-grow tw-items-center tw-gap-4">
                    <input class="inputs-style tw-w-full lg:tw-w-1/2 tw-h-[48px] tw-rounded-xl tw-ps-5 tw-placeholder:text-[#33373D] tw-border tw-border-[#D5DDEA] tw-focus:border-[#D5DDEA] tw-appearance-none tw-focus:ring-0 tw-focus:outline-none" type="text" placeholder="نام و نام خانوادگی">
                    <input class="inputs-style tw-w-full lg:tw-w-1/2 tw-h-[48px] tw-rounded-xl tw-ps-5 tw-placeholder:text-[#33373D] tw-border tw-border-[#D5DDEA] rtl focus:border-[#D5DDEA] tw-appearance-none tw-focus:ring-0 tw-focus:outline-none" type="tel" placeholder="شماره تلفن شما">
                </div>
                <button class="tw-bg-[#FFBF00] tw-text-[#0F1114] tw-w-full lg:tw-w-[151px] tw-h-[48px] tw-font-semibold tw-rounded-full">ارسال</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CounselingSection'
}
</script>
