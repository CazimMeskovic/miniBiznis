export default function ServicesPage(){
  const services = [
    {title:'Web Design', desc:'Beautiful and responsive websites.'},
    {title:'E-commerce', desc:'Conversion-optimized stores.'},
    {title:'SEO & Growth', desc:'Get found and grow.'},
    {title:'Maintenance', desc:'Reliable support and updates.'}
  ]

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {services.map((s)=> (
          <div key={s.title} className="glass-card p-6 rounded-2xl">
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="text-gray-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
