<template>
  <!-- services  -->
  <div class="pt-10 pb-20 lg:py-8 lg:pt-[96px] lg:pb-[120px] lg:px-24">
    <BaseContainer>
      <div class="flex flex-col lg:items-center">
        <h2 class="text-[#2626BF] text-[24px] text-center lg:text-[40px] mb-6 lg:mb-[80px] font-bold">
          چرا انتقال ارز با پی‌جیب؟
        </h2>
        <div
          class="w-full flex notShowScrollbar overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:grid lg:grid-cols-2 gap-x-4 lg:gap-y-[64px] lg:justify-center">
          <div class="hidden animate-triangle-motion"/>
          <!-- card 1  -->
          <div class="shrink-0 ms-6 lg:ms-0 w-[312px] lg:w-full flex flex-col">
            <img class="w-full h-[220px] lg:h-[326px] rounded-xl bg-gray-400 mb-6" src="/home/img/home/why-payjib1.png" >
            <div class="flex items-center gap-5">
              <img class="w-8 h-8 lg:w-fit lg:h-auto animate-triangle-motion" src="/home/img/home/shield-security.svg" >
              <h3 class="text-[#0F1114] text-xl lg:text-[28px] font-semibold">
                جایی برای کلاهبرداری نیست
              </h3>
            </div>
            <p class="text-[#33373D] font-medium text-sm lg:text-lg mt-3">
              پی‌جیب پول‌ها را تا زمان تأیید کامل هر دو طرف در حساب شرکتی
              خود نگه می‌دارد و بدون اطمینان از انجام تبادل، انتقالی انجام
              نمی‌شود.
            </p>
          </div>
          <!-- card 2  -->
          <div class="shrink-0 w-[312px] lg:w-full flex flex-col">
            <img class="w-full h-[220px] lg:h-[326px] rounded-xl bg-gray-400 mb-6" src="/home/img/home/why-payjib2.png" >
            <div class="flex items-center gap-5">
              <img class="w-8 h-8 lg:w-fit lg:h-auto  animate-triangle-motion" src="/home/img/home/finger-scan.svg" >
              <h3 class="text-[#0F1114] text-xl lg:text-[28px] font-semibold">
                احراز هویت دقیق
              </h3>
            </div>
            <p class="text-[#33373D] font-medium text-sm lg:text-lg mt-3">
              تمام کاربران پی‌جیب واقعی، با مدارک شناسایی و تائید شده هستند.
              اینجا جایی برای ریسک نیست.
            </p>
          </div>
          <!-- card 3  -->
          <div class="shrink-0 w-[312px] lg:w-full flex flex-col">
            <img class="w-full h-[220px] lg:h-[326px] rounded-xl bg-gray-400 mb-6" src="/home/img/home/why-payjib3.png" >
            <div class="flex items-center gap-4">
              <img class="w-8 h-8 lg:w-fit lg:h-auto  animate-triangle-motion" src="/home/img/home/security-time.svg" >
              <h3 class="text-[#0F1114] text-xl lg:text-[28px] font-semibold">
                کارمزد منصفانه، سرعت فوق‌العاده
              </h3>
            </div>
            <p class="font-medium text-[#33373D] text-sm lg:text-lg mt-3">
              با کمترین هزینه و بالاترین سرعت، تبادل ارز انجام می‌شود.
            </p>
          </div>
          <!-- card 4  -->
          <div class="shrink-0 w-[312px] lg:w-full flex flex-col">
            <img class="w-full h-[220px] lg:h-[326px] rounded-xl bg-gray-400 mb-6" src="/home/img/home/why-payjib4.png" >
            <div class="flex items-center gap-4">
              <img class="w-8 h-8 lg:w-fit lg:h-auto  animate-triangle-motion" src="/home/img/home/24-support.svg" >
              <h3 class="text-[#0F1114] text-xl lg:text-[28px] font-semibold">
                پشتیبانی همیشه آنلاین
              </h3>
            </div>
            <p class="text-[#33373D] font-medium text-sm lg:text-lg mt-3">
              ما تعطیلی نداریم؛ هر وقت تصمیم بگیرید در کنارتان هستیم.
            </p>
          </div>
          <!-- card 5  -->
          <div class="shrink-0 w-[312px] lg:w-full me-6 lg:me-0 flex flex-col">
            <img class="w-full h-[220px] lg:h-[326px] rounded-xl bg-gray-400 mb-6" src="/home/img/home/why-payjib5.png" >
            <div class="flex items-center gap-4">
              <img class="w-8 h-8 lg:w-fit lg:h-auto  animate-triangle-motion" src="/home/img/home/flag.svg" >
              <h3 class="text-[#0F1114] text-xl lg:text-[28px] font-semibold">
                مراحل شفاف
              </h3>
            </div>
            <p class="text-[#33373D] font-medium text-sm lg:text-lg mt-3">
              هر قدم از تراکنش با اطلاع و تائید خودتان انجام می‌شود. ادمین‌های ما
              هم همیشه همراهتان هستند.
            </p>
          </div>
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