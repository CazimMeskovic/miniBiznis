import './globals.css'
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
      {/* Use a column flex layout and min-h-screen so footer stays at the bottom */}
      <body className="min-h-screen flex flex-col">
        <Header />
        {/* main should grow to push footer to the bottom */}
        <main className="p-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
