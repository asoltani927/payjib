<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
const comments = [
    {
        name: 'مرتضی',
        country: 'بلژیک',
        flag: '/img/home/belgium.svg',
        comment: 'انتقال ارز به سرعت انجام شد و خاطرجمع بودم',
        audio: '/voice/morteza.ogg',
    },
    {
        name: 'سمانه',
        country: 'آلمان',
        flag: '/img/home/germany.svg',
        comment: 'اول تردید داشتم اما همه‌چی به‌موقع‌، بی‌استرس و با پشتیبانی خوب انجام شد',
        audio: '/voice/samaneh.ogg',
    },
    {
        name: 'شیما',
        country: 'ایران',
        flag: '/img/home/iran.svg',
        comment: 'حتما از پلتفرم شما بابت پاسخگویی، نظم و قابل اعتماد بودن دوباره استفاده می‌کنم',
        audio: '/voice/shima.ogg',
    },
    {
        name: 'محدثه',
        country: 'آلمان',
        flag: '/img/home/germany.svg',
        comment: 'راضی بودم، پول کامل به حساب واریزشد و در سریع‌ترین زمان ممکن',
        audio: '/voice/mohadeseh.ogg',
    },
    {
        name: 'فیروزه',
        country: 'فرانسه',
        flag: '/img/home/france.svg',
        comment: 'حتما از پی‌جیب دوباره استفاده می‌کنم چون یک پلتفرم امن و سریع برای من بود',
        audio: '/voice/firozeh.ogg',
    },
    {
        name: 'ماجده',
        country: 'آلمان',
        flag: '/img/home/germany.svg',
        comment: 'پی‌جیب کارم رو ساده‌تر کرد و همه چی در این پلتفرم قابل پیگیریه و استرس نمی‌گیرم',
        audio: '/voice/majedeh.ogg',
    },

];
</script>


<template>
    <!-- comments  -->

    <div class="w-full bg-[#f0f2f5] ">
        <div class="w-full flex flex-col items-center py-12 lg:py-[96px] lg:px-16">
            <BaseContainer>
                <div class="w-full  text-center text-[#2626BF] text-lg lg:text-[40px] mb-[80px] font-bold px-6 lg:px-0">
                    دیگران راجع به سرویس انتقال ارز با پی‌جیب
                    <br>
                    <div class="font-black text-[32px] lg:text-[55px] mt-4 lg:mt-10">
                        چه می‌گویند؟
                        <span class="font-black text-[32px] lg:text-[55px]">!
                        </span>
                    </div>

                </div>
                <div class="w-full overflow-hidden">
                    <!-- <div class="w-[99%]  flex items-center mx-auto overflow-x-auto notShowScrollbar gap-4"> -->
                    <Carousel
:value="comments" :num-visible="3" :num-scroll="1" :responsive-options="[
                        { breakpoint: '1400px', numVisible: 3, numScroll: 3 },
                        { breakpoint: '1024px', numVisible: 2, numScroll: 2 },
                        { breakpoint: '640px', numVisible: 1, numScroll: 1 }
                    ]" :show-indicators="true" :show-navigators="true" circular :autoplay-interval="3000"
                        class="w-full h-full" dir="rtl">
                        <template #item="{ data }">
                            <div
                                class="mx-2 flex-shrink-0 lg:min-w-[90%] lg:w-[376px] h-[200px] p-3 rounded-2xl shadow-xl bg-white flex flex-col justify-between gap-4 m-4 mb-12">
                                <div class="flex flex-col gap-3 ">
                                    <!-- user info -->
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-2">
                                            <img class="w-5 h-5" src="/img/home/profile-circle.svg" >
                                            <span class="font-medium text-[14px] text-[#0F1114]">{{ data.name }}</span>
                                        </div>

                                        <div
                                            class="flex items-center justify-start gap-1 bg-[#0052B426] ps-1 pe-2 h-[26px] rounded-full">
                                            <img :src="data.flag" class="w-[18px] h-[18px] rounded-full" >
                                            <span class="text-sm font-semibold text-[#0F1114]">{{ data.country }}</span>
                                        </div>
                                    </div>

                                    <!-- comment text -->
                                    <p class="text-[#33373D] text-sm leading-relaxed">«{{ data.comment }}.»</p>
                                </div>

                                <!-- audio player -->
                                <div class="flex items-center gap-3 w-full">
                                    <audio controls class="w-full direction-ltr overflow-hidden">
                                        <source :src="data.audio" type="audio/mpeg" >
                                        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
                                    </audio>
                                </div>
                            </div>
                        </template>
                    </Carousel>
                </div>
            </BaseContainer>
        </div>


    </div>
</template>
