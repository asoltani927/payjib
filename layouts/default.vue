<template>
    <div>
        <BaseHeader />
        <NuxtPage />
    </div>
</template>

<script setup>
// import Footer from '~/components/Footer'
// import ErrorDialog from '~/components/ErrorDialog'
// import EventGtmService from '~/services/EventGtmService'

onMounted(async () => {
    // try {
    //     await EventGtmService(useNuxtApp().$axios).handlePendingGtmTransactions()
    // } catch (error) {
    //     console.error('Error while handling pending GTM transactions', error)
    // }
})
</script>

<style>
#app {
    overflow: hidden !important;
}
</style>
