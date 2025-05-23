<script setup lang="ts">
import { useSeoMeta } from '#app'

useSeoMeta({
  title: "تبادل ارز سریع و امن با کمترین کارمزد",
  titleTemplate: "پی جیب | %s",
});
</script>
<template>
  <div class="w-full h-full overflow-x-hidden">
    <div class="rtl w-full">
      <HomeHeroSection />
      <BaseSocialMediaSection />
      <HomeStepsSection />
      <HomeServicesSection />
      <HomeCommentsSection />
      <HomePayjibAudienceSection class="flex lg:hidden" />
      <HomeRegistrationSection />
      <HomeHistorySection />
      <HomePayjibAudienceSection class="hidden lg:flex" />
      <HomeSupportSection />
      <HomeCounselingSection />
      <HomeBlogSection />
      <HomeCurrencyExchangeSection />
      <HomeSecondRegistrationSection />
      <HomeQuestionsSection />
    </div>
    <HomeConsultationRequestModal />
  </div>
</template>

<style scoped>
.container {
  padding: 0;
  width: 100%;
  max-width: 1088px;
}
</style>
