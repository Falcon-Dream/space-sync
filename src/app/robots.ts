import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const domain = process.env.DOMAIN
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${domain}/sitemap.xml`,
    }
}