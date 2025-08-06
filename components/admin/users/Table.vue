<script setup lang="ts">
import { computed } from 'vue'

interface User {
  fullName: string
  phone: string
  createdAt: string
}

const emit = defineEmits(['update:currentPage'])

const props = defineProps<{
  users: User[]
  currentPage: number
  itemsPerPage: number
  totalItems: number
}>()

const paginatedUsers = computed(() => {
  const start = (props.currentPage - 1) * props.itemsPerPage
  return props.users.slice(start, start + props.itemsPerPage)
})
</script>

<template>
  <div class="overflow-x-auto mt-10">
    <table class="w-full text-right">
      <thead>
        <tr class="text-[#0F1114] text-[11px]">
          <th class="px-6 py-2 font-black">نام و نام خانوادگی</th>
          <th class="px-6 py-2">شماره تماس</th>
          <th class="px-6 py-2">تاریخ ثبت</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in paginatedUsers" :key="index"
          :class="[index % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]', 'text-[#1A1A1A] h-[48px] text-[10px] font-semibold']">
          <td class="px-6 py-2">{{ user.fullName }}</td>
          <td class="px-6 py-2">{{ user.phone }}</td>
          <td class="px-6 py-2">{{ user.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <UiPagination v-model:currentPage="props.currentPage" :itemsPerPage="props.itemsPerPage"
    :totalItems="props.totalItems" @update:currentPage="(val) => emit('update:currentPage', val)" />
</template>
