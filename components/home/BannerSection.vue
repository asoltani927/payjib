<script>
import { ref } from 'vue'

const isShowVideo = ref(false)
export default {
  props: {
    title: {
      type: String,
      default: 'مشتریان عزیز'
    },
    message: {
      type: String,
      default: 'پی‌جیب فعال است و ما پای کار هستیم.'
    },
    message2: {
      type: String,
      default: 'فقط به عنوان اختلالات بانکی و اینترنتی تراکنش ها کندتر انجام می‌شود.'
    },
    subMessage: {
      type: String,
      default: 'ممنون از اعتماد همیشگی شما.'
    },
    buttonText: {
      type: String,
      default: 'مشاهده اطلاعیه'
    }
  },
  data() {
    return {
      isMobile: false,
      showModal: true
    }
  },
  computed: {
    bannerImage() {
      return this.isMobile
          ? require('@/assets/img/banner2-mobile.png')
          : require('@/assets/img/banner2.png')
    }
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  }
};
</script>

<template>
  <!-- steps -->
  <div class="custom-banner" style="background: #FFBF00 !important">
    <div class="content">
      <div class="text-container">
        <div class="font-weight-regular">{{ title }}</div>
        <span class="i-b ml-2 font-weight-bold">{{ message }}</span>
        <span class="i-b ml-2 font-weight-bold">{{ message2 }}</span>
        <br>
        <span class="i-b ml-2 font-weight-bold">{{ subMessage }} 🌺</span>
      </div>
      <button @click.stop="showModal = true" text class="btn2">
        {{ buttonText }}
<!--        <v-icon class="arrow-icon">mdi-arrow-left</v-icon>-->
        <i class="icon icon-smile icon-20 mx-1" />
      </button>
    </div>
    <Dialog
        v-model:visible="showModal"
        class="!bg-[#fff] consultation-dialog pt-4 pb-2 px-2 rounded-none lg:rounded-2xl content-right vv-modal"
        modal
        :closable="false"
        dir="rtl"
        style="max-width: 536px; padding: 0"
        :dismissable-mask="true"
        :close-on-escape="true"
    >
      <div
          class="w-full rounded-xl bg-white flex flex-col p-6 gap-4 mt-10 lg:mt-6 modal-card"
          style="padding-top: 0; padding-bottom: 7px"
      >
        <div style="text-align: right">
          <p style="color: rgba(0, 0, 0, 0.6); font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;">مشتریان عزیز، لطفاً موارد زیر را حتما مورد توجه قرار دهید </p>
        </div>
        <ul class="ul-li">
          <li>
            <p>
              1) برای تسریع سرویس در این شرایط، خریداران عزیز در سریعترین زمان، « تایید پرداخت فروشنده » ثبت کنند.
            </p>
          </li>
          <li>
            <p>
              2) به علت وضعیت اینترنت، لطفاً مراحل تراکنش رابدون نیاز به پشتیبانی از طریق پنل کاربری خود انجام دهید.
            </p>
          </li>
          <li>
            <p>
              3) شماره پشتیبانی برای تماس و پیامک
            </p>
            <div style="text-align: end">
              <a id="btn-tel" href="tel:09101369884" class="rtl">09101369884</a>
            </div>
            <div style="text-align: end">
              <a id="btn-tel" href="tel:09356049661" class="rtl">09356049661</a>
            </div>
            <div style="text-align: end">
              <a id="btn-tel" href="tel:09360950650" class="rtl">09360950650</a>
            </div>
          </li>
          <li>
            <p>
              4) ارتباط از طریق واتساپ
            </p>
            <div style="text-align: end">
              <a id="btn-whatsapp" href="https://wa.me/989197498875" class="rtl">989197498875+</a>
            </div>
          </li>
          <li>
            <p>
              5) ارتباط با شماره واتساپ خارج از کشور
            </p>
            <div style="text-align: end">
              <a id="btn-whatsapp" href="https://wa.me/393296784614" class="rtl">393296784614+</a>
            </div>
          </li>
        </ul>
        <div class="btn3-p">
          <button
              @click="showModal = false"
              color="primary"
              class="bg-[#fff] border text-[#0F1114] w-full lg:w-[151px] h-[48px] font-semibold rounded-full btn3"
              small
              outlined
          >
            <span>متوجه شدم</span>
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>


<style scoped>

.ul-li > li{
  list-style: none;
}
.modal-card {
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: revert;
  text-align: right;
  padding: 0 20px 20px 20px;
  border-radius: 10px;
}
.v-dialog > .v-card > .v-card__text {
  padding: 28px 19px 4px;
}
.custom-banner {
  position: relative;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 143px;
  margin-top: 19px;
  overflow: hidden;
  z-index: 95;
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 96;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  z-index: 97;
}

.text-container {
  color: #333;
  font-size: 17px;
}

.btn2 {
  font-size: 16px;
  color: #333;
  font-family: "IRANSans", sans-serif !important;
  display: flex;
  align-items: center;
  left: -5%;
  top: 18px;
}
a{
  color: #1b325a !important;
}
.font-weight-bold {
  font-size: 21px;
  font-weight: 500 !important;
}
.font-weight-regular {
  font-size: 20px;
  font-weight: 400 !important;
}
.arrow-icon {
  margin-right: 5px;
}
.modal-card {
  text-align: right;
}

ul {
  padding: 0;
  list-style-type: disc;
}

li {
  margin-bottom: 10px;
  font-size: 17px;
  color: #000;
  font-weight: 400;
}
li > p {
  letter-spacing: 0.01em;
}
li strong {
  font-weight: 800;
}
li {
  line-height: 2 !important;
}
.p-dialog.vv-modal{
  width: 740px;
  background-color: red;
}
.btn3-p {
  text-align: center;
}
.btn3-p span {
  font-size: 13px;
  color: #1b325a !important;
  font-weight: 100;
}
.btn3 {
  border: 2px solid #2D5396 !important;
  transition: background 0.3s;
  width: 256px;
  border-radius: 10px !important;
  min-height: 40px !important;
  height: 40px !important;
}
.btn3:hover {
  border-color: #1b325a !important;
  background-color: #d0e3f5;
}

@media (max-width: 768px) {
  .p-dialog.vv-modal{
    width: 273px !important;
    border-radius: 14px;
  }
  .\!bg-\[\#fff\]{
    width: 273px !important;
    border-radius: 14px;
  }
  .i-b{
    display: block;
  }
  .custom-banner {
    padding: 10px;
    margin-top: 80px;
    height: 202px;
    align-items: normal;
    justify-content: right;
  }

  .content {
    flex-direction: column;
    text-align: right;
    align-items: start;
  }

  .text-container {
    text-align: right;
    font-size: 16px;
    margin-bottom: -38px;
    line-height: 26px;
    padding: 5px 19px 0 0;
    padding-bottom: 33px;
  }
  .font-weight-regular {
    font-size: 13px;
    font-weight: 800 !important;
  }
  .font-weight-bold{
    font-size: 17px;
    font-weight: 500 !important;
  }

  .btn2 {
    font-size: 15px;
    margin-left: 0;
    justify-content: center;
    left: 0;
    top: 0;
    font-weight: 500;
  }
  .btn3 {
    width: 220px;
  }
  .arrow-icon {
    margin-right: 3px;
  }
}
</style>
