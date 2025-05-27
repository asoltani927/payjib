<script setup>
import { useCurrencies } from "~/composables/useCurrencies";

const isSelectOpen = ref(false);
const currencies = await useCurrencies();

const toEnglishDigits = (str) => {
  if (!str) return "";
  return str.replace(/[۰-۹]/g, (w) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(w)));
};


const currenciesOptions = computed(() => {
  return (
    currencies.value?.map((c) => {
      return {
        name: c.titleFa,
        value: c.id,
      };
    }) ?? []
  );
});

const selectedOption = ref("receive");

const onSelectOptionClick = (option) => {
  calculateExchangeRate();
  selectedOption.value = option;
};

const selectedCurrency = ref();
const transactionVolume = ref("");
const exchangeRate = ref("");

const loading = ref(false);
// const invoiceComissionRate = ref("");
const invoiceComissionRate = ref(0);

// const invoiceAmount = ref("0 تومان");
const invoiceAmount = ref(0);


const calculateExchangeRate = () => {
  // loading.value = true;
  if (!selectedCurrency.value) return;

  const currency = currencies.value.find(
    (c) => c.id === selectedCurrency.value
  );

  const volume = parseFloat(transactionVolume.value);

  if (!currency || !volume) {
    invoiceComissionRate.value = 0;
    invoiceAmount.value = 0;
    return;
  }

  if (currency) {
    const commission = currency.commissionRates.find((c) => {
      if (
        volume >= c.from &&
        volume <= c.till
      ) {
        return c;
      }
    });

    if (commission) {
      if (commission.type === "PERCENTAGE") {
        const percentage = parseFloat(commission.amount) / 100;
        invoiceComissionRate.value = volume * percentage;
      } else {
        invoiceComissionRate.value = parseFloat(commission.amount);
      }
    } else {
      invoiceComissionRate.value = parseFloat(currency.maxCommissionAmount || '0');
    }

    if (exchangeRate.value) {
      const exchangeRateValue = parseFloat(exchangeRate.value);
      const totalAmount = volume + invoiceComissionRate.value;
      const finalAmount = totalAmount * exchangeRateValue;
      invoiceAmount.value = finalAmount;
      // invoiceAmount.value = new Intl.NumberFormat("fa-IR", {
      //   style: "currency",
      //   currency: "IRR", // IRR is the currency code for Iranian Rial
      //   minimumFractionDigits: 0, // Optional: Display no decimal places if you don't want them
      //   maximumFractionDigits: 0, // Optional: Limit the number of decimal places
      // }).format(finalAmount);
      loading.value = false;
    }
  }
};



const validPercentage = computed(() => {
  const volume = parseFloat(transactionVolume.value);
  if (!volume || volume === 0) return '0';
  const percent = (invoiceComissionRate.value / volume) * 100;
  return percent.toFixed(1);
});

const formattedCommission = computed(() => {
  return new Intl.NumberFormat('fa-IR', {
    maximumFractionDigits: 0,
  }).format(invoiceComissionRate.value || 0);
});


watch(transactionVolume, () => {
  if (transactionVolume.value) {
    loading.value = true;
  }
});

watchEffect(() => {
  if (!selectedCurrency.value && currencies.value?.length) {
    const euroCurrency = currencies.value.find((c) => c.titleFa === 'یورو');
    if (euroCurrency) {
      selectedCurrency.value = euroCurrency.id;
    }
  }
});

watch(
  [selectedCurrency, transactionVolume, exchangeRate],
  () => {
    calculateExchangeRate();
  },
  { immediate: true }
);

watch(transactionVolume, (val) => {
  transactionVolume.value = toEnglishDigits(val);
});

watch(exchangeRate, (val) => {
  exchangeRate.value = toEnglishDigits(val);
});

</script>

<template>
  <div
    class="bg-white h-fit w-full lg:w-[55%] lg:rounded-3xl shadow-lg lg:border-2 border-[#D5DDEA] p-8 pb-8 flex flex-col">
    <span class="text-[14px] lg:text-[22px]">می‌خواهم پولم را</span>
    <div class="w-full flex items-center gap-6 mb-4 mt-5">
      <div 
      class="cursor-pointer flex items-center gap-2 transition-all duration-1000"
        @click="onSelectOptionClick('receive')">
        <div
         :class="{
          'bg-[#A5ABB2]': selectedOption !== 'receive',
          'bg-[#F0F2F5]': selectedOption === 'receive',
        }"
         class="transition-all duration-1000 w-4 h-4 rounded-full flex items-center justify-center">
          <div
           :class="{
            'bg-white w-2 h-2': selectedOption !== 'receive',
            'bg-[#2626BF] w-3 h-3': selectedOption === 'receive',
          }" class="transition-all duration-1000 rounded-full">
            <!-- circle -->
          </div>
        </div>
        <span
         :class="{
          'text-[14px] lg:text-[18px] font-medium text-[#A5ABB2]':
            selectedOption !== 'receive',
          'text-[14px] lg:text-[18px] text-[#2626BF] font-bold':
            selectedOption === 'receive',
        }" class="transition-all duration-1000">
          به ایران بفرستم
        </span>
      </div>
      <div class="cursor-pointer flex items-center gap-2 transition-all duration-1000"
        @click="onSelectOptionClick('send')">
        <div 
        :class="{
          'bg-[#A5ABB2]': selectedOption !== 'send',
          'bg-[#F0F2F5]': selectedOption === 'send',
        }" class="transition-all duration-1000 w-4 h-4 rounded-full flex items-center justify-center">
          <div 
          :class="{
            'bg-white w-2 h-2': selectedOption !== 'send',
            'bg-[#2626BF] w-3 h-3': selectedOption === 'send',
          }" class="transition-all duration-1000 rounded-full">
            <!-- circle  -->
          </div>
        </div>
        <span
         :class="{
          'text-[14px] lg:text-[18px] font-medium text-[#A5ABB2]':
            selectedOption !== 'send',
          'text-[14px] lg:text-[18px] text-[#2626BF] font-bold':
            selectedOption === 'send',
        }" class="transition-all duration-1000">
          به خارج از ایران بفرستم
        </span>
      </div>
    </div>

    <div class="mb-8 p-2 text-[10px] lg:text-[12px] bg-[#F0F2F5] text-[#2626BF] rounded-full w-full flex items-center">
      <transition name="fade" mode="out-in">
        <div :key="selectedOption" class="w-full flex items-center gap-2">
          <img src="/home/img/home/blue-info.svg">
          <span>
            {{
              selectedOption !== 'send'
                ? 'معادل ریالی ارزی که انتخاب کردید، در ایران دریافت خواهد شد.'
                : 'مقدار ارزی که انتخاب کردید، در خارج از ایران دریافت خواهد شد.'
            }}
          </span>
        </div>
      </transition>
    </div>


    <!-- form -->
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full lg:mt-2">
      <!-- select  -->
      <div class="relative flex flex-col w-full lg:w-[30%]">
        <label for="currency"
          class="absolute z-10 right-[17px] top-[-10px] flex items-center justify-center bg-white w-[36px] h-[21px] text-[#71757A] text-[10px] font-medium mb-2">نوع
          ارز</label>
        <div @click="isSelectOpen = !isSelectOpen" class="relative">
          <select @change="calculateExchangeRate" @blur="isSelectOpen = false" id="currency" v-model="selectedCurrency"
            name="currency"
            class="inputs-style block w-full border font-medium px-6 pr-10 cursor-pointer border-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] text-[13px] placeholder:text-[#33373D] text-[#33373D] placeholder:font-medium focus:border-gray-500 appearance-none focus:ring-0 focus:outline-none">
            <option v-for="option in currenciesOptions" :key="option.value" :value="option.value"
              @click="isSelectOpen = false">
              {{ option.name }}
            </option>
          </select>
          <img class="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none transition-transform duration-300"
            :class="{ 'rotate-180': isSelectOpen }" src="/home/img/home/Vector.svg" />
        </div>
      </div>
      <!-- inputs  -->
      <div class="flex flex-col w-full lg:w-[35%]">
        <!-- <label for="transaction-volume" class="text-[#2626BF] text-base mb-2">حجم تراکنش</label> -->
        <!-- inputs-style w-full h-[48px] rounded-xl ps-5 placeholder:text-[#33373D] text-[#33373D] border border-[#D5DDEA] focus:border-[#D5DDEA] appearance-none focus:ring-0 focus:outline-none -->
        <input id="transaction-volume" v-model="transactionVolume" name="transaction-volume" type="text"
          placeholder="حجم تراکنش"
          class="inputs-style borderborder-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] placeholder:text-[#33373D] placeholder:font-medium  focus:border-gray-500 appearance-none focus:ring-0 focus:outline-none">
        <div class="flex items-center gap-1 text-[#71757A] text-[10px] mt-0.5 font-medium">
          <img src="/home/img/home/gray-info.svg">
          مثلا ۱۰۰۰ تا
        </div>
      </div>

      <div class="flex flex-col w-full lg:w-[35%]">
        <!-- <label for="exchange-rate" class="text-[#2626BF] text-base mb-2">نرخ تبدیل پیشنهادی</label> -->
        <input id="exchange-rate" v-model="exchangeRate" name="exchange-rate" type="text"
          placeholder="نرخ تبدیل پیشنهادی"
          class="inputs-style borderborder-[#D5DDEA] rounded-xl bg-white h-[48px] ps-5 placeholder:text-[13px] placeholder:text-[#33373D] placeholder:font-medium  focus:border-gray-500 appearance-none focus:ring-0 focus:outline-none">
        <div class="flex items-center gap-1 text-[#71757A] text-[10px] mt-0.5 font-medium">
          <img src="/home/img/home/gray-info.svg">
          مثلا ۹۵.۰۰۰ تومان
        </div>
      </div>
    </div>
    <div class="mt-8 p-3 lg:p-2 text-xs bg-[#F0F2F5] text-[#2626BF] rounded-xl w-full flex items-center gap-3">
      <img class="hidden lg:block" src="/home/img/home/credit-card-2icon.svg">
      <div class="w-[45%] lg:w-[30%] gap-1 lg:gap-0 flex flex-col justify-between">
        <span v-if="!loading" class="text-[14px] lg:text-lg font-bold">
          <BaseAnimatedRialCounter v-if="!loading" :to="invoiceAmount" />
          <!-- {{
            invoiceAmount
          }} -->
        </span>
        <UiLoaderSpinner v-if="loading" />
        <transition name="fade" mode="out-in">
          <span :key="selectedOption" class=" text-[10px] lg:text-[12px]">
            {{ selectedOption !== 'send' ? 'به حساب ایران شما واریز خواهد شد.' : 'به حساب پی‌جیب واریز می‌کنید.' }}
          </span>
        </transition>

      </div>
      <div class="gap-1 lg:gap-0 flex flex-col justify-between">
        <span v-if="!loading" class="text-[14px] lg:text-lg font-bold">
          {{ validPercentage }}٪ کارمزد ({{ formattedCommission }} تومان)
        </span>

        <!-- <span pan v-if="!loading" class="text-[14px] lg:text-lg font-bold">
        {{ invoiceComissionRate.value }}
        </span> -->
        <UiLoaderSpinner v-if="loading" />
        <span class="text-[10px] lg:text-[12px]">
          سهم پی‌جیب از این مبلغ تراکنش است.
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
