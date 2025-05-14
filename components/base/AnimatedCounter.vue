<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  to: number
  duration?: number
  suffix?: string
  play?: boolean
}>()

const displayValue = ref('0')
const hasPlayed = ref(false)

const formatNumber = (n: number) => {
  const number = Math.floor(n)
  return number.toLocaleString('en-US') + (props.suffix || '')
}

const animate = () => {
  const start = 0
  const end = props.to
  const duration = props.duration ?? 2000 // ← زمان ثابت برای همه

  const startTime = performance.now()

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1)
    const easedProgress = easeInOutCubic(progress) // ← حرکت نرم و طبیعی
    const current = start + (end - start) * easedProgress
    displayValue.value = formatNumber(current)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

// حرکت نرم در ابتدا و انتها
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

watch(() => props.play, (val) => {
  if (val && !hasPlayed.value) {
    animate()
    hasPlayed.value = true
  }
})
</script>

<template>
  <span>{{ displayValue }}</span>
</template>
