<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const countries = [
    { id: 1, name: 'آلمان', IMG_URL: 'germany.svg', slug: 'germany' },
    { id: 2, name: 'استرالیا', IMG_URL: 'australia.svg', slug: 'australia' },
    { id: 3, name: 'فنلاند', IMG_URL: 'finland.svg', slug: 'finland' },
    { id: 4, name: 'ترکیه', IMG_URL: 'turkey.svg', slug: 'turkey' },
    { id: 5, name: 'سوییس', IMG_URL: 'switzerland.svg', slug: 'switzerland' },
    { id: 6, name: 'سوئد', IMG_URL: 'sweden.svg', slug: 'sweden' },
    { id: 7, name: 'انگلستان', IMG_URL: 'united-kingdom.svg', slug: 'england' },
    { id: 8, name: 'اسپانیا', IMG_URL: 'spain.svg', slug: 'spain' },
    { id: 9, name: 'روسیه', IMG_URL: 'russia.svg', slug: 'russia' },
    { id: 10, name: 'پرتغال', IMG_URL: 'portugal.svg', slug: 'portugal' },
    { id: 11, name: 'نروژ', IMG_URL: 'norway.svg', slug: 'norway' },
    { id: 12, name: 'بلژیک', IMG_URL: 'belgium.svg', slug: 'belgium' },
    { id: 13, name: 'ایتالیا', IMG_URL: 'italy.svg', slug: 'italy' },
    { id: 14, name: 'اتریش', IMG_URL: 'austria.svg', slug: 'austria' },
    { id: 15, name: 'فرانسه', IMG_URL: 'france.svg', slug: 'france' },
    { id: 16, name: 'هلند', IMG_URL: 'netherlands.svg', slug: 'netherlands' }
]

const animatingFlags = ref<number[]>([])

let interval: ReturnType<typeof setInterval>

onMounted(() => {
    interval = setInterval(() => {
        const count = Math.floor(Math.random() * 3) + 5
        const randomIndexes = Array.from({ length: 16 }, (_, i) => i)
            .sort(() => Math.random() - 0.5)
            .slice(0, count)

        animatingFlags.value = randomIndexes

        setTimeout(() => {
            animatingFlags.value = []
        }, 1500)
    }, 3000)
})

onUnmounted(() => {
    clearInterval(interval)
})

</script>


<template>
    <div class="w-full bg-[#f0f2f5] py-[56px] lg:py-[126px] px-6 lg:px-24">
        <BaseContainer>
            <div
                class="w-full grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4 lg:gap-y-[55px] items-center  ">
                <h2
                    class="lg:ps-4 col-span-3 text-center lg:text-start lg:col-span-2 text-[#2626BF] text-[32px] lg:text-[40px] font-black">
                    حواله ارز از همه جا</h2>
                <nuxt-link
v-for="(item, index) in countries" :key="`item-${index}`" :to="`/transfer-money-${item.slug}`"
                    class="flex lg:items-center gap-3.5 ">
                    <img
class="w-6 h-6 lg:w-fit lg:h-auto transition-transform duration-[1000ms] ease-in-out"
                        :class="animatingFlags.includes(index) ? 'scale-50' : 'scale-100'"
                        :src="`/home/img/home/${item.IMG_URL}`" >

                    <h3 class="flex flex-col gap-0.5 text-xs lg:text-sm">
                        <span class="text-[#0F1114] text-nowrap">انتقال پول از/به</span>
                        <span class="text-[#2626BF] font-black">{{ item.name }}</span>
                    </h3>
                </nuxt-link>

            </div>
        </BaseContainer>
    </div>
</template>
