import Link from 'next/link'

export default function Header(){
  return (
    <header className="w-full py-6 px-6 flex items-center justify-between glass-card">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#5eead4] shadow-lg" />
        <h1 className="text-xl font-bold">NovaWeb</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
