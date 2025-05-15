<script setup lang="ts">
const isOpenAnswer = ref<number>(-1)

const questions = [
    {
        question: 'درخواست خرید یا فروش دقیقاً به چه معناست؟',
        answer: 'در این بخش، خرید و فروش از طریق سیستم‌های غیرمتمرکز انجام می‌شود...',
    },
    {
        question: 'نرخ تبادل ارز توسط چه کسی مشخص می‌شود؟',
        answer: 'نرخ تبادل ارز به صورت خودکار توسط سیستم پی جیب تعیین می‌شود...',
    },
    {
        question: 'کارمزد پی جیب در هر تراکنش چقدر است؟',
        answer: 'کارمزد تراکنش‌ها بستگی به نوع ارز و میزان تراکنش دارد...',
    },
]

const toggleAnswer = (index: number): void => {
    isOpenAnswer.value = isOpenAnswer.value === index ? -1 : index
}
</script>

<template>
    <!-- Questions Section -->
    <BaseContainer>
        <div class="w-full flex flex-col items-center gap-[53px] py-8 lg:py-[96px] px-6 lg:px-16 bg-white">
            <div class="flex flex-col items-center gap-2">
                <span class="text-[#2626BF] font-bold text-lg lg:text-[40px] mb-4">سوالات متداول راجع به انتقال
                    ارز</span>
                <span class="text-[#0F1114] font-medium  text-[12px] lg:text-lg">در این بخش می‌توانید راهنمایی‌های لازم
                    را
                    پیدا
                    کنید.</span>
            </div>

            <div class="w-full flex flex-col items-center">
                <div v-for="(item, index) in questions" :key="index" class="w-full ">
                    <!-- Question -->
                    <div
class="cursor-pointer  border-[#F0F2F5] py-4 lg:py-6 px-6 flex gap-4 items-center"
                        :class="{ 'border-b-2': index !== isOpenAnswer }" @click="toggleAnswer(index)">
                        <img v-if="index === isOpenAnswer" class="" src="/img/home/minus-cirlce.svg">
                        <img v-else class="" src="/img/home/plus-add.svg">
                        <span
class="lg:text-[21px] font-semibold text-[#0F1114]"
                            :class="{ 'text-[#2E2EE5]': index === isOpenAnswer }">{{
                                item.question }}</span>
                    </div>

                    <!-- Answer -->
                    <div
v-show="index === isOpenAnswer"
                        class="border-b-2 border-[#F0F2F5] text-[#33373D] text-[14px] lg:text-[16px] pb-6 px-6">
                        <p class="text-[#0F1114] font-medium text-justify">{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </BaseContainer>
</template>
