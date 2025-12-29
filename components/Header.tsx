'use client'
import Link from 'next/link'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Portal target
  const portalTarget = typeof window !== 'undefined' ? document.body : null;

  return (
    <>
      <header className="w-full py-6 px-6 flex items-center justify-between glass-card relative">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#5eead4] shadow-lg" />
          <div>
            <h1 className="text-xl font-bold">Auto Servis MEDO</h1>
            <div className="text-xs text-gray-400 leading-tight">
              Ulica Servisna 10, 71000 Sarajevo<br />
              Tel: <a href="tel:+38761123456" className="underline hover:text-[#7c5cff]">+387 61 123 456</a>
            </div>
          </div>
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
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none z-50"
          aria-label="Otvori meni"
          onClick={() => setOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-300"></span>
        </button>
      </header>
      {/* Overlay izvan headera, preko portala */}
      {open && portalTarget && createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex flex-col pt-16 px-8 space-y-6 animate-fadein transition-all duration-300">
          {/* X dugme */}
          <button
            className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
            onClick={() => setOpen(false)}
            aria-label="Zatvori meni"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-6 text-white">Meni</h2>

          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-lg text-white hover:text-[#5eead4] transition" onClick={() => setOpen(false)}>Početna</Link>
            <Link href="/about" className="text-lg text-white hover:text-[#5eead4] transition" onClick={() => setOpen(false)}>O nama</Link>
            <Link href="/services" className="text-lg text-white hover:text-[#5eead4] transition" onClick={() => setOpen(false)}>Usluge</Link>
            <Link href="/portfolio" className="text-lg text-white hover:text-[#5eead4] transition" onClick={() => setOpen(false)}>Radovi</Link>
            <Link href="/contact" className="text-lg text-white hover:text-[#5eead4] transition" onClick={() => setOpen(false)}>Kontakt</Link>
          </nav>
        </div>,
        portalTarget
      )}
      {/* Animacija fade-in */}
      <style jsx>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein {
          animation: fadein 0.3s;
        }
      `}</style>
    </>
  )
}
