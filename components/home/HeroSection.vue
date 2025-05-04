<template>
    <!-- hero -->
    <div class="tw-bg-[#2626BF]">
        <div class=" tw-flex tw-flex-col lg:tw-flex-row lg:tw-px-[139px] tw-items-center tw-justify-between tw-pb-[120px] tw-gap-8 lg:tw-gap-28 tw-w-full tw-h-full tw-bg-[url(~/assets/img/home/bghero.svg)] tw-bg-cover tw-bg-no-repeat tw-pt-[145px] lg:tw-pt-[185px]">
            <div class="lg:tw-w-[444px] lg:tw-h-[445px] tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-text-[#E5E5E5]">
                <img class="tw-mt-8 tw-w-[129px] tw-h-[74px] lg:tw-w-[258px] lg:tw-h-[149px]" src="/img/home/payjib-text.svg">
                <!-- <span>img</span> -->
                <p class="tw-text-[14px] lg:tw-text-xl">
                    در پی‌جیب، با نرخ توافقی و مطمئن،<br>از ایران پول دریافت یا به خارج از کشور ارسال
                    کنید.
                </p>
                <button class="tw-hidden lg:tw-flex  tw-items-center tw-justify-center tw-mt-8 tw-rounded-full tw-w-[158px] tw-h-[61px] tw-bg-[#FFBF00] tw-font-bold tw-text-xl tw-text-[#0F1114]">
                    ثبت نام
                    کنید
                </button>
                <span class="tw-hidden lg:tw-flex tw-mt-12">از هرجایی که هستید!</span>
                <div class="tw-hidden lg:tw-flex tw-items-center tw-gap-6 tw-mt-4">
                    <img src="/img/home/103-canada.svg">
                    <img src="/img/home/070-united-states-of-america.svg">
                    <img src="/img/home/036-european-union.svg">
                    <img src="/img/home/006-turkey.svg">
                    <img src="/img/home/015-australia.svg">
                </div>
            </div>
            <div class="tw-bg-white tw-w-full lg:tw-w-[536px] lg:tw-rounded-3xl tw-shadow-lg lg:tw-border-2 tw-border-[#D5DDEA] tw-p-8 tw-pb-8 tw-flex tw-flex-col">
                <span class="tw-text-[14px] lg:tw-text-[22px]">در پی جیب می‌خواهم...</span>
                <div class="tw-w-full tw-flex tw-items-center tw-justify-between tw-mb-4 tw-mt-5">
                    <div @click="selectOption('receive')" class="tw-cursor-pointer tw-flex tw-items-center tw-gap-2">
                        <div :class="{'tw-bg-[#A5ABB2]': selectedOption !== 'receive', 'tw-bg-[#F0F2F5]': selectedOption === 'receive'}" class="tw-w-4 tw-h-4 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                            <div :class="{'tw-bg-white tw-w-2 tw-h-2': selectedOption !== 'receive', 'tw-bg-[#2626BF] tw-w-3 tw-h-3': selectedOption === 'receive'}" class="tw-rounded-full">
                                <!-- circle -->
                            </div>
                        </div>
                        <span :class="{'tw-text-[14px] lg:tw-text-[18px] tw-font-medium tw-text-[#A5ABB2]': selectedOption !== 'receive', 'tw-text-[14px] lg:tw-text-[18px] tw-text-[#2626BF] tw-font-bold': selectedOption === 'receive'}">پول در ایران دریافت کنم</span>
                    </div>
                    <div @click="selectOption('send')" class="tw-cursor-pointer tw-flex tw-items-center tw-gap-2">
                        <div :class="{'tw-bg-[#A5ABB2]': selectedOption !== 'send', 'tw-bg-[#F0F2F5]': selectedOption === 'send'}" class="tw-w-4 tw-h-4 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                            <div :class="{'tw-bg-white tw-w-2 tw-h-2': selectedOption !== 'send', 'tw-bg-[#2626BF] tw-w-3 tw-h-3': selectedOption === 'send'}" class="tw-rounded-full">
                                <!-- circle  -->
                            </div>
                        </div>
                        <span :class="{'tw-text-[14px] lg:tw-text-[18px] tw-font-medium tw-text-[#A5ABB2]': selectedOption !== 'send', 'tw-text-[14px] lg:tw-text-[18px] tw-text-[#2626BF] tw-font-bold': selectedOption === 'send'}">پول به خارج از ایران ارسال کنم</span>
                    </div>
                </div>
                <div class="tw-mb-8 tw-p-2 tw-text-[10px] lg:tw-text-[12px] tw-bg-[#F0F2F5] tw-text-[#2626BF] tw-rounded-full tw-w-full tw-flex tw-items-center tw-gap-2">
                    <img src="/img/home/blue-info.svg">
                    <span>فروش ارز در خارج از کشور و دریافت معادل ریالی در ایران</span>
                </div>
                <!-- form -->
                <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-8 lg:tw-gap-4 tw-w-full">
                    <!-- select  -->
                    <div class="tw-relative tw-flex tw-flex-col tw-w-full lg:tw-w-[30%]">
                        <label for="currency" class="tw-absolute tw-z-10 tw-right-[17px] tw-top-[-10px] tw-flex tw-items-center tw-justify-center tw-bg-white tw-w-[36px] tw-h-[21px] tw-text-[#71757A] tw-text-[10px] tw-font-medium mb-2">نوع ارز</label>
                        <div class="tw-relative">
                            <select id="currency" name="currency" class="inputs-style tw-block tw-w-full tw-border  tw-text-lg tw-font-semibold tw-px-6 tw-pr-10 tw-appearance-none tw-cursor-pointer tw-border-[#D5DDEA] tw-rounded-xl tw-bg-white tw-h-[48px] tw-ps-5 tw-placeholder:text-[13px] tw-text-[13px] tw-placeholder:text-[#33373D] tw-text-[#33373D] tw-placeholder:font-semibold">
                                <option>یورو</option>
                                <option>دلار</option>
                                <option>پوند</option>
                            </select>
                            <img class="tw-absolute tw-top-1/2 tw-left-4 tw--translate-y-1/2  tw-pointer-events-none" src="/img/home/Vector.svg">
                        </div>
                    </div>
                    <!-- inputs  -->
                    <div class="tw-flex tw-flex-col tw-w-full lg:tw-w-[35%]">
                        <!-- <label for="transaction-volume" class="text-[#2626BF] text-base mb-2">حجم تراکنش</label> -->
                        <input id="transaction-volume" name="transaction-volume" type="text" placeholder="حجم تراکنش" class="inputs-style tw-border tw-border-[#D5DDEA] tw-rounded-xl tw-bg-white tw-h-[48px] tw-ps-5 tw-placeholder:text-[13px] tw-placeholder:text-[#33373D] tw-placeholder:font-semibold">
                        <div class="tw-flex tw-items-center tw-gap-1 tw-text-[#71757A] tw-text-[10px] tw-mt-0.5 tw-font-medium">
                            <img src="/img/home/gray-info.svg">
                            مبلغ مورد نظر در ارز مبدا
                        </div>
                    </div>

                    <div class="tw-flex tw-flex-col tw-w-full lg:tw-w-[35%]">
                        <!-- <label for="exchange-rate" class="text-[#2626BF] text-base mb-2">نرخ تبدیل پیشنهادی</label> -->
                        <input id="exchange-rate" name="exchange-rate" type="text" placeholder="نرخ تبدیل پیشنهادی" class="inputs-style tw-border tw-border-[#D5DDEA] tw-rounded-xl tw-bg-white tw-h-[48px] tw-ps-5 tw-placeholder:text-[13px] tw-placeholder:text-[#33373D] tw-placeholder:font-semibold">
                        <div class="tw-flex tw-items-center gap-1 tw-text-[#71757A] tw-text-[10px] tw-mt-0.5 tw-font-medium">
                            <img src="/img/home/gray-info.svg">
                            معادل ریالی ارز مبدا
                        </div>
                    </div>
                </div>
                <div class="tw-mt-8 tw-p-2 tw-text-xs tw-bg-[#F0F2F5] tw-text-[#2626BF] tw-rounded-xl tw-w-full tw-flex tw-items-center tw-gap-3">
                    <img src="/img/home/card-img.png">
                    <div class="tw-flex tw-flex-col tw-justify-between">
                        <span class="tw-text-[10px] lg:tw-text-[12px]">مبلغ دریافتی در ایران</span>
                        <span class="tw-text-[14px] lg:tw-text-xl tw-font-bold">۳۰۰.۰۰۰.۰۰۰ تومان</span>
                    </div>
                </div>
            </div>
            <div class="tw-px-6 tw-w-full tw-flex lg:tw-hidden tw-flex-col tw-items-center tw-text-[#E5E5E5]">
                <button class="tw-flex tw-items-center tw-justify-center tw-mt-8 tw-rounded-full tw-w-[152px] tw-h-[41px] tw-bg-[#FFBF00] tw-font-bold tw-text-[#0F1114]">
                    ثبت نام
                    کنید
                </button>
                <span class="tw-flex tw-mt-6 tw-text-[14px]">از هرجایی که هستید!</span>
                <div class="tw-flex tw-items-center tw-gap-7 tw-mt-4">
                    <img src="/img/home/103-canada.svg">
                    <img src="/img/home/070-united-states-of-america.svg">
                    <img src="/img/home/036-european-union.svg">
                    <img src="/img/home/006-turkey.svg">
                    <img src="/img/home/015-australia.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
        return {
            selectedOption: 'send'
        }
    },
    methods: {
        selectOption(option) {
            this.selectedOption = option
        }
    }
}
</script>
