<script>
// import { ref, computed } from "vue";

// const props = defineProps<Props>()

// const blogUrl = computed(() => import.meta.env.VITE_BLOG_URL)

// const isExcludedRoute = computed(() => {
//   const excludedRoutes = ['/profile/requests/submitRequest']
//   return excludedRoutes.some(route =>
//     window.location.pathname.startsWith(route)
//   )
// })

// const isLoggedIn = computed(() => false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isMobile = computed(() => false)
// const articles = computed(() => [])
// const user = computed(() => null)
// const userIsVerified = computed(() => false)
// const userIsPendingForVerification = computed(() => false)
// const userIsPendingForRegistration = computed(() => false)

// const isBankAccountPage = computed(() => {
//   const bankAccountPages = [
//     'profile-bank-accounts',
//     'profile-bank-accounts-new',
//     'profile-destination-bank-accounts',
//     'profile-destination-currency-accounts'
//   ]
//   return bankAccountPages.includes(window.location.pathname)
// })

// const isDashboardPages = computed(() => {
//   const dashboardPages = ['profile-dashboard', 'profile-dashboard-discounts']
//   return dashboardPages.includes(window.location.pathname)
// })

// const goto = (refName: string) => {
//   isMenuOpen.value = false
//   window.scrollTo(100, refName as any)
//   window.location.href = '/'
// }

// const logout = () => {
//   console.log('Logout')
// }

// const onChildClosed = () => {
//   isMenuOpen.value = false
// }
</script>

<template>
  <div>
    <div class="absolute top-0 z-[99] rtl w-full px-6 lg:px-24 bg-none border-b border-[#9999BF]">
      <BaseContainer>
        <div class="flex justify-between items-center  h-[65px] lg:h-[105px] ">
          <!-- start of header -->
          <div class="flex items-center justify-between">
            <nuxt-link to="/" class="ml-4 hidden lg:block">
              <img src="/home/img/logos/ic-logo-new.svg" >
            </nuxt-link>
            <BaseMobileMenu class="block lg:hidden" />
            <nuxt-link to="/" class="mr-3 block lg:hidden">
              <img src="/home/img/home/logo-mobile.svg" >
            </nuxt-link>
            <nuxt-link :to="{ name: 'index' }" class="hidden lg:block mt-2 pb-1 active-item px-3 text-white">
              خانه
            </nuxt-link>
            <div
              class="relative  group cursor-pointer hidden lg:flex items-center gap-2.5 text-white font-normal text-sm px-3 ms-1">
              <span>پشتیبانی</span>
              <img src="/home/img/home/arrow-square-down.svg" class="group-hover:rotate-180" >
              <div class="absolute top-full pt-2 hidden group-hover:block w-full">
                <div class=" text-[#2626BF]  bg-white rounded-xl shadow-lg px-4 p-3 text-sm  z-50 w-max">
                  <a id="btn-telegram" href="https://t.me/+989101369884" class="flex items-center gap-1 mb-4">
                    <img src="/home/img/telegram-2.svg" alt="telegram-icon" >
                    تلگرام
                  </a>
                  <a id="btn-whatsapp" href="https://wa.me/989101369884" class="flex items-center gap-1">
                    <img src="/home/img/whatsapp2.svg" alt="whatsapp-icon" >
                    واتساپ
                  </a>
                </div>
              </div>

            </div>
          </div>
          <!-- end of header -->
          <div class="flex justify-start items-center gap-6">
            <a href="https://payjib.com/terms" class="hidden lg:block text-white font-normal text-sm">
              قوانین پی‌جیب
            </a>
            <a href="https://payjib.com/blog/" class="hidden lg:block text-white font-normal text-sm">
              وبلاگ
            </a>
            <ul v-if="user" class="user-info pa-0">
              <li class="d-flex text-center align-center">
                <span class="menu-item d-flex text-center align-center">
                  <span class="mobile-direction">
                    <i class="icon icon-arrow-down icon-20" />
                    <span class="username">{{ user.fullName }}</span>
                    <i class="icon icon-smile icon-20 mx-1" />
                  </span>
                  <ul>
                    <li>
                      <nuxt-link :to="{ name: 'profile' }"> پروفایل </nuxt-link>
                    </li>
                    <li>
                      <p class="mb-0" @click="logout">خروج</p>
                    </li>
                  </ul>
                </span>
              </li>
            </ul>

            <a
v-else id="btn-login-or-register" href="https://payjib.com/auth/login" to="/" outlined
              :x-small="isMobile" :small="!isMobile"
              class="login-btn font-normal border-[#EBEDF0] border rounded-[48px] flex items-center justify-center text-sm w-[118px] h-[41px] text-white">
              ورود یا ثبت نام
            </a>
          </div>
        </div>
      </BaseContainer>
    </div>

    <!-- Add the rest of your template here -->
  </div>
</template>

<style>
.active-item {
  border-bottom: 4px solid #ebedf0;
}
</style>
