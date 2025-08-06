<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    currentPage: number
    itemsPerPage: number
    totalItems: number
}>()

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.itemsPerPage)
)

const goPrev = () => {
    if (props.currentPage > 1) {
        emit('update:currentPage', props.currentPage - 1)
    }
}

const goNext = () => {
    if (props.currentPage < totalPages.value) {
        emit('update:currentPage', props.currentPage + 1)
    }
}

const paginationPages = computed<(number | string)[]>(() => {
    const pages: (number | string)[] = []
    const currentPage = props.currentPage
    const total = totalPages.value

    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i)
    } else {
        if (currentPage <= 4) {
            pages.push(1, 2, 3, 4, 5, '...', total)
        } else if (currentPage >= total - 3) {
            pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
        } else {
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', total)
        }
    }

    return pages
})
</script>

<template>
    <div v-if="totalPages > 1" class="flex justify-center items-center mt-8 text-[#8198C0] text-lg font-semibold gap-5"
        dir="rtl">
        <img src="/home/img/arrow.svg" alt="قبلی" class="cursor-pointer " @click="goPrev" />

        <span v-for="(page, index) in paginationPages" :key="index"
            @click="typeof page === 'number' && emit('update:currentPage', page)" :class="[
                'cursor-pointer',
                typeof page === 'number' && page === props.currentPage
                    ? 'text-black border-[#2626BF] px-2 rounded-sm border-[0.2px] h-[24px]'
                    : ''
            ]">
            {{ page }}
        </span>

        <img src="/home/img/arrow.svg" alt="بعدی" class="cursor-pointer rotate-180 " @click="goNext" />
    </div>
</template>
