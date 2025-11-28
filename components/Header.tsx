'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-6 px-6 flex items-center justify-between glass-card relative">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#5eead4] shadow-lg" />
        <h1 className="text-xl font-bold">Automehaničarska Radnja "Brzi Servis"</h1>
      </div>

      {/* Desktop meni */}
      <nav className="space-x-4 hidden md:flex">
        <Link href="/">Početna</Link>
        <Link href="/about">O nama</Link>
        <Link href="/services">Usluge</Link>
        <Link href="/portfolio">Radovi</Link>
        <Link href="/contact">Kontakt</Link>
      </nav>

      {/* Hamburger dugme */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none z-[999]"
        aria-label="Otvori meni"
        onClick={() => setOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-300"></span>
      </button>

      {/* FULLSCREEN CRNI MENI */}
      {open && (
        <div className="fixed inset-0 bg-black z-[999] flex flex-col pt-16 px-8 space-y-6" style={{ backgroundColor: '#000', opacity: 1 }}>

          {/* X dugme */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Zatvori meni"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-6  text-white">Meni</h2>

          <Link href="/" className="text-lg  text-white" onClick={() => setOpen(false)}>Početna</Link>
          <Link href="/about" className="text-lg text-white" onClick={() => setOpen(false)}>O nama</Link>
          <Link href="/services" className="text-lg text-white" onClick={() => setOpen(false)}>Usluge</Link>
          <Link href="/portfolio" className="text-lg text-white" onClick={() => setOpen(false)}>Radovi</Link>
          <Link href="/contact" className="text-lg text-white" onClick={() => setOpen(false)}>Kontakt</Link>

        </div>
      )}
    </header>
  )
}
