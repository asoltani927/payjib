<template>
    <!-- footer  -->
    <div class="w-full bg-[#f0f2f5] lg:border-t border-[#9999BF]">
        <BaseContainer class="w-full">
            <div
                class=" w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-8  py-8 px-6 lg:px-16">
                <div class="flex flex-col gap-3 items-start">
                    <img class="" src="/img/home/Logo2.svg">
                    <div class="font-medium text-[13px] w-[214px] text-[#71757A]">
                        لورم ایپسوم متن ساختگی با تولید
                        سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است
                    </div>
                    <div class="flex items-center text-[10px] text-[#A0A1A3] gap-1">
                        <img class="" src="/img/home/Group.svg">
                        <span>کلیه حقوق برای پی جیب محفوظ است.</span>
                    </div>
                </div>

                <div class="flex gap-8">
                    <div class="hidden lg:flex flex-col items-start lg:mt-5">
                        <NuxtLink to="#" class="text-[14px] font-bold text-[#71757A]">
                            <span class="text-[#71757A] text-[13px] ">وبلاگ</span>
                        </NuxtLink>


                    </div>
                    <div class="hidden lg:flex flex-col items-start gap-2 lg:mt-5">
                        <NuxtLink to="#" class="text-[14px] font-bold text-[#71757A]">
                            <span class="text-[#71757A] text-[13px] ">قوانین و مقررات</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-col items-start gap-1 lg:mt-5">
                        <div class="text-[13px] font-bold text-[#71757A] mb-1">تماس با پی جیب</div>
                        <NuxtLink to="#" class="flex items-center gap-1 text-[14px] font-bold text-[#71757A]">
                            <img class="" src="/img/home/sms.svg">
                            <span class="text-[#71757A] text-[13px] ">info@payjib.ir</span>
                        </NuxtLink>
                        <NuxtLink to="#" class="flex items-center gap-1 text-[14px] font-bold text-[#71757A]">
                            <img class="" src="/img/home/call.svg">
                            <span class="text-[#71757A] text-[13px] ">+۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷ - +۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷</span>
                        </NuxtLink>
                        <NuxtLink to="#" class="flex items-center gap-1 text-[14px] font-bold text-[#71757A]">
                            <img class="" src="/img/home/whatsapp.svg">
                            <span class="text-[#71757A] text-[13px] ">+۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷ - +۹۸ ۲۱ ۸۸۱۲ ۹۲۸۷</span>
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex gap-2 flex-col lg:hidden  items-start ">
                    <NuxtLink to="#" class="text-[14px] font-bold text-[#71757A]">
                        <span class="text-[#71757A] text-[13px] ">قوانین و مقررات</span>
                    </NuxtLink>
                    <NuxtLink to="#" class="text-[14px] font-bold text-[#71757A]">
                        <span class="text-[#71757A] text-[13px] ">وبلاگ</span>
                    </NuxtLink>
                </div>
            </div>
        </BaseContainer>
    </div>
</template>

<script>

</script>
