<template>
  <!-- Questions Section -->
  <div
    class="w-full flex flex-col items-center gap-[53px] py-8 lg:py-[96px] px-6 lg:px-[139px] bg-white"
  >
    <div class="flex flex-col items-center gap-2">
      <span class="text-[#2626BF] font-bold text-lg lg:text-[40px] mb-4"
        >سوالات متداول راجع به انتقال ارز</span
      >
      <span class="text-[#0F1114] font-medium text-[12px] lg:text-lg"
        >در این بخش می‌توانید راهنمایی‌های لازم را پیدا کنید.</span
      >
    </div>

    <div class="w-full flex flex-col items-center">
      <div v-for="(item, index) in questions" :key="index" class="w-full">
        <!-- Question -->
        <div
          @click="toggleAnswer(index)"
          class="cursor-pointer border-[#F0F2F5] py-4 lg:py-6 px-6 flex gap-4 items-center"
          :class="{ 'border-b-2': !item.isOpen }"
        >
          <img v-if="item.isOpen" class="" src="/img/home/minus-cirlce.svg" />
          <img v-else class="" src="/img/home/plus-add.svg" />
          <span
            class="lg:text-[21px] font-semibold text-[#0F1114]"
            :class="{ 'text-[#2E2EE5]': item.isOpen }"
            >{{ item.question }}</span
          >
        </div>

        <!-- Answer -->
        <div
          v-show="item.isOpen"
          class="border-b-2 border-[#F0F2F5] text-[#33373D] text-[14px] lg:text-[16px] pb-6 px-6"
        >
          <p class="text-[#0F1114] font-medium text-justify">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const questions = ref([
  {
    question: "درخواست خرید یا فروش دقیقاً به چه معناست؟",
    answer:
      "در این بخش، خرید و فروش از طریق سیستم‌های غیرمتمرکز انجام می‌شود...",
    isOpen: false,
  },
  {
    question: "نرخ تبادل ارز توسط چه کسی مشخص می‌شود؟",
    answer: "نرخ تبادل ارز به صورت خودکار توسط سیستم پی جیب تعیین می‌شود...",
    isOpen: false,
  },
  {
    question: "کارمزد پی جیب در هر تراکنش چقدر است؟",
    answer: "کارمزد تراکنش‌ها بستگی به نوع ارز و میزان تراکنش دارد...",
    isOpen: false,
  },
]);

const toggleAnswer = (index) => {
  // Toggle the answer visibility
  questions.value[index].isOpen = !questions.value[index].isOpen;

  // Close other answers when a new question is clicked
  questions.value.forEach((item, idx) => {
    if (idx !== index) {
      item.isOpen = false;
    }
  });
};
</script>
