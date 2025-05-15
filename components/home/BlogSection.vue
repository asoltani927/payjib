<script setup lang="ts">
const articles = await useLatestArticles();
</script>

<template>
  <BaseContainer>
    <div
      class="w-full flex flex-col items-center pt-8 pb-6 lg:py-[80px] lg:px-16 bg-white"
    >
      <!-- title -->
      <div class="w-full flex justify-between items-center mb-10 px-6 lg:px-0">
        <h3 class="text-[#0F1114] text-lg lg:text-[28px] font-bold">
          آخرین مطالب مجله پی‌جیب
        </h3>
        <nuxt-link
          to="https://payjib.com/blog/"
          class="flex items-center gap-2 font-bold text-[14px] lg:text-lg cursor-pointer"
        >
          <span class="text-[#2E2EE5]">ادامه در وبلاگ</span>
          <img src="/img/home/arrow-square-left.svg" >
        </nuxt-link>
      </div>

      <!-- carousel -->
      <Carousel
        :value="[...articles]"
        :num-visible="3"
        :num-scroll="1"
        :responsive-options="[
          { breakpoint: '1400px', numVisible: 3, numScroll: 3 },
          { breakpoint: '1024px', numVisible: 2, numScroll: 2 },
          { breakpoint: '640px', numVisible: 1, numScroll: 1 },
        ]"
        :show-indicators="true"
        :show-navigators="false"
        :circular="true"
        class="w-full"
        dir="rtl"
      >
        <template #item="{ data: article }">
          <div
            class="flex-shrink-0 w-[96%] lg:w-[98%] bg-white rounded-2xl p-4 pe-6 border-2 border-[#D5DDEA] flex flex-col items-start"
          >
            <div class="flex w-full gap-3">
              <img
                class="w-[76px] h-[102px] rounded-lg me-3 bg-gray-400"
                :src="article.thumbnail"
              >
              <div class="flex flex-col">
                <h4 class="text-[#0F1114] font-semibold lg:text-lg mb-2">
                  {{ article.title }}
                </h4>
                <p class="text-[#0F1114] text-[12px] lg:text-sm">
                  {{ article.content.substr(0,75) + '...' }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </BaseContainer>
</template>

<style>
/* .p-carousel-item-list:dir(rtl){
    flex-direction: row !important;
} */

.p-carousel-indicator .p-carousel-indicator-button {
  background: #c9cbf2 !important;
  background-color: #c9cbf2 !important;
  border: 1px solid red !;
  width: 8px !important;
  height: 8px !important;
}

.p-carousel-indicator-active .p-carousel-indicator-button {
  background-color: #2e2ee5 !important;
  width: 56px !important;
  height: 8px !important;
}
</style>