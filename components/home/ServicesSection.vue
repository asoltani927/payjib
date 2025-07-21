<script lang="ts">
const cards = [
  {
    img: "/home/img/home/why-payjib1.png",
    icon: "/home/img/home/shield-security.svg",
    title: "جایی برای کلاهبرداری نیست",
    description:
      "پی‌جیب پول‌ها را تا زمان تأیید کامل هر دو طرف در حساب شرکتی خود نگه می‌دارد و بدون اطمینان از انجام تبادل، انتقالی انجام نمی‌شود.",
  },
  {
    img: "/home/img/home/why-payjib2.png",
    icon: "/home/img/home/finger-scan.svg",
    title: "احراز هویت دقیق",
    description:
      "تمام کاربران پی‌جیب واقعی، با مدارک شناسایی و تائید شده هستند. اینجا جایی برای ریسک نیست.",
  },
  {
    img: "/home/img/home/why-payjib3.png",
    icon: "/home/img/home/security-time.svg",
    title: "کارمزد منصفانه، سرعت فوق‌العاده",
    description: "با کمترین هزینه و بالاترین سرعت، تبادل ارز انجام می‌شود.",
  },
  {
    img: "/home/img/home/why-payjib4.png",
    icon: "/home/img/home/24-support.svg",
    title: "پشتیبانی همیشه آنلاین",
    description: "ما تعطیلی نداریم؛ هر وقت تصمیم بگیرید در کنارتان هستیم.",
  },
  {
    img: "/home/img/home/why-payjib5.png",
    icon: "/home/img/home/flag.svg",
    title: "مراحل شفاف",
    description:
      "هر قدم از تراکنش با اطلاع و تائید خودتان انجام می‌شود. ادمین‌های ما هم همیشه همراهتان هستند.",
  },
];
</script>
<template>
  <!-- services  -->
  <div class="pt-10 pb-20 lg:py-8 lg:pt-[96px] lg:pb-[120px] lg:px-24">
    <BaseContainer>
      <div class="flex flex-col lg:items-center">
        <h2
          class="text-[#2626BF] text-[24px] text-center lg:text-[40px] mb-6 lg:mb-[80px] font-bold"
        >
          چرا انتقال ارز با پی‌جیب؟
        </h2>

        <div class="w-full overflow-hidden">
          <!-- <div class="w-[99%]  flex items-center mx-auto overflow-x-auto notShowScrollbar gap-4"> -->
          <Carousel
            :value="cards"
            :num-visible="3"
            :num-scroll="1"
            :responsive-options="[
              { breakpoint: '1400px', numVisible: 3, numScroll: 3 },
              { breakpoint: '1024px', numVisible: 2, numScroll: 2 },
              { breakpoint: '640px', numVisible: 1, numScroll: 1 },
            ]"
            :show-indicators="true"
            :show-navigators="true"
            class="w-full h-full"
            dir="rtl"
          >
            <template #item="{ data }">
              <div
                class="shrink-0 ms-6 lg:ms-0 w-[312px] lg:w-full flex flex-col"
              >
                <img
                  class="w-full h-[220px] lg:h-[326px] rounded-xl bg-gray-400 mb-6"
                  :src="data.img"
                />
                <div class="flex items-center gap-5">
                  <img
                    class="w-8 h-8 lg:w-fit lg:h-auto animate-triangle-motion"
                    :src="data.icon"
                  />
                  <h3
                    class="text-[#0F1114] text-xl lg:text-[28px] font-semibold"
                  >
                    {{ data.title }}
                  </h3>
                </div>
                <p class="text-[#33373D] font-medium text-sm lg:text-lg mt-3">
                  {{ data.description }}
                </p>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
<style>
@keyframes triangleMotion {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(-8px, -15px);
  }
  66% {
    transform: translate(-16px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.animate-triangle-motion {
  animation: triangleMotion 3s infinite ease-in-out;
}
</style>