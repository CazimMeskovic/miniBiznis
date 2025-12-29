export default function PortfolioPage() {
  const projects = Array.from({ length: 6 }).map((_, i) => ({ title: `Project ${i + 1}`, desc: 'A case study showcasing modern design.' }))
  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {projects.map(p => (
          <article key={p.title} className="glass-card rounded-2xl overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-[#7c5cff] to-[#5eead4] opacity-30" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
      {/*  <div className="mt-10 text-center text-sm text-gray-400">
        <strong>Automehaničarska Radnja "Brzi Servis"</strong><br />
        Ulica Servisna 10, 71000 Sarajevo<br />
        Tel: <a href="tel:+38761123456" className="underline hover:text-[#7c5cff]">+387 61 123 456</a>
      </div> */}
    </section>
  )
}
