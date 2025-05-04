<script>
import { ref, computed } from 'vue';

export default {
    name: 'Header',
    props: {
        dashboard: {
            type: Boolean,
            default: false
        },
        landing: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const isMenuOpen = ref(false);

        const blogUrl = computed(() => {
            return import.meta.env.VITE_BLOG_URL; // Replace with your environment variable
        });

        const isExcludedRoute = computed(() => {
            const excludedRoutes = ['/profile/requests/submitRequest'];
            return excludedRoutes.some(route => window.location.pathname.startsWith(route));
        });

        const isLoggedIn = computed(() => {
            // Replace with your Vuex store logic
            return false; // Example value
        });

        const isMobile = computed(() => {
            // Replace with your Vuetify breakpoint logic
            return false; // Example value
        });

        const articles = computed(() => {
            // Replace with your Vuex store logic
            return []; // Example value
        });

        const user = computed(() => {
            // Replace with your Vuex store logic
            return null; // Example value
        });

        const userIsVerified = computed(() => {
            // Replace with your Vuex store logic
            return false; // Example value
        });

        const userIsPendingForVerification = computed(() => {
            // Replace with your Vuex store logic
            return false; // Example value
        });

        const userIsPendingForRegistration = computed(() => {
            // Replace with your Vuex store logic
            return false; // Example value
        });

        const isBankAccountPage = computed(() => {
            const bankAccountPages = [
                'profile-bank-accounts',
                'profile-bank-accounts-new',
                'profile-destination-bank-accounts',
                'profile-destination-currency-accounts'
            ];
            return bankAccountPages.includes(window.location.pathname);
        });

        const isDashboardPages = computed(() => {
            const dashboardPages = ['profile-dashboard', 'profile-dashboard-discounts'];
            return dashboardPages.includes(window.location.pathname);
        });

        const openModal = () => {
            isMenuOpen.value = true;
        };

        const goto = (refName) => {
            isMenuOpen.value = false;
            window.scrollTo(100, refName);
            window.location.href = '/';
        };

        const logout = () => {
            // Replace with your Vuex store dispatch logic
            console.log('Logout');
        };

        const onChildClosed = () => {
            isMenuOpen.value = false;
        };

        return {
            isMenuOpen,
            blogUrl,
            isExcludedRoute,
            isLoggedIn,
            isMobile,
            articles,
            user,
            userIsVerified,
            userIsPendingForVerification,
            userIsPendingForRegistration,
            isBankAccountPage,
            isDashboardPages,
            openModal,
            goto,
            logout,
            onChildClosed
        };
    }
};
</script>

<template>
    <div>
        <div class="tw-absolute tw-top-0 tw-z-[99] rtl tw-w-full tw-h-[65px] lg:tw-h-[105px] tw-flex tw-justify-between tw-px-6 lg:tw-px-[139px] tw-items-center tw-bg-none tw-border-b tw-border-[#9999BF]">
            <!-- start of header -->
            <div class="tw-flex tw-items-center tw-justify-between">
                <img src="/img/logos/ic-logo-new.svg" class="tw-ml-4 tw-hidden lg:tw-block" />
                <img @click="openModal" src="/img/home/mobile-menu.svg" class="tw-block lg:tw-hidden" />
                <img src="/img/home/logo-mobile.svg" class="tw-mr-2 tw-block lg:tw-hidden" />
                <router-link :to="{ name: 'index' }" class="tw-hidden lg:tw-block active-item tw-px-3 tw-py-2">
                    {{ $t('header.home') }}
                </router-link>
                <router-link to="/#services" class="tw-hidden lg:tw-block tw-px-3 tw-py-2">
                    خدمات
                </router-link>
                <router-link to="/#support" class="tw-hidden lg:tw-flex tw-px-3 tw-py-2 tw-items-center tw-gap-2.5">
                    پشتیبانی
                    <img src="/img/home/arrow-square-down.svg" />
                </router-link>
            </div>
            <!-- end of header -->
            <div class="tw-flex tw-justify-start tw-items-center tw-gap-6">
                <router-link to="/#aboutUs" class="tw-hidden lg:tw-block">
                    درباره پی جیب
                </router-link>
                <a href="https://payjib.com/blog/" target="_blank" class="tw-hidden lg:tw-block">
                    {{ $t('header.blog') }}
                </a>
                <ul v-if="user" class="user-info pa-0">
                    <li class="d-flex text-center align-center">
                        <div class="menu-item d-flex text-center align-center">
                            <div class="mobile-direction">
                                <i class="icon icon-arrow-down icon-20" />
                                <div class="username">{{ user.fullName }}</div>
                                <i class="icon icon-smile icon-20 mx-1" />
                            </div>
                            <ul>
                                <li>
                                    <router-link :to="{ name: 'profile' }">
                                        {{ $t('header.profile') }}
                                    </router-link>
                                </li>
                                <li>
                                    <p @click="logout" class="mb-0">
                                        {{ $t('header.exit') }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <UiButton
                    v-else
                    id="btn-login-or-register"
                    to="/auth/login"
                    outlined
                    :x-small="isMobile"
                    :small="!isMobile"
                    class="login-btn"
                    width="118px"
                    height="41px"
                    style="color: red !important; border-color: #EBEDF0 !important; border-radius: 48px !important;"
                >
                    <span>
                        {{ $t('header.login') }}
                    </span>
                </UiButton>
            </div>
        </div>

        <!-- Add the rest of your template here -->
    </div>
</template>

<style>
.active-item {
    border-bottom: 4px solid #EBEDF0;
}
</style>
