/* import './globals.css'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const metadata = {
  title: 'NovaWeb — Futuristic Small Business Template',
  description: 'Modern, futuristic template for small businesses — built with Next.js, Tailwind and Framer Motion.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
   
      <body className="min-h-screen flex flex-col">
        <Header />
       
        <main className="p-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
 */

import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Autoservis Medo | Auto mehanika, dijagnostika i servis',
  description:
    'Autoservis Medo – profesionalni auto servis. Auto mehanika, dijagnostika, mali i veliki servisi. Pouzdano, brzo i kvalitetno.',

  openGraph: {
    title: 'Autoservis Medo',
    description:
      'Profesionalni autoservis – dijagnostika, mehanika i kompletan servis vozila.',
    url: 'https://autoservis-medo.ba', // promijeni ako je druga domena
    siteName: 'Autoservis Medo',
    images: [
      {
        url: '/m1.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoservis Medo – profesionalni auto servis',
      },
    ],
    locale: 'bs_BA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Autoservis Medo',
    description:
      'Auto servis, dijagnostika i mehanika – brzo i pouzdano.',
    images: ['/m1.jpg'],
  },

  metadataBase: new URL('https://autoservis-medo.ba'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bs">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
