<script setup lang="ts">
defineProps({
    countryName: {
        type: String,
        required: true
    },
    monetaryUnit: {
        type: String,
        required: true
    },
});

</script>
<template>
    <!-- services  -->
    <BaseContainer>
        <div id="services" class="flex flex-col lg:items-center pt-0 pb-20 lg:py-8 lg:pt-3 lg:pb-[120px] lg:px-16">
            <h2
                class="ms-6 lg:ms-0 text-[#2626BF] text-[24px] lg:text-center lg:text-[40px] mb-6 lg:mb-[80px] font-bold">
                سرویس پرداخت ارزی و تبادل ارز <br class="block lg:hidden" > پی‌جیب<br class="hidden lg:block" >
                مناسب چه کسانی است؟
            </h2>
            <div
                class="w-full flex notShowScrollbar overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:grid lg:grid-cols-4 gap-x-4 lg:gap-y-[64px] lg:justify-center">
                <!-- card 1  -->
                <div class="shrink-0 ms-6 lg:ms-0 w-[312px] lg:w-full flex flex-col">
                    <img
class="w-full h-[220px] lg:h-[260px] rounded-xl bg-gray-400 mb-6"
                        src="/img/home/payjib-audience1.png">
                    <div class="flex items-center gap-4">

                        <div class="text-[#0F1114] text-xl lg:text-[22px] font-semibold">
                            انتقال ارز
                        </div>
                    </div>
                    <h3 class="text-[#33373D] font-medium text-sm mt-3">
                        افرادی که قصد انتقال پول از {{ countryName }} به ایران یا بالعکس را دارند
                    </h3>
                </div>
                <!-- card 2  -->
                <div class="shrink-0 w-[312px] lg:w-full flex flex-col">
                    <img
class="w-full  h-[220px] lg:h-[260px] rounded-xl bg-gray-400 mb-6"
                        src="/img/home/payjib-audience2.png">
                    <div class="flex items-center gap-4">

                        <div class="text-[#0F1114] text-xl lg:text-[22px] font-semibold">
                            دانشجویان
                        </div>
                    </div>
                    <h3 class="text-[#33373D] font-medium text-sm  mt-3">
                        دانشجویان ایرانی در {{ countryName }} که نیاز به دریافت ارز دارند
                    </h3>
                </div>
                <!-- card 3  -->
                <div class="shrink-0 w-[312px] lg:w-full flex flex-col">
                    <img
class="w-full  h-[220px] lg:h-[260px] rounded-xl bg-gray-400 mb-6"
                        src="/img/home/payjib-audience3.png">
                    <div class="flex items-center gap-4">

                        <div class="text-[#0F1114] text-xl lg:text-[22px] font-semibold">
                            فریلنسرها
                        </div>
                    </div>
                    <h3 class="font-medium text-[#33373D] text-sm  mt-3">
                        فریلنسرهایی که از {{ countryName }} درآمد ارزی دارند
                    </h3>
                </div>
                <!-- card 4  -->
                <div class="me-6 lg:me-0 shrink-0 w-[312px] lg:w-full flex flex-col">
                    <img
class="w-full  h-[220px] lg:h-[260px] rounded-xl bg-gray-400 mb-6"
                        src="/img/home/payjib-audience4.png">
                    <div class="flex items-center gap-4">

                        <div class="text-[#0F1114] text-xl lg:text-[22px] font-semibold">
                            خانواده‌ها
                        </div>
                    </div>
                    <h3 class="text-[#33373D] font-medium text-sm mt-3">
                        خانواده‌هایی که به دنبال حواله سریع و مطمئن {{ monetaryUnit }} هستند.
                    </h3>
                </div>

            </div>
        </div>
    </BaseContainer>

</template>
