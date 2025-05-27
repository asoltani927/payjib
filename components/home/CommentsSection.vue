<script setup lang="ts">
import { ref } from 'vue'

const comments = [
    {
        name: 'مرتضی',
        country: 'بلژیک',
        flag: '/home/img/home/belgium.svg',
        comment: 'انتقال ارز <strong>به سرعت</strong> انجام شد و <strong>خاطرجمع</strong> بودم',
        audio: '/home/voice/morteza.ogg',
    },
    {
        name: 'سمانه',
        country: 'آلمان',
        flag: '/home/img/home/germany.svg',
        comment: 'اول تردید داشتم اما همه‌چی به موقع، <strong>بی‌استرس</strong> و با <strong>پشتیبانی خوب</strong> انجام شد',
        audio: '/home/voice/samaneh.ogg',
    },
    {
        name: 'شیما',
        country: 'ایران',
        flag: '/home/img/home/iran.svg',
        comment: 'حتما از پلتفرم شما بابت <strong>پاسخگویی</strong>، <strong>نظم</strong> و <strong>قابل اعتماد</strong> بودن دوباره استفاده می‌کنم',
        audio: '/home/voice/shima.ogg',
    },
    {
        name: 'محدثه',
        country: 'آلمان',
        flag: '/home/img/home/germany.svg',
        comment: 'راضی بودم،<strong> پول کامل</strong> به حساب واریز شد و در <strong>سریع‌ترین</strong> زمان ممکن',
        audio: '/home/voice/mohadeseh.ogg',
    },
    {
        name: 'فیروزه',
        country: 'فرانسه',
        flag: '/home/img/home/france.svg',
        comment: 'حتما از پی‌جیب دوباره استفاده می‌کنم چون یک <strong>پلتفرم امن و سریع</strong> برای من بود',
        audio: '/home/voice/firozeh.ogg',
    },
    {
        name: 'ماجده',
        country: 'آلمان',
        flag: '/home/img/home/germany.svg',
        comment: 'پی‌جیب کارم رو ساده‌تر کرد و همه چی در این پلتفرم <strong>قابل پیگیریه</strong> و <strong>استرس نمی‌گیرم</strong>',
        audio: '/home/voice/majedeh.ogg',
    },
];

const currentAudio = ref<HTMLAudioElement | null>(null)

function handlePlay(event: Event) {
    const target = event.target as HTMLAudioElement

    if (currentAudio.value && currentAudio.value !== target) {
        currentAudio.value.pause()
        currentAudio.value.currentTime = 0
    }

    currentAudio.value = target
}
</script>


<template>
    <!-- comments  -->

    <div class="w-full bg-[#f0f2f5] ">
        <div class="w-full flex flex-col items-center py-12 lg:py-[96px] lg:px-24">
            <BaseContainer>
                <h2
                    class="w-full  text-center text-[#2626BF] text-lg lg:text-[40px] mb-[80px] font-bold px-6 lg:px-0 leading-relaxed">
                    دیگران راجع به سرویس انتقال ارز با پی‌جیب
                    <br>
                    <span class="font-black text-[32px] lg:text-[55px] mt-4 lg:mt-10">
                        چه می‌گویند؟
                        !
                    </span>
                </h2>

                <div class="w-full overflow-hidden">
                    <!-- <div class="w-[99%]  flex items-center mx-auto overflow-x-auto notShowScrollbar gap-4"> -->
                    <Carousel 
                    :value="comments" :num-visible="3" :num-scroll="1" :responsive-options="[
                        { breakpoint: '1400px', numVisible: 3, numScroll: 3 },
                        { breakpoint: '1024px', numVisible: 2, numScroll: 2 },
                        { breakpoint: '640px', numVisible: 1, numScroll: 1 }
                    ]" :show-indicators="true" :show-navigators="true" class="w-full h-full" dir="rtl">
                        <template #item="{ data }">
                            <div
                                class="mx-2 flex-shrink-0 lg:min-w-[90%] lg:w-[376px] h-[200px] p-3 rounded-2xl shadow-xl bg-white flex flex-col justify-between gap-4 m-4 mb-12">
                                <div class="flex flex-col gap-3 ">
                                    <!-- user info -->
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-2">
                                            <img class="w-5 h-5" src="/home/img/home/profile-circle.svg">
                                            <span class="font-medium text-[14px] text-[#0F1114]">{{ data.name }}</span>
                                        </div>

                                        <div
                                            class="flex items-center justify-start gap-1 bg-[#0052B426] ps-1 pe-2 h-[26px] rounded-full">
                                            <img :src="data.flag" class="w-[18px] h-[18px] rounded-full">
                                            <span class="text-sm font-semibold text-[#0F1114]">{{ data.country }}</span>
                                        </div>
                                    </div>

                                    <!-- comment text -->
                                    <p class="text-[#33373D] text-sm leading-relaxed" v-html="`«${data.comment}.»`"></p>

                                </div>

                                <!-- audio player -->
                                <div class="flex items-center gap-3 w-full">
                                    <audio controls  class="w-full direction-ltr overflow-hidden" @play="handlePlay">
                                        <source :src="data.audio" type="audio/mpeg">
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
