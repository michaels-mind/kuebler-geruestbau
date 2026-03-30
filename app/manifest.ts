import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kübler Gerüstbau',
    short_name: 'Kübler',
    description: 'Sichere Gerüstlösungen in Nienburg/Weser',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827', // Gray-900 wie dein Design
    theme_color: '#ea580c',      // Orange-600 Firmenfarbe
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}