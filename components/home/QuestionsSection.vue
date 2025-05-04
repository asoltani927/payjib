<template>
    <!-- Questions Section -->
    <div class="tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-[53px] tw-py-8 lg:tw-py-[96px] tw-px-6 lg:tw-px-[139px] tw-bg-white">
        <div class="tw-flex tw-flex-col tw-items-center tw-gap-2">
            <span class="tw-text-[#2626BF] tw-font-bold tw-text-lg lg:tw-text-[45px]">سوالات متداول</span>
            <span class="tw-text-[#0F1114] tw-font-medium  tw-text-[12px] lg:tw-text-lg">در این بخش می‌توانید راهنمایی‌های لازم را پیدا
                کنید.</span>
        </div>

        <div class="tw-w-full tw-flex tw-flex-col tw-items-center">
            <div v-for="(item, index) in questions" :key="index" class="tw-w-full ">
                <!-- Question -->
                <div @click="toggleAnswer(index)" class="tw-cursor-pointer  tw-border-[#F0F2F5] tw-py-4 lg:tw-py-6 tw-px-6 tw-flex tw-gap-4 tw-items-center" :class="{ 'tw-border-b-2': !item.isOpen }">
                    <img v-if="item.isOpen" class="" src="/img/home/minus-cirlce.svg">
                    <img v-else class="" src="/img/home/Plus, Add.svg">
                    <span class="lg:tw-text-[23px] tw-font-semibold tw-text-[#0F1114]" :class="{ 'tw-text-[#2E2EE5]': item.isOpen }">{{
                        item.question }}</span>
                </div>

                <!-- Answer -->
                <div v-show="item.isOpen" class="tw-border-b-2 tw-border-[#F0F2F5] tw-text-[#33373D] tw-text-[14px] lg:tw-text-[16px] tw-pb-6 tw-px-6">
                    <p class="tw-text-[#0F1114] tw-font-medium tw-text-justify">{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuestionsSection',
    data() {
        return {
            questions: [
                {
                    question: 'درخواست خرید یا فروش دقیقاً به چه معناست؟',
                    answer: 'در این بخش، خرید و فروش از طریق سیستم‌های غیرمتمرکز انجام می‌شود...',
                    isOpen: false
                },
                {
                    question: 'نرخ تبادل ارز توسط چه کسی مشخص می‌شود؟',
                    answer: 'نرخ تبادل ارز به صورت خودکار توسط سیستم پی جیب تعیین می‌شود...',
                    isOpen: false
                },
                {
                    question: 'کارمزد پی جیب در هر تراکنش چقدر است؟',
                    answer: 'کارمزد تراکنش‌ها بستگی به نوع ارز و میزان تراکنش دارد...',
                    isOpen: false
                }
            ]
        }
    },
    methods: {
        toggleAnswer(index) {
            // Toggle the answer visibility
            this.questions[index].isOpen = !this.questions[index].isOpen

            // Close other answers when a new question is clicked
            this.questions.forEach((item, idx) => {
                if (idx !== index) {
                    item.isOpen = false
                }
            })
        }
    }
}
</script>
