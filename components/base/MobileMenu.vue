<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" class="bg-[#2626BF] text-white rounded-b-3xl" :showCloseIcon="false" position="top"
            style="height: auto">
            <div class="flex items-center justify-between pb-6 mb-6 border-b">
                <img src="/img/home/logo-mobile.svg" class="mr-2 block lg:hidden" />
                <div @click="visible = false" class="cursor-pointer">
                    <img src="/img/home/icon-close.svg" />
                </div>
            </div>
            <div class="flex flex-col ">
                <nuxt-link :to="{ name: 'index' }" class="px-3 py-2 text-white">
                    خانه
                </nuxt-link>
                <nuxt-link :to="{ name: 'index' }" class="px-3 py-2 text-white">
                    خدمات
                </nuxt-link>
                <nuxt-link :to="{ name: 'index' }" class="px-3 py-2 text-white">
                    سوالات متداول
                </nuxt-link>
                <nuxt-link :to="{ name: 'index' }" class="px-3 py-2 text-white">
                  وبلاگ
                </nuxt-link>
                <nuxt-link :to="{ name: 'index' }" class="px-3 py-2 text-white">
                  پشتیبانی
                </nuxt-link>
                <nuxt-link :to="{ name: 'index' }" class="px-3 py-2 text-white">
                  درباره پی جیب
                </nuxt-link>
            </div>
        </Drawer>
        <img @click="visible = true" class="block lg:hidden" src="/img/home/mobile-menu.svg" />
    </div>
</template>
