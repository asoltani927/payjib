<script setup lang="ts">
defineProps<{
  country: {
    country_name: string
    slug: string
    flag_url: string
    title: string
    monetary_unit: string
    meta_description: string
    section: {
      heading: string
      content1: string
      content2: string
    }
  }
}>()
</script>



<template>
  <!-- hero -->
  <div class="bg-[#2626BF]">
    <div
      class="lg:px-16 items-center lg:items-start justify-between pb-12 lg:pb-[100px] gap-10 lg:gap-28 w-full h-full bg-[url(/img/home/Hero-Bg-Blue.png)] bg-cover bg-no-repeat pt-[120px] lg:pt-[200px]"
    >
      <BaseContainer>
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div
            class="lg:w-1/2 flex flex-col items-center lg:items-start text-[#E5E5E5]"
          >
            <div
              class="flex flex-col text-white items-center lg:items-start gap-3.5"
            >
              <img
                class="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] mb-1"
                :src="`/img/home/${country.flag_url}.svg`"
              />
              <span class="text-sm lg:text-3xl">انتقال ارز از/به</span>
              <span class="font-bold text-[36px] lg:text-[57px]">{{ country.country_name }}</span>
            </div>

            <p class="hidden text-start leading-8 lg:flex mt-4">{{ country.section.content1 }}</p>
            <p class="hidden text-start leading-8 lg:flex mt-2">{{ country.section.content2 }}</p>
            <a href="https://payjib.com/auth/login"
              class="hidden lg:flex items-center justify-center mt-8 rounded-full w-[158px] h-[61px] bg-[#FFBF00] font-bold text-xl text-[#0F1114]"
            >
              شروع ثبت نام
            </a>
          </div>
          <SharedExchangeCalculator />
          <div
            class="px-6 w-full flex lg:hidden flex-col items-center text-[#E5E5E5]"
          >
              <p class="flex text-center leading-8 mt-6 text-[14px]">{{ country.section.content1 }}</p>
            <p class="flex text-center leading-8 mt-2 text-[14px]">{{ country.section.content2 }}</p>
            <a href="https://payjib.com/auth/login"
              class="flex items-center justify-center mt-4 mb-3 rounded-full w-[152px] h-[41px] bg-[#FFBF00] font-bold text-[#0F1114]"
            >
              شروع ثبت نام
            </a>
          </div>
        </div>
      </BaseContainer>
    </div>
  </div>
</template>

