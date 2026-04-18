import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PULQUI | Industria Cultural — Bar & Cervecería Artesanal, Córdoba',
  description:
    'Bar, cervecería artesanal y espacio cultural en Córdoba. Música en vivo, arte, comedia y las mejores cervezas de producción propia.',
  keywords: [
    'cerveza artesanal', 'Córdoba', 'bar', 'industria cultural',
    'música en vivo', 'eventos', 'espacio cultural', 'Nueva Córdoba',
  ],
  authors: [{ name: 'PULQUI Industria Cultural' }],
  openGraph: {
    title: 'PULQUI | Industria Cultural',
    description: 'Bar, cervecería artesanal y espacio cultural en Córdoba.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#060606',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="bg-background">
      <body
        className={`${inter.variable} ${bebas.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <div className="grain-overlay" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
