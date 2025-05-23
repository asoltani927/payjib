<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchAppStats } from '~/api/statistics';


const playAnimation = ref(false)

const sectionRef = ref<HTMLElement | null>(null)

const stats = await fetchAppStats()
const registeredUsers = stats?.user_count ?? 0
const completedTransactions = stats?.transaction_count ?? 0
const requestedTransactions = stats?.requisition_count ?? 0
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <div ref="sectionRef" class="w-full py-8 lg:py-[60px] bg-[#2626BF]">
    <BaseContainer>
      <div class="w-full flex flex-col items-center">
        <span class="text-[#FFBF00] font-bold text-[24px] lg:text-[30px]">
          پی جیب در هفته‌ای که گذشت
        </span>
        <span class="text-white text-[13px] lg:text-[15px]">
          آپدیت شده در <span class="">1404/03/03</span>
        </span>
        <div class="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-8 items-center">
          <div class="lg:w-[301px] lg:h-[176px] flex flex-col items-center lg:mt-4">
            <img class="w-[70px] h-[70px] lg:w-[60px] lg:h-[60px]" src="/img/home/history1.svg" >
            <span class="text-[#FFBF00] font-black text-[27px] lg:text-[33px] mt-3">
              <BaseAnimatedCounter
                :to="registeredUsers"
                suffix=" +"
                :play="playAnimation"
              />
            </span>
            <span class="text-[14px] lg:text-xl text-white">تعداد افراد ثبت نامی</span>
          </div>

          <div class="lg:w-[301px] lg:h-[208px] flex flex-col items-center">
            <img class="w-[80px] h-[80px] lg:w-[110px] lg:h-[110px]" src="/img/home/history2.svg" >
            <span class="text-[#FFBF00] font-black text-[27px] lg:text-[42px] mt-1">
              <BaseAnimatedCounter
                :to="completedTransactions"
                :play="playAnimation"
              />
            </span>
            <span class="text-[14px] lg:text-xl text-white">تعداد تراکنش‌های انجام شده</span>
          </div>

          <div class="lg:w-[301px] lg:h-[176px] flex flex-col items-center lg:mt-4">
            <img  class="w-[70px] h-[70px] lg:w-[60px] lg:h-[60px]" src="/img/home/history3.svg" >
            <span class="text-[#FFBF00] font-black text-[27px] lg:text-[33px] mt-3">
              <BaseAnimatedCounter
                :to="requestedTransactions"
                suffix=" +"
                :play="playAnimation"
              />
            </span>
            <span class="text-[14px] lg:text-xl text-white">تعداد درخواست تراکنش</span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
