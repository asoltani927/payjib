<template>
  <!-- hero -->
  <div class="bg-[#2626BF]">
    <div
      class="lg:px-[139px] items-center lg:items-start justify-between pb-12 lg:pb-[100px] gap-10 lg:gap-28 w-full h-full bg-[url(/img/home/Hero-Bg-Blue.png)] bg-cover bg-no-repeat pt-[120px] lg:pt-[200px]"
    >
      <BaseContainer>
        <div class="flex flex-col lg:flex-row">
          <div
            class="lg:w-1/2 flex flex-col items-center lg:items-start text-[#E5E5E5]"
          >
            <div
              class="flex flex-col text-white items-center lg:items-start gap-3.5"
            >
              <img
                class="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] mb-1"
                src="/img/home/germany.svg"
              />
              <span class="text-sm lg:text-3xl">انتقال ارز از/به</span>
              <span class="font-bold text-[36px] lg:text-[57px]">آلمان</span>
            </div>

            <p class="hidden text-start leading-8 lg:flex mt-4">
              انتقال ارز بین ایران و آلمان یکی از نیازهای رایج مهاجران،
              دانشجویان، فریلنسرها و خانواده‌هاست. اگر به‌دنبال راهی امن و سریع
              برای ارسال یا دریافت یورو از آلمان هستید، یا می‌خواهید از ایران به
              آلمان پرداخت ارزی مطمئن انجام دهید، پی‌جیب بهترین انتخاب برای
              شماست. سرویس تبادل ارز پی‌جیب این امکان را فراهم می‌کند تا در
              کمترین زمان و با کارمزدی بسیار پایین، انتقال ارز بین‌المللی خود را
              انجام دهید. فقط کافی‌ست با چند کلیک ثبت نام خود را کامل کنید یا در
              صورت نیاز به مشاوره، فرم زیر را پر کنید و مراحل انتقال را با
              راهنمایی ما شروع کنید.
            </p>
            <button
              class="hidden lg:flex items-center justify-center mt-8 rounded-full w-[158px] h-[61px] bg-[#FFBF00] font-bold text-xl text-[#0F1114]"
            >
              شروع ثبت نام
            </button>
          </div>
          <SharedExchangeCalculator />
          <div
            class="px-6 w-full flex lg:hidden flex-col items-center text-[#E5E5E5]"
          >
            <p class="flex text-center leading-8 mt-6 text-[14px]">
              انتقال ارز بین ایران و آلمان یکی از نیازهای رایج مهاجران،
              دانشجویان، فریلنسرها و خانواده‌هاست. اگر به‌دنبال راهی امن و سریع
              برای ارسال یا دریافت یورو از آلمان هستید، یا می‌خواهید از ایران به
              آلمان پرداخت ارزی مطمئن انجام دهید، پی‌جیب بهترین انتخاب برای
              شماست. سرویس تبادل ارز پی‌جیب این امکان را فراهم می‌کند تا در
              کمترین زمان و با کارمزدی بسیار پایین، انتقال ارز بین‌المللی خود را
              انجام دهید. فقط کافی‌ست با چند کلیک ثبت نام خود را کامل کنید یا در
              صورت نیاز به مشاوره، فرم زیر را پر کنید و مراحل انتقال را با
              راهنمایی ما شروع کنید.
            </p>
            <button
              class="flex items-center justify-center mt-4 mb-3 rounded-full w-[152px] h-[41px] bg-[#FFBF00] font-bold text-[#0F1114]"
            >
              شروع ثبت نام
            </button>
          </div>
        </div>
      </BaseContainer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "send",
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>
