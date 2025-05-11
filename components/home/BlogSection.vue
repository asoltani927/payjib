<template>
    <!-- blog -->
    <div class="w-full flex flex-col items-center pt-8 pb-6 lg:py-[80px] lg:px-[139px] bg-white">
        <!-- title -->
        <div class="w-full flex justify-between items-center mb-8 px-6 lg:px-0">
            <h3 class="text-[#0F1114] text-lg lg:text-[28px] font-bold">آخرین مطالب مجله پی‌جیب</h3>
            <nuxt-link to="https://payjib.com/blog/"
                class="flex items-center gap-2 font-bold text-[14px] lg:text-lg cursor-pointer">
                <span class="text-[#2E2EE5]">ادامه در وبلاگ</span>
                <img src="/img/home/arrow-square-left.svg">
            </nuxt-link>
        </div>

        <!-- cards -->
        <div class="w-[99%]  rtl flex items-center gap-4 mx-auto overflow-x-auto notShowScrollbar">
            <!-- card  -->
            <div v-for="i in 5" :key="i"
                class="mx-6 lg:mx-0 flex-shrink-0 w-[312px] min-w-[312px] lg:w-[352px] lg:min-w-[352px] bg-white rounded-2xl p-4 ps-7 border-2 border-[#D5DDEA] flex flex-col items-start">
                <div class="flex justify-between items-center w-full gap-3">
                    <img cclass="w-[76px] h-[102px] rounded-lg me-3 bg-gray-400" src="/img/Rectangle 6304.png">
                    <div class="flex flex-col">
                        <h4 class="text-[#0F1114] font-semibold lg:text-lg mb-2">پرداخت دانشگاه‌های خارج از کشور</h4>
                        <p class="text-[#0F1114] text-[12px] lg:text-sm">
                            این روزها اهداف بسیاری از دانشجویان داخل ایران سفر
                            به کشوری دیگر برای...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
