<template>
    <div class="flex flex-col lg:flex-row items-center gap-6 py-6 px-6 lg:px-[139px] bg-[#2626BF]">
        <img class="hidden lg:block w-full lg:w-[367px] h-[112px]" src="/img/home/oneClick.svg">
        <img class="block lg:hidden  w-full lg:w-[153px] h-[208px]" src="/img/home/oneClickMobile.svg">
        <div class="w-full rounded-xl bg-white flex flex-col p-6 gap-4">
            <span>برای مشاوره رایگان اطلاعات خود را وارد کنید</span>
            <div class="flex flex-col lg:flex-row items-center gap-4">
                <div class="w-full flex flex-col lg:flex-row  flex-grow items-center gap-4">
                    <input
                        class="inputs-style w-full lg:w-1/2 h-[48px] rounded-xl ps-5 placeholder:text-[#33373D] border border-[#D5DDEA] focus:border-[#D5DDEA] appearance-none focus:ring-0 focus:outline-none"
                        type="text" placeholder="نام و نام خانوادگی">
                    <input
                        class="inputs-style w-full lg:w-1/2 h-[48px] rounded-xl ps-5 placeholder:text-[#33373D] border border-[#D5DDEA] rtl focus:border-[#D5DDEA] appearance-none focus:ring-0 focus:outline-none"
                        type="tel" placeholder="شماره تماس یا واتساپ">
                </div>
                <button
                    class="bg-[#FFBF00] text-[#0F1114] w-full lg:w-[151px] h-[48px] font-semibold rounded-full">ارسال</button>
            </div>
        </div>
    </div>
</template>
