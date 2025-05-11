<script setup>

import { useCurrencies } from '~/composables/useCurrencies'

const currencies = await useCurrencies();

const currenciesOptions = computed(() => {
    return currencies.value?.map((c) => {
      return {
        name: c.titleFa,
        value: c.id,
      }
    }) ?? []
})

</script>

<template>
  <div
    class="bg-white w-full lg:w-[55%] lg:rounded-3xl shadow-lg lg:border-2 border-[#D5DDEA] p-8 pb-8 flex flex-col"
  >
    <span class="text-[14px] lg:text-[22px]">می‌خواهم پولم را</span>
    <div class="w-full flex items-center gap-6 mb-4 mt-5">
      <div
        class="cursor-pointer flex items-center gap-2"
        @click="selectOption('receive')"
      >
        <div
          :class="{
            'bg-[#A5ABB2]': selectedOption !== 'receive',
            'bg-[#F0F2F5]': selectedOption === 'receive',
          }"
          class="w-4 h-4 rounded-full flex items-center justify-center"
        >
          <div
            :class="{
              'bg-white w-2 h-2': selectedOption !== 'receive',
              'bg-[#2626BF] w-3 h-3': selectedOption === 'receive',
            }"
            class="rounded-full"
          >
            <!-- circle -->
          </div>
        </div>
        <span
          :class="{
            'text-[14px] lg:text-[18px] font-medium text-[#A5ABB2]':
              selectedOption !== 'receive',
            'text-[14px] lg:text-[18px] text-[#2626BF] font-bold':
              selectedOption === 'receive',
          }"
        >
          در ایران دریافت کنم
        </span>
      </div>
      <div
        class="cursor-pointer flex items-center gap-2"
        @click="selectOption('send')"
      >
        <div
          :class="{
            'bg-[#A5ABB2]': selectedOption !== 'send',
            'bg-[#F0F2F5]': selectedOption === 'send',
          }"
          class="w-4 h-4 rounded-full flex items-center justify-center"
        >
          <div
            :class="{
              'bg-white w-2 h-2': selectedOption !== 'send',
              'bg-[#2626BF] w-3 h-3': selectedOption === 'send',
            }"
            class="rounded-full"
          >
            <!-- circle  -->
          </div>
        </div>
        <span
          :class="{
            'text-[14px] lg:text-[18px] font-medium text-[#A5ABB2]':
              selectedOption !== 'send',
            'text-[14px] lg:text-[18px] text-[#2626BF] font-bold':
              selectedOption === 'send',
          }"
        >
          در خارج از ایران دریافت کنم</span
        >
      </div>
    </div>
    <div
      class="mb-8 p-2 text-[10px] lg:text-[12px] bg-[#F0F2F5] text-[#2626BF] rounded-full w-full flex items-center gap-2"
    >
      <img src="/img/home/blue-info.svg" >
      <span>ارزی که انتخاب کردید در خارج از ایران دریافت خواهید کرد.</span>
    </div>
    <!-- form -->
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full">
      <!-- select  -->
      <div class="relative flex flex-col w-full lg:w-[30%]">
        <label
          for="currency"
          class="absolute z-10 right-[17px] top-[-10px] flex items-center justify-center bg-white w-[36px] h-[21px] text-[#71757A] text-[10px] font-medium mb-2"
          >نوع ارز</label
        >
        <div class="relative">
          <select
            id="currency"
            name="currency"
            class="inputs-style block w-full border font-medium px-6 pr-10 appearance-none cursor-pointer border-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] text-[13px] placeholder:text-[#33373D] text-[#33373D] placeholder:font-medium"
          >
            <option v-for="option in currenciesOptions" :key="option.value" :value="option.value">
              {{ option.name }}
            </option>
          </select>
          <img
            class="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none"
            src="/img/home/Vector.svg"
          >
        </div>
      </div>
      <!-- inputs  -->
      <div class="flex flex-col w-full lg:w-[35%]">
        <!-- <label for="transaction-volume" class="text-[#2626BF] text-base mb-2">حجم تراکنش</label> -->
        <input
          id="transaction-volume"
          name="transaction-volume"
          type="text"
          placeholder="حجم تراکنش"
          class="inputs-style border border-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] placeholder:text-[#33373D] placeholder:font-medium"
        >
        <div
          class="flex items-center gap-1 text-[#71757A] text-[10px] mt-0.5 font-medium"
        >
          <img src="/img/home/gray-info.svg" >
          مثلا ۱۰۰۰ تا
        </div>
      </div>

      <div class="flex flex-col w-full lg:w-[35%]">
        <!-- <label for="exchange-rate" class="text-[#2626BF] text-base mb-2">نرخ تبدیل پیشنهادی</label> -->
        <input
          id="exchange-rate"
          name="exchange-rate"
          type="text"
          placeholder="نرخ تبدیل پیشنهادی"
          class="inputs-style border border-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] placeholder:text-[#33373D] placeholder:font-medium"
        >
        <div
          class="flex items-center gap-1 text-[#71757A] text-[10px] mt-0.5 font-medium"
        >
          <img src="/img/home/gray-info.svg" >
          مثلا ۹۵.۰۰۰ تومان
        </div>
      </div>
    </div>
    <div
      class="mt-8 p-3 lg:p-2 text-xs bg-[#F0F2F5] text-[#2626BF] rounded-xl w-full flex items-center gap-3"
    >
      <img class="hidden lg:block" src="/img/home/card-img.png" >
      <div class="gap-1 lg:gap-0 flex flex-col justify-between">
        <span class="text-[14px] lg:text-lg font-bold">۳۰۰.۰۰۰.۰۰۰ تومان</span>
        <span class="text-[10px] lg:text-[12px]"
          >به حساب پی‌جیب واریز می‌کنید.</span
        >
      </div>
      <div class="gap-1 lg:gap-0 flex flex-col justify-between">
        <span class="text-[14px] lg:text-lg font-bold">۲.۵٪ کارمزد</span>
        <span class="text-[10px] lg:text-[12px]"
          >پی‌جیب برای این درخواست دریافت می‌کند.</span
        >
      </div>
    </div>
  </div>
</template>