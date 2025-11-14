import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Saanayo Electricals - Electrical Safety Solutions',
    short_name: 'Saanayo Electricals',
    description: 'Premium earthing electrodes, copper bonded rods, and electrical safety equipment manufacturer in Faridabad, India',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}