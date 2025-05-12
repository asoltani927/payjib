
<script setup lang="ts">

</script>
<template>
  <!-- hero -->
  <div class="bg-[#2626BF]">
    <div
      class="lg:px-16 items-center justify-between pb-12 lg:pb-[120px] gap-4 lg:gap-28 w-full h-full bg-[url(/img/home/Hero-Bg-Blue.png)] bg-cover bg-no-repeat pt-[70px] lg:pt-[185px]"
    >
      <BaseContainer>
        <div class="flex flex-col lg:flex-row">
          <div
            class="lg:w-[45%] lg:h-[445px] flex flex-col items-center lg:items-start text-[#E5E5E5]"
          >
            <img
              class="mt-8 w-[129px] h-[74px] lg:w-[258px] lg:h-[149px]"
              src="/img/home/payjib-text.svg"
            />
            <!-- <span>img</span> -->
            <p class="text-[14px] lg:text-xl pb-6 lg:pb-0">
              تبادل، انتقال و حواله ارز راحت و سریع با کمترین کارمزد
            </p>
            <button
              class="hidden lg:flex items-center justify-center mt-8 rounded-full w-[158px] h-[61px] bg-[#FFBF00] font-bold text-xl text-[#0F1114]"
            >
              ثبت نام کنید
            </button>
            <span class="hidden lg:flex mt-12"> از هر جای دنیا که هستید </span>
            <div class="hidden lg:flex items-center gap-6 mt-4">
              <img src="/img/home/103-canada.svg" />
              <img src="/img/home/070-united-states-of-america.svg" />
              <img src="/img/home/036-european-union.svg" />
              <img src="/img/home/006-turkey.svg" />
              <img src="/img/home/015-australia.svg" />
            </div>
          </div>
          <SharedExchangeCalculator />
          <div
            class="px-6 w-full flex lg:hidden flex-col items-center text-[#E5E5E5]"
          >
            <span class="flex mt-6 text-[14px]"> از هر جای دنیا که هستید </span>
            <button
              class="flex items-center justify-center mt-4 mb-3 rounded-full w-[152px] h-[41px] bg-[#FFBF00] font-bold text-[#0F1114]"
            >
              ثبت نام کنید
            </button>
            <div class="flex items-center gap-7 mt-4">
              <img src="/img/home/103-canada.svg" />
              <img src="/img/home/070-united-states-of-america.svg" />
              <img src="/img/home/036-european-union.svg" />
              <img src="/img/home/006-turkey.svg" />
              <img src="/img/home/015-australia.svg" />
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  </div>
</template>
