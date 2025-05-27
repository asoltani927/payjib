<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(false);
const isShowSubmenus = ref(false);

const telegramLinks = [
  "https://t.me/+989101369884",
  "https://t.me/+989356049661",
];
const whatsappLinks = [
  "https://wa.me/989101369884",
  "https://wa.me/989356049661",
];

const randomTelegramLink = ref("");
const randomWhatsappLink = ref("");

onMounted(() => {
  randomTelegramLink.value = telegramLinks[Math.floor(Math.random() * telegramLinks.length)];
  randomWhatsappLink.value = whatsappLinks[Math.floor(Math.random() * whatsappLinks.length)];
});
</script>

<template>
  <div class="card flex justify-center">
    <Drawer
v-model:visible="visible" class="!bg-[#2626BF] text-white rounded-b-3xl" :show-close-icon="false"
      position="top" style="height: auto">
      <div class="flex items-center justify-between pb-6 mb-6 border-b">
        <nuxt-link to="/" class="mr-2 block lg:hidden">
          <img src="/home/img/home/logo-mobile.svg" >
        </nuxt-link>
        <div class="cursor-pointer" @click="visible = false">
          <img src="/home/img/home/icon-close.svg" >
        </div>
      </div>

      <div class="flex flex-col ">
        <nuxt-link to="/" class="px-3 py-2 text-white">خانه</nuxt-link>
        <a href="https://payjib.com/blog/" class="px-3 py-2 text-white">وبلاگ</a>

        <div class="w-full flex flex-col gap-3 py-2 px-3">
          <div
class="cursor-pointer flex items-center gap-2.5 text-white font-normal text-sm"
            @click="isShowSubmenus = !isShowSubmenus">
            <span>پشتیبانی</span>
            <img src="/home/img/home/arrow-square-down.svg" :class="isShowSubmenus ? 'rotate-180' : ''" >
          </div>
          <div
v-if="isShowSubmenus"
            class="text-[#2626BF] bg-white rounded-xl shadow-lg px-4 p-3 mb-2 text-sm z-50 w-full">
            <a id="btn-telegram" :href="randomTelegramLink" class="flex items-center gap-1 mb-4">
              <img src="/home/img/telegram-2.svg" alt="telegram-icon" >
              تلگرام
            </a>
            <a id="btn-whatsapp" :href="randomWhatsappLink" class="flex items-center gap-1">
              <img src="/home/img/whatsapp2.svg" alt="whatsapp-icon" >
              واتساپ
            </a>
          </div>
        </div>

        <a href="https://payjib.com/terms" class="px-3 py-2 text-white">قوانین پی‌جیب</a>
      </div>
    </Drawer>
    <img src="/home/img/home/menu-burger-circle.svg" class="block lg:hidden" @click="visible = true" >
  </div>
</template>
