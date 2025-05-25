<template>
    <!-- footer  -->
    <div class="w-full bg-[#f0f2f5] lg:border-t border-[#9999BF]  py-8 px-6 lg:px-24">
        <BaseContainer class="w-full">
            <div class="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 ">
                <div class=" w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-8">
                    <div class="flex flex-col justify-between gap-3 items-start">
                        <div class="flex flex-col gap-3 items-start">
                            <nuxt-link to="/"> <img class="" src="/img/home/Logo2.svg"></nuxt-link>
                            <p class="font-bold text-justify lg:text-start leading-6 text-[13px] text-[#71757A]">
                                در پی‌جیب می‌توانید مبلغ مورد نظرتان را به سرعت و<br class="hidden lg:block"> با
                                کم‌ترین کارمزد، از ایران به اروپا،
                                استراليا، كانادا و<br class="hidden lg:block"> تركيه یا بالعکس، با کمک سایر کاربران
                                پی‌جیب،<br class="hidden lg:block"> انتقال دهید.
                            </p>
                        </div>

                        <div class="flex items-center text-[10px] text-[#A0A1A3] gap-1">
                            <img class="" src="/img/home/Group.svg">
                            <span>کلیه حقوق برای پی جیب محفوظ است.</span>
                        </div>
                    </div>

                    <div class="flex gap-8">
                        <div class="hidden lg:flex flex-col gap-2 items-start">
                            <a href="https://payjib.com/terms" class="text-[14px] font-bold text-[#71757A]">
                                <span class="text-[#71757A] text-[13px] ">قوانین و مقررات</span>
                            </a>
                            <a href="https://payjib.com/blog/" class="text-[14px] font-bold text-[#71757A]">
                                <span class="text-[#71757A] text-[13px] ">وبلاگ</span>
                            </a>


                        </div>
                        <div class="grid grid-cols-2 lg:flex flex-row lg:flex-col items-start gap-3">
                            <div class="flex flex-col items-start gap-3">
                                <div class="text-[13px] font-bold text-[#71757A] mb-0.5">تماس با پی‌جیب</div>
                                <a 
                                id="btn-mail" href="mailto:info@payjib.ir"
                                    class="flex items-center gap-1 text-[14px] font-bold text-[#71757A]">
                                    <img class="" src="/img/home/sms.svg">
                                    <span class="text-[#71757A] text-[13px] ">info@payjib.ir</span>
                                </a>

                                <div 
                                to="#"
                                    class="flex items-start lg:items-center gap-1 text-[14px] font-bold text-[#71757A]">
                                    <img class="" src="/img/home/Telegram3.svg">
                                    <div
                                        class="flex flex-col lg:flex-row items-center gap-1 lg:gap-2 text-[#71757A] text-[13px] font-bold">
                                        <a 
                                        id="btn-telegram" href="https://t.me/+989101369884" class="ltr">+98
                                            9101369884</a>
                                        <span class="hidden lg:block">-</span>
                                        <a id="btn-telegram" href="https://t.me/+989356049661" class="ltr">+98
                                            9356049661</a>
                                    </div>
                                </div>
                                <div 
                                to="#"
                                    class="flex items-start lg:items-center gap-1 text-[14px] font-bold text-[#71757A]">
                                    <img class="" src="/img/home/whatsapp.svg">
                                    <div
                                        class="flex flex-col lg:flex-row items-center gap-1 lg:gap-2 text-[#71757A] text-[13px] font-bold">
                                        <a id="btn-whatsapp" href="https://wa.me/989101369884" class="ltr">+98
                                            9101369884</a>
                                        <span class="hidden lg:block">-</span>
                                        <a id="btn-whatsapp" href="https://wa.me/989356049661" class="ltr">+98
                                            9356049661</a>
                                    </div>
                                </div>

                            </div>

                            <div class="flex flex-col items-start gap-3 mt-8 lg:mt-0">
                                <div class="flex items-center gap-1 text-[14px] font-bold text-[#71757A]">
                                    <img class="" src="/img/home/call.svg">
                                    <div class="flex items-center gap-2 text-[#71757A] text-[13px] font-bold ">
                                        <a id="btn-tel" href="tel:02188129287" class="ltr">0 21 8812 9287</a>
                                    </div>
                                </div>

                                <div to="#" class="flex items-start gap-1 text-[14px] font-bold text-[#71757A]">
                                    <img class="" src="/img/home/location3.svg">
                                    <div
                                        class="text-justify flex items-center gap-2 text-[#71757A] text-[13px] font-bold ">
                                        استان : تهران - شهرستان : تهران - بخش : مرکزی - شهر : تهران - محله<br
                                            class="hidden lg:block"> : حسن
                                        آباد
                                        -
                                        زرگنده - خیابان شهید سیامک شکرآبی - خیابان امام زاده -<br class="hidden lg:block"> پلاک : ۱۸ - طبقه
                                        :۲
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="flex gap-2 flex-col lg:hidden  items-start ">
                        <a href="https://payjib.com/terms" class="text-[14px] font-bold text-[#71757A]">
                            <span class="text-[#71757A] text-[13px] ">قوانین و مقررات</span>
                        </a>
                        <a href="https://payjib.com/blog/" class="text-[14px] font-bold text-[#71757A]">
                            <span class="text-[#71757A] text-[13px] ">وبلاگ</span>
                        </a>
                    </div>
                </div>
                <div class="">
                    <a 
                    referrerpolicy="origin" target="_blank"
                        href="https://trustseal.enamad.ir/?id=609124&amp;Code=lvXgGFcJrtROzjxwsLye02tmeTgO9fRq">
                        <img 
                        width="125px" height="125px" referrerpolicy="origin" src="/img/enamad.png" alt=""
                            code="lvXgGFcJrtROzjxwsLye02tmeTgO9fRq" style="cursor:pointer;" data-v-23c55edc="">
                    </a>
                </div>
            </div>

        </BaseContainer>
    </div>
</template>

<script>

</script>
