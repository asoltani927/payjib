<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  to: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1500,
  },
});

const current = ref(0);
const formattedValue = ref('۰ تومان');

const formatCurrency = (value) => {
  return `${new Intl.NumberFormat('fa-IR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)} تومان`;
};

const animate = () => {
  const start = 0;
  const end = props.to;
  const duration = props.duration;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    current.value = Math.floor(progress * (end - start) + start);
    formattedValue.value = formatCurrency(current.value);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

watch(() => props.to, () => {
  animate();
});

onMounted(() => {
  animate();
});
</script>

<template>
  <span>{{ formattedValue }}</span>
</template>