import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PULQUI | Cerveza Artesanal y Espacio Cultural - Córdoba',
  description: 'Fábrica de cerveza artesanal y espacio cultural en Alberdi, Córdoba. Música en vivo, eventos, talleres y la mejor cerveza artesanal cordobesa.',
  keywords: ['cerveza artesanal', 'Córdoba', 'Alberdi', 'eventos', 'música en vivo', 'bar', 'cervecería'],
  authors: [{ name: 'PULQUI' }],
  openGraph: {
    title: 'PULQUI | Cerveza Artesanal y Espacio Cultural',
    description: 'Un espacio donde despegan las ideas. Cerveza artesanal en el corazón de Alberdi, Córdoba.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased`}>
        <div className="grain-overlay" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
