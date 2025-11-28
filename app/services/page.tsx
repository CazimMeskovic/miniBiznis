export default function ServicesPage() {
  const services = [
    { title: 'Dijagnostika vozila', desc: 'Brza i precizna dijagnostika svih tipova vozila.' },
    { title: 'Servis motora', desc: 'Popravka i održavanje benzinskih i dizel motora.' },
    { title: 'Zamjena ulja i filtera', desc: 'Redovan servis ulja, filtera i tečnosti.' },
    { title: 'Servis kočnica', desc: 'Popravka i zamjena diskova, pločica i kočionih sistema.' },
    { title: 'Elektrika vozila', desc: 'Rješavanje problema sa električnim instalacijama i akumulatorima.' },
    { title: 'Priprema za tehnički pregled', desc: 'Kompletna priprema vozila za tehnički pregled.' }
  ]

  const images = [
    "https://www.legalitas.com/sites/default/files/images/reclamaciones%20taller%20coche.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NC6Vl5jyC_DcLAF3tI59cxk5Qvu5PATDlQ&s"
  ];
  return (
    <section className="max-w-5xl mx-auto space-y-6" id="usluge">
      <h2 className="text-4xl font-bold">Usluge</h2>
      <div className="flex gap-6 mb-6">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Usluge automehaničara" className="rounded-2xl max-h-48 object-cover" />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {services.map((s) => (
          <div key={s.title} className="glass-card p-6 rounded-2xl">
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="text-gray-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
