"use client"

import { motion as _motion } from 'framer-motion'
// framer-motion typings can be strict in some setups; use a runtime-cast here
const motion: any = _motion as any

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
}

const item = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
}

export default function HomePage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8 ">
      {/* <motion.div className="hero-fg p-8 rounded-3xl glass-card max-w-4xl" variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <h1 className="text-5xl font-extrabold">Automehaničarska Radnja "Brzi Servis"</h1>
        </motion.div>

        <motion.div variants={item} className="mt-4">
          <p className="text-lg text-gray-300">Vaš pouzdan partner za sve vrste popravki i održavanja vozila. Kvalitet, brzina i povjerenje na jednom mjestu!</p>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex items-center justify-center space-x-4">
          <a className="btn-accent" href="#usluge">Pogledajte usluge</a>
          <a className="px-6 py-3 rounded-full border border-white/10 text-sm" href="#kontakt">Kontaktirajte nas</a>
        </motion.div> */}
        <motion.div 
  className="
    hero-fg 
    p-6 sm:p-8 md:p-10 
    px-6 sm:px-10 md:px-12 
    rounded-3xl 
    glass-card 
    max-w-4xl 
    mx-auto
  " 
  variants={container} 
  initial="hidden" 
  animate="show"
>

  <motion.div variants={item}>
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
      Automehaničarska Radnja "Brzi Servis"
    </h1>
  </motion.div>

  <motion.div variants={item} className="mt-4">
    <p className="text-base sm:text-lg text-gray-300 text-center">
      Vaš pouzdan partner za sve vrste popravki i održavanja vozila. 
      Kvalitet, brzina i povjerenje na jednom mjestu!
    </p>
  </motion.div>

  <motion.div 
    variants={item} 
    className="mt-6 flex items-center justify-center space-x-3 sm:space-x-4"
  >
    <a className="btn-accent" href="#usluge">Pogledajte usluge</a>

    <a 
      className="px-5 py-3 rounded-full border border-white/10 text-sm" 
      href="#kontakt"
    >
      Kontaktirajte nas
    </a>
  </motion.div>




        <motion.div variants={item} className="mt-8">
          <img
            src="https://mssgracanica.skolatk.edu.ba/cimage/news/image-86.png"
            alt="Automehaničarska radnja"
            className="w-full rounded-2xl object-cover max-h-64"
          />
        </motion.div>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="glass-card p-6 rounded-2xl cursor-pointer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao66XxTk-F_kQFjlooKtwjIlfL8jKQIOYLA&s" alt="Brza dijagnostika" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="font-semibold text-xl">Brza dijagnostika</h3>
          <p className="text-gray-300 mt-2">Savremena oprema za brzo otkrivanje kvarova na vozilu.</p>
        </motion.div>

        <motion.div variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="glass-card p-6 rounded-2xl cursor-pointer">
          <img src="https://www.smsfojnica.com/images/obrazovni-profili/automehanicar.jpg" alt="Iskusni majstori" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="font-semibold text-xl">Iskusni majstori</h3>
          <p className="text-gray-300 mt-2">Naš tim čine certificirani i iskusni automehaničari.</p>
        </motion.div>

        <motion.div variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="glass-card p-6 rounded-2xl cursor-pointer">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=public" alt="Garancija na rad" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="font-semibold text-xl">Garancija na rad</h3>
          <p className="text-gray-300 mt-2">Garantujemo kvalitet i sigurnost za svaki urađeni posao.</p>
        </motion.div>
      </motion.div>

      {/* Nova sekcija: Zašto odabrati nas */}
      <motion.div className="max-w-5xl w-full mt-12" variants={container} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold mb-6">Zašto odabrati nas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHygbmfA0rCAHiLqMtRo28bedmxAE4XcsUeQ&s" alt="Povjerenje" className="w-full h-32 object-cover rounded-md mb-4" />
            <h4 className="font-semibold text-lg">Povjerenje klijenata</h4>
            <p className="text-gray-300 mt-2">Više od 1000 zadovoljnih klijenata širom regije.</p>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PsYrYKmD-B6pOWBP4EksHPXu6y7h6JeV3g&s" alt="Brzina" className="w-full h-32 object-cover rounded-md mb-4" />
            <h4 className="font-semibold text-lg">Brza usluga</h4>
            <p className="text-gray-300 mt-2">Većina servisa završava se isti dan.</p>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <img src="https://d4n0y8dshd77z.cloudfront.net/listings/47510239/lg/WgF2Ase4Y1iMV4Wcr1HV.jpg" alt="Garancija" className="w-full h-32 object-cover rounded-md mb-4" />
            <h4 className="font-semibold text-lg">Garancija</h4>
            <p className="text-gray-300 mt-2">Na sve radove dajemo garanciju i podršku.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Nova sekcija: Naši partneri */}
      <motion.div className="max-w-5xl w-full mt-12" variants={container} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold mb-6">Naši partneri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtCLdCkPir8WRQpEQD25NtH4HAxBUb5dNfg&s" alt="Partner 1" className="w-full h-24 object-cover rounded-md mb-4" />
            <h4 className="font-semibold text-lg">Auto Dijelovi d.o.o.</h4>
            <p className="text-gray-300 mt-2">Pouzdan dobavljač rezervnih dijelova.</p>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDFvgkWuZcuG_0x5czQkgFqJY17pWeMUGfg&s" alt="Partner 2" className="w-full h-24 object-cover rounded-md mb-4" />
            <h4 className="font-semibold text-lg">Bosna Oil</h4>
            <p className="text-gray-300 mt-2">Kvalitetna ulja i maziva za vaše vozilo.</p>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <img src="https://lh6.googleusercontent.com/proxy/65dDq3vRiDthQSy-eGq2yCYpmwIYwzSwYf8WrHFDpKlZu0PoP1haL49eoWnN3kPqVy6WRPkVgqqL3mwOJhTlYPUomKaj-1YzBnRcqEfIuwcvr1bmpXHB-6Ee1Q3u-pAF4Nud3y02maHpQA" alt="Partner 3" className="w-full h-24 object-cover rounded-md mb-4" />
            <h4 className="font-semibold text-lg">Auto Elektrika M.</h4>
            <p className="text-gray-300 mt-2">Stručna električarska podrška i dijagnostika.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Nova sekcija: Recenzije klijenata */}
      <motion.div className="max-w-5xl w-full mt-12 mb-12" variants={container} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold mb-6">Recenzije klijenata</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-lg mb-2">"Brzi Servis je spasio moj auto!"</h4>
            <p className="text-gray-300">Profesionalni, brzi i ljubazni. Preporučujem svima!<br /><span className="text-xs text-gray-400">- Amir, Sarajevo</span></p>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-lg mb-2">"Najbolja usluga u gradu"</h4>
            <p className="text-gray-300">Sve su objasnili i popravili isti dan.<br /><span className="text-xs text-gray-400">- Lejla, Ilidža</span></p>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.05 }} className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold text-lg mb-2">"Vrhunski majstori"</h4>
            <p className="text-gray-300">Svaka čast ekipi, auto radi kao nov!<br /><span className="text-xs text-gray-400">- Marko, Novi Grad</span></p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
