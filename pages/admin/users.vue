<script setup lang="ts">
import { computed, ref } from 'vue'


definePageMeta({
    layout: false,
});

const currentPage = ref(1)
const itemsPerPage = 5
const startDate = ref('')
const endDate = ref('')

const users = [
    { fullName: 'فاطمه خادمی', phone: '+989177744125', createdAt: '16 مرداد 1404' },
    { fullName: 'علی رضایی', phone: '+989123456789', createdAt: '24 اردیبهشت 1404' },
    { fullName: 'ندا احمدی', phone: '+989112223344', createdAt: '25 اردیبهشت 1404' },
    { fullName: 'مهدی زمانی', phone: '+989334455667', createdAt: '26 اردیبهشت 1404' },
    { fullName: 'زهرا موسوی', phone: '+989101112233', createdAt: '27 اردیبهشت 1404' },
    { fullName: 'رضا بهرامی', phone: '+989109998877', createdAt: '28 اردیبهشت 1404' },
    { fullName: 'سمیه کیانی', phone: '+989331234567', createdAt: '29 اردیبهشت 1404' },
    { fullName: 'امیر نوروزی', phone: '+989351111111', createdAt: '30 اردیبهشت 1404' },
    { fullName: 'سارا همتی', phone: '+989381234567', createdAt: '1 فروردین 1404' },
    { fullName: 'محمد صادقی', phone: '+989391234567', createdAt: '2 فروردین 1404' },
    { fullName: 'الهام شریفی', phone: '+989101234567', createdAt: '3 فروردین 1404' },
    { fullName: 'کامران احمدی', phone: '+989111234567', createdAt: '4 فروردین 1404' },
    { fullName: 'ندا مرادی', phone: '+989121234567', createdAt: '5 فروردین 1404' },
    { fullName: 'فرزاد ملکی', phone: '+989131234567', createdAt: '6 فروردین 1404' },
    { fullName: 'ریحانه ناصری', phone: '+989141234567', createdAt: '1 فروردین 1404' },
    { fullName: 'پروین اسدی', phone: '+989151234567', createdAt: '3 فروردین 1404' },
    { fullName: 'حسین توسلی', phone: '+989161234567', createdAt: '9 فروردین 1404' },
    { fullName: 'نسرین طاهری', phone: '+989171234567', createdAt: '10 فروردین 1404' },
    { fullName: 'مسعود کریمی', phone: '+989181234567', createdAt: '11 فروردین 1404' },
    { fullName: 'سعید عزیزی', phone: '+989191234567', createdAt: '12 فروردین 1404' },
    { fullName: 'الهه مشیری', phone: '+989201234567', createdAt: '13 فروردین 1404' },
    { fullName: 'کیوان فروتن', phone: '+989211234567', createdAt: '14 فروردین 1404' },
    { fullName: 'شیما یوسفی', phone: '+989221234567', createdAt: '15 فروردین 1404' },
    { fullName: 'پدرام شفیعی', phone: '+989231234567', createdAt: '16 فروردین 1404' },
    { fullName: 'مهسا رضوانی', phone: '+989241234567', createdAt: '17 فروردین 1404' },
    { fullName: 'سهیل عبادی', phone: '+989251234567', createdAt: '18 فروردین 1404' },
    { fullName: 'طناز موسوی', phone: '+989261234567', createdAt: '19 فروردین 1404' },
    { fullName: 'حمید نصیری', phone: '+989271234567', createdAt: '20 فروردین 1404' },
    { fullName: 'فرنوش خجسته', phone: '+989281234567', createdAt: '21 فروردین 1404' },
    { fullName: 'نیما یکتاپور', phone: '+989291234567', createdAt: '22 فروردین 1404' },
    { fullName: 'بهاره جلیلی', phone: '+989301234567', createdAt: '23 فروردین 1404' },
    { fullName: 'سام قنبری', phone: '+989311234567', createdAt: '24 فروردین 1404' },
    { fullName: 'آرزو نادری', phone: '+989321234567', createdAt: '25 فروردین 1404' },
    { fullName: 'کامبیز حقانی', phone: '+989331234567', createdAt: '26 فروردین 1404' },
    { fullName: 'پریسا نوربخش', phone: '+989341234567', createdAt: '27 فروردین 1404' },
    { fullName: 'وحید فرامرزی', phone: '+989351234567', createdAt: '28 فروردین 1404' },
    { fullName: 'ساناز میرزایی', phone: '+989361234567', createdAt: '29 فروردین 1404' },
    { fullName: 'حامد امینی', phone: '+989371234567', createdAt: '1 خرداد 1404' },
    { fullName: 'شهرزاد داودی', phone: '+989381234567', createdAt: '2 خرداد 1404' },
    { fullName: 'میلاد قربانی', phone: '+989391234567', createdAt: '3 خرداد 1404' },
    { fullName: 'لیلا رستمی', phone: '+989401234567', createdAt: '4 خرداد 1404' },
    { fullName: 'مجید توسلی', phone: '+989411234567', createdAt: '5 خرداد 1404' },
    { fullName: 'افسانه رمضانی', phone: '+989421234567', createdAt: '6 خرداد 1404' },
    { fullName: 'صادق کشاورز', phone: '+989431234567', createdAt: '1 خرداد 1404' },
    { fullName: 'مونا اسماعیلی', phone: '+989441234567', createdAt: '3 خرداد 1404' },
    { fullName: 'جواد رسولی', phone: '+989451234567', createdAt: '9 خرداد 1404' },
    { fullName: 'مریم صبوری', phone: '+989461234567', createdAt: '10 خرداد 1404' },
    { fullName: 'نوید جهانی', phone: '+989471234567', createdAt: '11 خرداد 1404' },
    { fullName: 'پرنیا طهماسبی', phone: '+989481234567', createdAt: '12 خرداد 1404' },
    { fullName: 'ندا سلطانی', phone: '+989491234567', createdAt: '13 خرداد 1404' },
]

const months = {
    "فروردین": 1,
    "اردیبهشت": 2,
    "خرداد": 3,
    "تیر": 4,
    "مرداد": 5,
    "شهریور": 6,
    "مهر": 7,
    "آبان": 8,
    "آذر": 9,
    "دی": 10,
    "بهمن": 11,
    "اسفند": 12,
}

function parseJalaliDate(dateStr: string) {
    const parts = dateStr.trim().split(' ')
    if (parts.length !== 3) return 0
    const day = parseInt(parts[0], 10)
    const month = months[parts[1]]
    const year = parseInt(parts[2], 10)
    if (!day || !month || !year) return 0
    return year * 10000 + month * 100 + day
}

const filteredUsers = computed(() => {
    if (!startDate.value && !endDate.value) return users

    const start = startDate.value ? parseJalaliDate(startDate.value) : 0
    const end = endDate.value ? parseJalaliDate(endDate.value) : 99999999

    return users.filter(user => {
        const created = parseJalaliDate(user.createdAt)
        return created >= start && created <= end
    })
})


</script>

<template>
    <div class="bg-[#EAEEF5] min-h-screen flex flex-col justify-start items-center">
        <admin-users-header />
        <BaseContainer>
            <!-- Filter and Export -->
            <div class="w-full mt-4 px-4 lg:px-16 py-6">
                <admin-users-filters @update:startDate="val => startDate = val"
                    @update:endDate="val => endDate = val" />

                <admin-users-Table :users="filteredUsers" :currentPage="currentPage" :itemsPerPage="itemsPerPage"
                    :totalItems="filteredUsers.length" @update:currentPage="val => currentPage = val" />
            </div>
        </BaseContainer>

    </div>
</template>