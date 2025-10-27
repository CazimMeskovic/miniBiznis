export default function AboutPage(){
  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold">About NovaWeb</h2>
      <p className="text-gray-300">We craft modern websites focused on performance and conversion for small businesses. This template highlights a futuristic aesthetic with practical components.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="glass-card p-6 rounded-2xl"> <h4 className="font-semibold">Mission</h4><p className="text-gray-300 mt-2">Deliver high value web experiences.</p></div>
        <div className="glass-card p-6 rounded-2xl"> <h4 className="font-semibold">Vision</h4><p className="text-gray-300 mt-2">Be the go-to template for small business websites.</p></div>
        <div className="glass-card p-6 rounded-2xl"> <h4 className="font-semibold">Values</h4><p className="text-gray-300 mt-2">Speed, clarity, and beautiful UX.</p></div>
      </div>
    </section>
  )
}
