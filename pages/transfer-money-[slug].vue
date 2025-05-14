<script setup>
import countries from '@/data/countries.json'
import { useRoute, useError } from 'nuxt/app'
import { useSeoMeta } from '#app'

const route = useRoute()
const slug = route.params.slug

const countryData = countries[slug]

if (!countryData) {
  throw useError({ statusCode: 404, message: 'کشور مورد نظر یافت نشد' })
}

useSeoMeta({
  title: countryData.title,
  ogTitle: countryData.title,
  description: countryData.meta_description,
  ogDescription: countryData.meta_description,
  ogImage: countryData.flag_url,
//   ogUrl: `https://payjib.com/transfer-money-/${slug}`,
  twitterCard: 'summary_large_image'
})
</script>
<template>
    <div class="w-full h-full overflow-x-hidden">
        <div class="rtl w-full">
            <ExchangeHeroSection :country="countryData" />
            <ExchangeStepsSection :countryName="countryData.country_name"/>
            <ExchangeWhyPayjibSection/>
            <ExchangePayjibAudienceSection :countryName="countryData.country_name" :monetaryUnit="countryData.monetary_unit"/>
            <ExchangePayjibDescriptionSection :countryName="countryData.country_name" :monetaryUnit="countryData.monetary_unit"/>
            <ExchangeSecondRegistrationSection />
            <ExchangeQuestionsSection />
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 0;
    width: 100%;
    max-width: 1088px;
}
</style>
