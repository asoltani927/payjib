const baseConfig = {
    appName: process.env.APP_NAME || 'PayJib',
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
    developerQuery: process.env.DEVELOPER_QUERY || null,
    debugMode: process.env.DEBUG_MODE || false,
    serverURL: process.env.SRVER_URL,
    websocketEncrypted: process.env.NUXT_WEBSOCKET_ENCRYPT,
    blogUrl: process.env.BLOG_URL || 'https://payjib.com/blog/',
    GOOGLE_RECAPTCHA_KEY: process.env.GOOGLE_RECAPTCHA_KEY,
};

const environmentConfigs = {
    development: {
        environment: 'development',
        apiURL: process.env.API_URL,
        baseURL: process.env.BASE_URL,
        websocketHost: process.env.NUXT_WEBSOCKET_HOST,
        websocketPort: process.env.NUXT_WEBSOCKET_PORT,
        websocketSSL: process.env.NUXT_WEBSOCKET_SSL,
    },
    production: {
        environment: 'production',
        apiURL: process.env.API_URL,
        baseURL: process.env.BASE_URL,
        websocketHost: process.env.NUXT_WEBSOCKET_HOST,
        websocketPort: process.env.NUXT_WEBSOCKET_PORT,
        websocketSSL: process.env.NUXT_WEBSOCKET_SSL,
    },
    test: {
        environment: 'test',
        apiURL: process.env.API_URL,
        baseURL: process.env.BASE_URL,
        websocketHost: process.env.NUXT_WEBSOCKET_HOST,
        websocketPort: process.env.NUXT_WEBSOCKET_PORT,
        websocketSSL: process.env.NUXT_WEBSOCKET_SSL,
    },
};

const currentEnv = (process.env.NODE_ENV || 'development') as keyof typeof environmentConfigs;
const env = { ...baseConfig, ...environmentConfigs[currentEnv] };

export const appEnv = env;