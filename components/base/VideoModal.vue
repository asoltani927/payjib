    <script setup lang="ts">

    </script>

    <template>
        <Dialog 
        class="!bg-white consultation-dialog pt-6 rounded-none lg:rounded-3xl" modal :closable="false"
            dir="rtl" :dismissable-mask="true" :close-on-escape="true" :style="{ width: '740px' }">
            <video controls autoplay class="w-full rounded-xl  h-[500px]">
                <source src="/video/video_2025-05-21_22-34-11.mp4" type="video/mp4"/>
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
        </Dialog>
    </template>
    <style>
    .consultation-dialog .p-dialog-header {
        padding: 0 !important;
    }
    </style>