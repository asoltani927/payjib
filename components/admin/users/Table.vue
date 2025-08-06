<script setup lang="ts">
import { ref, computed } from 'vue'

interface User {
  fullName: string
  phone: string
  createdAt: string
}

const users = ref<User[]>([])
for (let i = 1; i <= 50; i++) {
  users.value.push({
    fullName: `کاربر ${i}`,
    phone: `+9891234${i.toString().padStart(5, '0')}`,
    createdAt: `1404/06/${(20 + (i % 10)).toString().padStart(2, '0')}`
  })
}

const currentPage = ref(1)
const itemsPerPage = 5

const totalItems = computed(() => users.value.length)

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return users.value.slice(start, start + itemsPerPage)
})
</script>

<template>
  <!-- Table -->
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
        <tr
          v-for="(user, index) in paginatedUsers"
          :key="index"
          :class="[index % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]', 'text-[#1A1A1A] h-[48px] text-[10px] font-semibold']"
        >
          <td class="px-6 py-2">{{ user.fullName }}</td>
          <td class="px-6 py-2">{{ user.phone }}</td>
          <td class="px-6 py-2">{{ user.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <UiPagination
    v-model:currentPage="currentPage"
    :itemsPerPage="itemsPerPage"
    :totalItems="totalItems"
  />
</template>
