    <script setup lang="ts">
    import { ref, watch } from 'vue'
    import datePicker from 'vue3-persian-datetime-picker';

    const startDate = ref('')
    const endDate = ref('')

    const onExportClick = () => {
        console.log('export');
    }

    const emit = defineEmits(['update:startDate', 'update:endDate'])

    watch(startDate, (newVal) => emit('update:startDate', newVal))
    watch(endDate, (newVal) => emit('update:endDate', newVal))
</script>

    <template>
        <div class="w-full flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 justify-between">
            <h2 class="text-[22px] font-bold">اطلاعات کاربران</h2>
            <div class="flex flex-col gap-1 items-start">
                <span class="font-semibold text-[13px]">تاریخ ثبت</span>
                <div class="w-full flex flex-wrap items-center gap-4">
                    <div class="w-full lg:w-fit flex flex-col lg:flex-row items-center gap-4">

                        <ClientOnly>
                            <div class="w-full lg:w-[28] relative">
                                <input type="text"
                                    class="custom-input-start h-12 rounded-lg px-2 w-full lg:w-28 text-sm placeholder:text-gray-900"
                                    placeholder="از" />
                                <img v-if="!startDate" src="/home/img/chevron-down-blue.svg"
                                    class="w-3 h-3 absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                    alt="dropdown icon" />
                                <date-picker v-model="startDate" :max="new Date()" color="#FFBF00" input-format="jDD jMMMM jYYYY"
                                    format="jDD jMMMM jYYYY" display-format="jDD jMMMM jYYYY"
                                    custom-input=".custom-input-start" />
                                <img v-if="startDate" @click="startDate = ''" src="/home/img/delete-svgrepo-com.svg"
                                    class="bg-white w-[18px] absolute z-50 cursor-pointer end-2 top-[23px] -translate-y-1/2 pointer-events-auto"
                                    alt="delete icon" />
                            </div>
                        </ClientOnly>

                        <ClientOnly>
                            <div class="w-full lg:w-[28] relative">
                                <input type="text"
                                    class="custom-input h-12 rounded-lg px-2 w-full lg:w-28 text-sm placeholder:text-gray-900"
                                    placeholder="تا" />
                                <img v-if="!endDate" src="/home/img/chevron-down-blue.svg"
                                    class="w-3 h-3 absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                    alt="dropdown icon" />
                                <date-picker v-model="endDate" :min="startDate" :max="new Date()" color="#FFBF00" input-format="jDD jMMMM jYYYY"
                                    format="jDD jMMMM jYYYY" display-format="jDD jMMMM jYYYY"
                                    custom-input=".custom-input" />
                                <img v-if="endDate" @click="endDate = ''" src="/home/img/delete-svgrepo-com.svg"
                                    class="bg-white w-[18px] absolute z-50 cursor-pointer end-2 top-[23px] -translate-y-1/2 pointer-events-auto"
                                    alt="delete icon" />
                            </div>
                        </ClientOnly>

                    </div>
                    <UiButton @click="onExportClick" caption="خروجی اکسل"
                        class="rounded-xl w-full lg:!w-[132px] text-[15px] ms-2" />
                </div>
            </div>

        </div>
    </template>
