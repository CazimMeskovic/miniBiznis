import './globals.css'
import Link from 'next/link'
import Footer from '../components/Footer'

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
        <header className="w-full py-6 px-6 flex items-center justify-between glass-card">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#5eead4] shadow-lg" />
            <h1 className="text-xl font-bold">NovaWeb</h1>
          </div>
          <nav className="space-x-4">
            <Link href="/" className="text-sm hover:underline">Home</Link>
            <Link href="/about" className="text-sm hover:underline">About</Link>
            <Link href="/services" className="text-sm hover:underline">Services</Link>
            <Link href="/portfolio" className="text-sm hover:underline">Portfolio</Link>
            <Link href="/blog" className="text-sm hover:underline">Blog</Link>
            <Link href="/contact" className="text-sm hover:underline">Contact</Link>
          </nav>
        </header>
        {/* main should grow to push footer to the bottom */}
        <main className="p-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
