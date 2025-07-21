import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import axios from 'axios';

// ✅ لیست صفحات خدمات برای کشورهای مختلف
const countryPages = [
    'transfer-money-germany',
    'transfer-money-italy',
    'transfer-money-france',
    'transfer-money-spain',
    'transfer-money-turkey',
    'transfer-money-canada',
    // هر کشور جدید رو همین‌جا اضافه کن
];

const sitemap = new SitemapStream({ hostname: 'https://payjib.com' });
const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.6 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/', changefreq: 'weekly', priority: 0.8 },
];

staticPages.forEach(page => sitemap.write(page));

countryPages.forEach(slug => {
    sitemap.write({
        url: `/${slug}`,
        changefreq: 'monthly',
        priority: 0.8
    });
});

try {
    const res = await axios.get('https://payjib.com/blog/wp-json/wp/v2/posts?per_page=100');
    res.data.forEach(post => {
        sitemap.write({
            url: `/blog/${post.slug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: post.modified
        });
    });
} catch (error) {
    console.error('❌ خطا در گرفتن پست‌های بلاگ:', error.message);
}

sitemap.end();
await streamToPromise(sitemap);
console.log('✅ sitemap.xml ساخته شد.');
