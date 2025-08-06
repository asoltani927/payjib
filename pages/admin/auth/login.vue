<script setup lang="ts">
definePageMeta({
    layout: false
})
</script>

<template>
    <div class="bg-[#EAEEF5] h-screen flex flex-col gap-20 justify-start items-center">
        <!--   Header  -->
        <div class="w-full bg-[#F5F7FA] flex items-center justify-center h-[80px]">
            <img src="/home/img/admin-logo.svg" alt="admin-logo" />
        </div>
        <!--   Form  -->
        <div class="w-full lg:w-3/12 bg-white lg:rounded-2xl flex flex-col gap-4 p-8">
            <div class="text-lg font-semibold">ورود به حساب ادمین</div>
            <admin-login-form />
        </div>
    </div>
</template>