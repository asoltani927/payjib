<template>
    <!-- hero -->
    <div class="bg-[#2626BF]">
        <div
            class=" flex flex-col lg:flex-row lg:px-[139px] items-center justify-between pb-12 lg:pb-[120px] gap-4 lg:gap-28 w-full h-full bg-[url(/img/home/Hero-Bg-Blue.png)] bg-cover bg-no-repeat pt-[70px] lg:pt-[185px]">
            <div class="lg:w-[444px] lg:h-[445px] flex flex-col items-center lg:items-start text-[#E5E5E5]">
                <img class="mt-8 w-[129px] h-[74px] lg:w-[258px] lg:h-[149px]" src="/img/home/payjib-text.svg">
                <!-- <span>img</span> -->
                <p class="text-[14px] lg:text-xl pb-6 lg:pb-0">
                    تبادل، انتقال و حواله ارز راحت و سریع با کمترین کارمزد
                </p>
                <button
                    class="hidden lg:flex  items-center justify-center mt-8 rounded-full w-[158px] h-[61px] bg-[#FFBF00] font-bold text-xl text-[#0F1114]">
                    ثبت نام
                    کنید
                </button>
                <span class="hidden lg:flex mt-12">
                    از هر جای دنیا که هستید
                </span>
                <div class="hidden lg:flex items-center gap-6 mt-4">
                    <img src="/img/home/103-canada.svg">
                    <img src="/img/home/070-united-states-of-america.svg">
                    <img src="/img/home/036-european-union.svg">
                    <img src="/img/home/006-turkey.svg">
                    <img src="/img/home/015-australia.svg">
                </div>
            </div>
            <div
                class="bg-white w-full lg:w-[536px] lg:rounded-3xl shadow-lg lg:border-2 border-[#D5DDEA] p-8 pb-8 flex flex-col">
                <span class="text-[14px] lg:text-[22px]">می‌خواهم پولم را</span>
                <div class="w-full flex items-center gap-6 mb-4 mt-5">
                    <div @click="selectOption('receive')" class="cursor-pointer flex items-center gap-2">
                        <div :class="{ 'bg-[#A5ABB2]': selectedOption !== 'receive', 'bg-[#F0F2F5]': selectedOption === 'receive' }"
                            class="w-4 h-4 rounded-full flex items-center justify-center">
                            <div :class="{ 'bg-white w-2 h-2': selectedOption !== 'receive', 'bg-[#2626BF] w-3 h-3': selectedOption === 'receive' }"
                                class="rounded-full">
                                <!-- circle -->
                            </div>
                        </div>
                        <span
                            :class="{ 'text-[14px] lg:text-[18px] font-medium text-[#A5ABB2]': selectedOption !== 'receive', 'text-[14px] lg:text-[18px] text-[#2626BF] font-bold': selectedOption === 'receive' }">
                            در ایران دریافت کنم
                        </span>
                    </div>
                    <div @click="selectOption('send')" class="cursor-pointer flex items-center gap-2">
                        <div :class="{ 'bg-[#A5ABB2]': selectedOption !== 'send', 'bg-[#F0F2F5]': selectedOption === 'send' }"
                            class="w-4 h-4 rounded-full flex items-center justify-center">
                            <div :class="{ 'bg-white w-2 h-2': selectedOption !== 'send', 'bg-[#2626BF] w-3 h-3': selectedOption === 'send' }"
                                class="rounded-full">
                                <!-- circle  -->
                            </div>
                        </div>
                        <span
                            :class="{ 'text-[14px] lg:text-[18px] font-medium text-[#A5ABB2]': selectedOption !== 'send', 'text-[14px] lg:text-[18px] text-[#2626BF] font-bold': selectedOption === 'send' }">
                            در خارج از ایران دریافت کنم</span>
                    </div>
                </div>
                <div
                    class="mb-8 p-2 text-[10px] lg:text-[12px] bg-[#F0F2F5] text-[#2626BF] rounded-full w-full flex items-center gap-2">
                    <img src="/img/home/blue-info.svg">
                    <span>ارزی که انتخاب کردید در خارج از ایران دریافت خواهید کرد.</span>
                </div>
                <!-- form -->
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full">
                    <!-- select  -->
                    <div class="relative flex flex-col w-full lg:w-[30%]">
                        <label for="currency"
                            class="absolute z-10 right-[17px] top-[-10px] flex items-center justify-center bg-white w-[36px] h-[21px] text-[#71757A] text-[10px] font-medium mb-2">نوع
                            ارز</label>
                        <div class="relative">
                            <select id="currency" name="currency"
                                class="inputs-style block w-full border font-medium  px-6 pr-10 appearance-none cursor-pointer border-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] text-[13px] placeholder:text-[#33373D] text-[#33373D] placeholder:font-medium">
                                <option>یورو</option>
                                <option>دلار</option>
                                <option>پوند</option>
                            </select>
                            <img class="absolute top-1/2 left-4 -translate-y-1/2  pointer-events-none"
                                src="/img/home/Vector.svg">
                        </div>
                    </div>
                    <!-- inputs  -->
                    <div class="flex flex-col w-full lg:w-[35%]">
                        <!-- <label for="transaction-volume" class="text-[#2626BF] text-base mb-2">حجم تراکنش</label> -->
                        <input id="transaction-volume" name="transaction-volume" type="text" placeholder="حجم تراکنش"
                            class="inputs-style border border-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] placeholder:text-[#33373D] placeholder:font-medium">
                        <div class="flex items-center gap-1 text-[#71757A] text-[10px] mt-0.5 font-medium">
                            <img src="/img/home/gray-info.svg">
                            مثلا ۱۰۰۰ تا
                        </div>
                    </div>

                    <div class="flex flex-col w-full lg:w-[35%]">
                        <!-- <label for="exchange-rate" class="text-[#2626BF] text-base mb-2">نرخ تبدیل پیشنهادی</label> -->
                        <input id="exchange-rate" name="exchange-rate" type="text" placeholder="نرخ تبدیل پیشنهادی"
                            class="inputs-style border border-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] placeholder:text-[#33373D] placeholder:font-medium">
                        <div class="flex items-center gap-1 text-[#71757A] text-[10px] mt-0.5 font-medium">
                            <img src="/img/home/gray-info.svg">
                            مثلا ۹۵.۰۰۰ تومان
                        </div>
                    </div>
                </div>
                <div
                    class="mt-8 p-3 lg:p-2 text-xs bg-[#F0F2F5] text-[#2626BF] rounded-xl w-full flex items-center gap-3">
                    <img class="hidden lg:block" src="/img/home/card-img.png">
                    <div class="gap-1 lg:gap-0 flex flex-col justify-between">
                        <span class="text-[14px] lg:text-lg font-bold">۳۰۰.۰۰۰.۰۰۰ تومان</span>
                        <span class="text-[10px] lg:text-[12px]">به حساب پی‌جیب واریز می‌کنید.</span>
                    </div>
                    <div class="gap-1 lg:gap-0  flex flex-col justify-between">
                        <span class="text-[14px] lg:text-lg font-bold">۲.۵٪ کارمزد</span>
                        <span class="text-[10px] lg:text-[12px]">پی‌جیب برای این درخواست دریافت می‌کند.</span>
                    </div>
                </div>
            </div>
            <div class="px-6 w-full flex lg:hidden flex-col items-center text-[#E5E5E5]">

                <span class="flex mt-6 text-[14px]">
                    از هر جای دنیا که هستید
                </span>
                <button
                    class="flex items-center justify-center mt-4 mb-3 rounded-full w-[152px] h-[41px] bg-[#FFBF00] font-bold text-[#0F1114]">
                    ثبت نام
                    کنید
                </button>
                <div class="flex items-center gap-7 mt-4">
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
