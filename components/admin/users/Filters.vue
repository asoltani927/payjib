<script setup lang="ts">
import { ref } from 'vue'

const startDate = ref();
const endDate = ref();

const onExportClick = () =>{
    console.log('export');
    
}
</script>

<template>
    <div class="w-full flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 justify-between">
        <h2 class="text-[22px] font-bold">اطلاعات کاربران</h2>
        <div class="flex flex-col gap-1 items-start">
            <span class="font-semibold text-[13px]">تاریخ ثبت</span>
            <div class="w-full flex flex-wrap items-center gap-4">
                <div class="w-full lg:w-fit flex flex-col lg:flex-row items-center gap-4">
                    <div class="relative w-full lg:w-28">
                        <DatePicker dir="rtl" v-model="startDate" class="w-full" placeholder="از" dateFormat="yy/mm/dd" />
                        <img v-if="!startDate" src="/home/img/chevron-down-blue.svg"
                            class="w-3 h-3 absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none"
                            alt="dropdown icon" />
                    </div>
                    <div class="relative w-full lg:w-28">

                        <DatePicker v-model="endDate" class="w-full" placeholder="تا" dateFormat="yy/mm/dd" />
                        <img v-if="!endDate" src="/home/img/chevron-down-blue.svg"
                            class="w-3 h-3 absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none"
                            alt="dropdown icon" />
                    </div>
                </div>
                <UiButton @click="onExportClick" caption="خروجی اکسل" class="rounded-xl w-full lg:!w-[132px] text-[15px] ms-2" />
            </div>
        </div>

    </div>
</template>
