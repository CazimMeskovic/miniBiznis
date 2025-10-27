export default function BlogPage(){
  const posts = Array.from({length:3}).map((_,i)=>({title:`Post ${i+1}`, excerpt:'Short excerpt about business tips.'}))
  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold">Blog</h2>
      <div className="space-y-4 mt-6">
        {posts.map(p=> (
          <article key={p.title} className="glass-card p-4 rounded-2xl">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
