import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const domain = process.env.DOMAIN
    return [
        {
            url: `${domain}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ]
}