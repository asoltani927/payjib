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
// const isMobile = computed(() => false)
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
    <div class="absolute top-0 z-[99] rtl w-full px-6 lg:px-16 bg-none border-b border-[#9999BF]">
      <BaseContainer>
        <div class="flex justify-between items-center  h-[65px] lg:h-[105px] ">
          <!-- start of header -->
          <div class="flex items-center justify-between">
            <img src="/img/logos/ic-logo-new.svg" class="ml-4 hidden lg:block" >

            <BaseMobileMenu class="block lg:hidden" />
            <img src="/img/home/logo-mobile.svg" class="mr-2 block lg:hidden" >
            <nuxt-link :to="{ name: 'index' }" class="hidden lg:block active-item px-3 py-2 text-white">
              خانه
            </nuxt-link>
            <nuxt-link to="/#services" class="hidden lg:block px-3 py-2 text-white font-normal text-sm">
              خدمات
            </nuxt-link>
            <nuxt-link
to="/#support"
              class="hidden lg:flex px-3 py-2 items-center gap-2.5 text-white font-normal text-sm">
              پشتیبانی
              <img src="/img/home/arrow-square-down.svg" >
            </nuxt-link>
          </div>
          <!-- end of header -->
          <div class="flex justify-start items-center gap-6">
            <nuxt-link to="/#aboutUs" class="hidden lg:block text-white font-normal text-sm">
              درباره پی جیب
            </nuxt-link>
            <a href="https://payjib.com/blog/" target="_blank" class="hidden lg:block text-white font-normal text-sm">
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

            <nuxt-link
v-else id="btn-login-or-register" to="/" outlined :x-small="isMobile" :small="!isMobile"
              class="login-btn font-normal border-[#EBEDF0] border rounded-[48px] flex items-center justify-center text-sm w-[118px] h-[41px] text-white">
              ورود یا ثبت نام
            </nuxt-link>
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
