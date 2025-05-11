<template>
    <!-- comments  -->
    <div class="w-full flex flex-col items-center py-12 lg:py-[96px] bg-[#f0f2f5] lg:px-[139px]">
        <h3 class="text-center text-[#2626BF] text-lg lg:text-[40px] mb-[80px] font-bold px-6 lg:px-0">
            دیگران راجع به سرویس انتقال ارز با پی‌جیب
            <br>
            <div class="font-black text-[32px] lg:text-[55px] mt-4 lg:mt-10">
                چه می‌گویند؟
                <span class="font-black text-[32px] lg:text-[55px]">!
                </span>
            </div>

        </h3>
        <div class="w-full flex flex-col gap-12 items-center">
            <div class="w-[99%]  flex items-center mx-auto overflow-x-auto notShowScrollbar gap-4">
                <div v-for="i in 5" :key="i"
                    class="mx-6 lg:mx-0 flex-shrink-0 min-w-[376px] w-[376px] p-3 rounded-2xl shadow-xl  bg-white flex flex-col gap-4">
                    <!-- user info -->
                    <div class="flex justify-between items-center">
                        <!-- right: user name -->
                        <div class="flex items-center gap-2">
                            <img class="w-5 h-5" src="/img/home/profile-circle.svg">
                            <span class="font-medium text-[14px] text-[#0F1114]">حمیدرضا</span>
                        </div>

                        <!-- left: country -->
                        <div class="flex items-center gap-1 bg-[#F0F2F5] pe-1 ps-2 h-[26px] rounded-full">
                            <img src="https://flagcdn.com/us.svg" alt="USA Flag" class="w-[18px] h-[18px] rounded-full">
                            <span class="text-sm font-semibold text-[#0F1114]">آمریکا</span>
                        </div>
                    </div>

                    <!-- comment text -->
                    <p class="text-[#33373D] text-sm leading-relaxed">
                        خیلی ممنونم از پلتفرم پی جیپ<br>
                        جدا از <span class="font-bold">خدمات خوب و مطمئنشون</span>، <span class="font-bold">پشتیبانی آن
                            تایم، پیگیر و قابل اعتمادی</span> دارند و واقعا جابه‌جایی ارز رو برای مایی که خارج از ایران
                        هستیم آسون‌تر کردند.
                    </p>

                    <!-- audio player -->
                    <div class="flex items-center gap-3 w-full">
                        <audio controls class="w-full direction-ltr bg-[#F0F2F5] rounded-xl overflow-hidden">
                            <source src="" type="audio/mpeg">
                            مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
                        </audio>
                    </div>
                </div>
            </div>
            <!-- pagination -->
            <div class="flex items-center gap-0.5">
                <div class="w-2 h-2 rounded-full bg-[#c9cbf2]"> <!-- img --></div>
                <div class="w-[36px] h-2 rounded-full bg-[#2E2EE5]"> <!-- img --></div>
                <div class="w-2 h-2 rounded-full bg-[#c9cbf2]"> <!-- img --></div>
            </div>
        </div>
    </div>
</template>
