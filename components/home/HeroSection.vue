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
            <a href="https://payjib.com/auth/login"
              class="hidden lg:flex items-center justify-center mt-8 rounded-full w-[158px] h-[61px] bg-[#FFBF00] font-bold text-xl text-[#0F1114]"
            >
              ثبت نام کنید
            </a>
            <span class="hidden lg:flex mt-12"> از هر جای دنیا که هستید </span>
            <HomeFlagCarousel/>
          </div>
          <SharedExchangeCalculator />
          <div
            class="px-6 w-full flex lg:hidden flex-col items-center text-[#E5E5E5]"
          >
            <span class="flex mt-6 text-[14px]"> از هر جای دنیا که هستید </span>
            <a href="https://payjib.com/auth/login"
              class="flex items-center justify-center mt-4 mb-3 rounded-full w-[152px] h-[41px] bg-[#FFBF00] font-bold text-[#0F1114]"
            >
              ثبت نام کنید
            </a>
            <HomeFlagCarousel/>
          </div>
        </div>
      </BaseContainer>
    </div>
  </div>
</template>
