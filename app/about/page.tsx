export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold">O nama</h2>
      <div className="w-full flex justify-center mb-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0P2UCn97rld9GnpjyYH5ieyNHWzEv1JezAw&s" alt="Tim automehaničara" className="rounded-2xl max-h-64 object-cover" />
      </div>
      <p className="text-gray-300">Automehaničarska radnja "Brzi Servis" posluje više od 15 godina i pruža sve vrste popravki i održavanja za putnička i teretna vozila. Naš tim stručnjaka garantuje kvalitetnu uslugu, povjerenje i sigurnost vašeg vozila.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="glass-card p-6 rounded-2xl"> <h4 className="font-semibold">Misija</h4><p className="text-gray-300 mt-2">Pružiti brzu, kvalitetnu i pouzdanu uslugu svim našim klijentima.</p></div>
        <div className="glass-card p-6 rounded-2xl"> <h4 className="font-semibold">Vizija</h4><p className="text-gray-300 mt-2">Biti vodeća automehaničarska radnja u regiji, poznata po stručnosti i povjerenju.</p></div>
        <div className="glass-card p-6 rounded-2xl"> <h4 className="font-semibold">Vrijednosti</h4><p className="text-gray-300 mt-2">Iskrenost, profesionalnost, sigurnost i zadovoljstvo klijenata.</p></div>
      </div>
    </section>
  )
}
