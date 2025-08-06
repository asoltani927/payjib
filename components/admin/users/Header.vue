<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref<boolean>(false)
const onLogoutClick = () => {
    console.log('خروج')
}
</script>

<template>
    <div class="w-full bg-[#F5F7FA]">
        <BaseContainer>
            <!-- Header -->
            <div class="w-full  flex items-center justify-between px-4 lg:px-16 py-3 h-[80px]">
                <img src="/home/img/admin-logo.svg" alt="PayJib Logo" class="" />

                <!-- Dropdown Trigger -->
                <div class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
                    <div
                        class="w-[56px] h-[32px] cursor-pointer flex items-center justify-center border border-[#2626BF] gap-1 rounded-lg">
                        <img src="/home/img/emoji.svg" alt="emoji" />
                        <img src="/home/img/chevron-down-blue.svg" alt="chevron"
                            :class="['transition-transform duration-300', isOpen ? 'rotate-180' : 'rotate-0']" />
                    </div>

                    <!-- Dropdown Menu -->
                    <div v-if="isOpen" class="absolute top-8 right-0 w-[56px] pt-1">
                        <button @click="onLogoutClick"
                            class="w-full  bg-white border hover:text-red-500 border-gray-300 rounded-lg shadow-lg z-10 text-center py-2 text-sm font-semibold cursor-pointer">
                            خروج
                        </button>
                    </div>

                </div>

            </div>
        </BaseContainer>
    </div>

</template>


<style scoped></style>