<script setup lang="ts">

// const articles = await useLatestArticles();
const articles = [
  { id: 1, title: 'تفاوت دلار سفید و آبی چیست؟<br/> انواع ارز را بشناسید', content: 'دلار آبی و سبز موقع خرید تفاوتی ندارند ولی زمان فروش دلار سبز ارزان تر است...', Img_Url: '/img/home/blog-image-1.png' },
  { id: 2, title: 'بانکداری نوین یا<br/> بانکداری سنتی؟!', content: 'جهان، روز به روز در حال پیشرفت است و همگان در پی یافتن راهی برای حل مشکلات...', Img_Url: '/img/home/blog-image-2.png' },
  { id: 3, title: 'پرداخت دانشگاه‌های خارج<br/> از کشور', content: 'این روزها اهداف بسیاری از دانشجویان داخل ایران، سفر به کشوری دیگر برای...', Img_Url: '/img/home/blog-image-3.png' }
]
</script>

<template>
  <div class="w-full  pt-8 pb-6 lg:py-[80px] lg:px-24 bg-white">
    <BaseContainer>
      <div class="w-full flex flex-col items-center">
        <!-- title -->
        <div class="w-full flex justify-between items-center mb-10 px-6 lg:px-0">
          <h3 class="text-[#0F1114] text-lg lg:text-[28px] font-bold">
            آخرین مطالب مجله پی‌جیب
          </h3>
          <nuxt-link to="https://payjib.com/blog/"
            class="flex items-center gap-2 font-bold text-[14px] lg:text-lg cursor-pointer">
            <span class="text-[#2E2EE5]">ادامه در وبلاگ</span>
            <img src="/img/home/arrow-square-left.svg">
          </nuxt-link>
        </div>

        <div
          class="flex gap-4 notShowScrollbar overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:grid grid-cols-3 w-full">
          <div 
            v-for="(article, index) in articles" :key="`article-${index}`"
            class="shrink-0 w-[85%] sm:w-1/2 lg:w-full bg-white rounded-2xl p-4 pe-6 border-2 border-[#D5DDEA] flex flex-col items-start"
            :class="[
              index === 0 ? 'ms-6 lg:ms-0' : '',
              index === articles.length - 1 ? 'me-6 lg:me-0' : ''
            ]">
            <div class="flex w-full gap-3">
              <img class="w-[76px] h-[102px] rounded-lg me-3 bg-gray-400" :src="article.Img_Url">
              <div class="flex flex-col">
                <h4 class="text-[#0F1114] font-semibold lg:text-lg mb-2" v-html="article.title">
                </h4>
                <p class="text-[#0F1114] text-[12px] lg:text-sm">
                  {{ article.content }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </BaseContainer>
  </div>
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