/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'zh_CN', 'zh_TW'],
        defaultLocale: 'en-US',
        localeDetection: false,
      },
};
export default nextConfig;
