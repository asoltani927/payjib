<script setup lang="ts">

</script>
<template>
  <!-- hero -->
  <div class="bg-[#2626BF]">
    <div
      class="lg:px-24 items-center justify-between pb-12 lg:pb-[120px] gap-4 lg:gap-28 w-full h-full bg-[url(/img/home/hero-bg-2.png)] bg-cover bg-no-repeat pt-[70px] lg:pt-[185px]">
      <BaseContainer>
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-[45%] flex flex-col items-center lg:items-start text-[#E5E5E5]">
            <img class="mt-4 w-[129px] h-[74px] lg:w-[258px] lg:h-[149px]" src="/img/home/payjib-text.svg">
            <!-- <span>img</span> -->
            <div class="lg:text-3xl pb-8 lg:pb-0 text-center font-medium lg:text-start">
             <h1 class="mb-2 lg:mb-4"> تبادل، انتقال و حواله ارز راحت و سریع </h1>
             <span> با کمترین کارمزد</span>
            </div>
            <a 
            id="btn-login-or-register-home-page" href="https://payjib.com/auth/login"
              class="hidden lg:flex items-center justify-center mt-8 rounded-full w-[158px] h-[61px] bg-[#FFBF00] font-black text-[22px] text-[#0F1114]">
              ثبت نام کنید
            </a>
            <span class="hidden lg:flex mt-12 text-2xl font-medium"> از هر جای دنیا که هستید </span>
            <HomeFlagCarousel class="hidden lg:flex" />
          </div>
          <SharedExchangeCalculator />
          <div class="px-6 w-full flex lg:hidden flex-col items-center text-[#E5E5E5]">
            <span
             class="flex mt-6"> از هر جای دنیا که هستید </span>
            <a 
            id="btn-login-or-register-home-page" href="https://payjib.com/auth/login"
              class="flex items-center justify-center mt-5 mb-5 rounded-full w-[152px] h-[41px] bg-[#FFBF00] font-bold text-[#0F1114]">
              ثبت نام کنید
            </a>
            <HomeFlagCarousel />
          </div>
        </div>
      </BaseContainer>
    </div>
  </div>
</template>
