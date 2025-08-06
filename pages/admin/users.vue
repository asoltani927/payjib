<script setup lang="ts">
import { computed, ref } from 'vue'

definePageMeta({
    layout: false,
});

const currentPage = ref(1)
const itemsPerPage = 5

const users = [
  { fullName: 'فاطمه خادمی', phone: '+989177744125', createdAt: '1404/06/23' },
  { fullName: 'علی رضایی', phone: '+989123456789', createdAt: '1404/06/24' },
  { fullName: 'ندا احمدی', phone: '+989112223344', createdAt: '1404/06/25' },
  { fullName: 'مهدی زمانی', phone: '+989334455667', createdAt: '1404/06/26' },
  { fullName: 'زهرا موسوی', phone: '+989101112233', createdAt: '1404/06/27' },
  { fullName: 'رضا بهرامی', phone: '+989109998877', createdAt: '1404/06/28' },
  { fullName: 'سمیه کیانی', phone: '+989331234567', createdAt: '1404/06/29' },
  { fullName: 'امیر نوروزی', phone: '+989351111111', createdAt: '1404/06/30' },
  { fullName: 'سارا همتی', phone: '+989381234567', createdAt: '1404/07/01' },
  { fullName: 'محمد صادقی', phone: '+989391234567', createdAt: '1404/07/02' },
  { fullName: 'الهام شریفی', phone: '+989101234567', createdAt: '1404/07/03' },
  { fullName: 'کامران احمدی', phone: '+989111234567', createdAt: '1404/07/04' },
  { fullName: 'ندا مرادی', phone: '+989121234567', createdAt: '1404/07/05' },
  { fullName: 'فرزاد ملکی', phone: '+989131234567', createdAt: '1404/07/06' },
  { fullName: 'ریحانه ناصری', phone: '+989141234567', createdAt: '1404/07/07' },
  { fullName: 'پروین اسدی', phone: '+989151234567', createdAt: '1404/07/08' },
  { fullName: 'حسین توسلی', phone: '+989161234567', createdAt: '1404/07/09' },
  { fullName: 'نسرین طاهری', phone: '+989171234567', createdAt: '1404/07/10' },
  { fullName: 'مسعود کریمی', phone: '+989181234567', createdAt: '1404/07/11' },
  { fullName: 'سعید عزیزی', phone: '+989191234567', createdAt: '1404/07/12' },
  { fullName: 'الهه مشیری', phone: '+989201234567', createdAt: '1404/07/13' },
  { fullName: 'کیوان فروتن', phone: '+989211234567', createdAt: '1404/07/14' },
  { fullName: 'شیما یوسفی', phone: '+989221234567', createdAt: '1404/07/15' },
  { fullName: 'پدرام شفیعی', phone: '+989231234567', createdAt: '1404/07/16' },
  { fullName: 'مهسا رضوانی', phone: '+989241234567', createdAt: '1404/07/17' },
  { fullName: 'سهیل عبادی', phone: '+989251234567', createdAt: '1404/07/18' },
  { fullName: 'طناز موسوی', phone: '+989261234567', createdAt: '1404/07/19' },
  { fullName: 'حمید نصیری', phone: '+989271234567', createdAt: '1404/07/20' },
  { fullName: 'فرنوش خجسته', phone: '+989281234567', createdAt: '1404/07/21' },
  { fullName: 'نیما یکتاپور', phone: '+989291234567', createdAt: '1404/07/22' },
  { fullName: 'بهاره جلیلی', phone: '+989301234567', createdAt: '1404/07/23' },
  { fullName: 'سام قنبری', phone: '+989311234567', createdAt: '1404/07/24' },
  { fullName: 'آرزو نادری', phone: '+989321234567', createdAt: '1404/07/25' },
  { fullName: 'کامبیز حقانی', phone: '+989331234567', createdAt: '1404/07/26' },
  { fullName: 'پریسا نوربخش', phone: '+989341234567', createdAt: '1404/07/27' },
  { fullName: 'وحید فرامرزی', phone: '+989351234567', createdAt: '1404/07/28' },
  { fullName: 'ساناز میرزایی', phone: '+989361234567', createdAt: '1404/07/29' },
  { fullName: 'حامد امینی', phone: '+989371234567', createdAt: '1404/08/01' },
  { fullName: 'شهرزاد داودی', phone: '+989381234567', createdAt: '1404/08/02' },
  { fullName: 'میلاد قربانی', phone: '+989391234567', createdAt: '1404/08/03' },
  { fullName: 'لیلا رستمی', phone: '+989401234567', createdAt: '1404/08/04' },
  { fullName: 'مجید توسلی', phone: '+989411234567', createdAt: '1404/08/05' },
  { fullName: 'افسانه رمضانی', phone: '+989421234567', createdAt: '1404/08/06' },
  { fullName: 'صادق کشاورز', phone: '+989431234567', createdAt: '1404/08/07' },
  { fullName: 'مونا اسماعیلی', phone: '+989441234567', createdAt: '1404/08/08' },
  { fullName: 'جواد رسولی', phone: '+989451234567', createdAt: '1404/08/09' },
  { fullName: 'مریم صبوری', phone: '+989461234567', createdAt: '1404/08/10' },
  { fullName: 'نوید جهانی', phone: '+989471234567', createdAt: '1404/08/11' },
  { fullName: 'پرنیا طهماسبی', phone: '+989481234567', createdAt: '1404/08/12' },
  { fullName: 'ندا سلطانی', phone: '+989491234567', createdAt: '1404/08/13' },
]


const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return users.slice(start, start + itemsPerPage)
})


</script>

<template>
    <div class="bg-[#EAEEF5] min-h-screen flex flex-col justify-start items-center">
        <admin-users-header />
        <BaseContainer>
            <!-- Filter and Export -->
            <div class="w-full mt-4 px-4 lg:px-16 py-6">
                <admin-users-filters />
                <admin-users-Table
                 :users="paginatedUsers" 
                 :currentPage="currentPage"
                  :itemsPerPage="itemsPerPage"
                    :totalItems="users.length"
                     @update:currentPage="(val) => (currentPage = val)" />
            </div>
        </BaseContainer>

    </div>
</template>