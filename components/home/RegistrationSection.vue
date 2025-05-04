<template>
    <!-- register -->
    <nuxt-link to="/auth/login" class="tw-w-screen">
        <img class="tw-hidden lg:tw-block tw-w-full tw-h-[258px]" src="/img/home/login-img.svg">
        <img class="tw-block lg:tw-hidden tw-w-full tw-h-[212px]" src="/img/home/login-img-mobile.svg">
    </nuxt-link>
</template>

<script>
export default {
    name: 'RegistrationSection'
}
</script>
