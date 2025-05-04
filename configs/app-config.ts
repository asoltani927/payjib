export const appConfig = {
    head: {
        titleTemplate: '',
        title: 'پی جیب',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-32x32.png' },
            { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
            { rel: 'shortcut icon', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'shortcut icon', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'shortcut icon', sizes: '192x192', href: '/android-chrome-192x192.png' },
            { rel: 'shortcut icon', sizes: '512x512', href: '/android-chrome-512x512.png' }
        ],
        // TODO: Add Google Tag Manager
        // script: [
        //     {
        //         hid: 'crisp',
        //         src: '/js/crisp.js',
        //         async: true,
        //         defer: true
        //     }
        // ]
    },
}