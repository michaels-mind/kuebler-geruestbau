import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Schützt deine Kontaktformular-Logik vor Crawlern
    },
    sitemap: 'https://www.kuebler-geruestbau.de/sitemap.xml',
  }
}