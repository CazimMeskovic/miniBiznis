import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6  " id="kontakt">
      <h2 className="text-4xl font-bold">Kontakt</h2>
      <div className="w-full flex justify-center mb-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcrr2BHJA9S4Qun1Ws0uZYumEPd-PmD3Edg&s" alt="Kontakt automehaničar" className="rounded-2xl max-h-48 object-cover" />
      </div>
      <p className="text-gray-300">Imate pitanje ili želite zakazati servis? Pošaljite nam poruku ili nas kontaktirajte direktno. Odgovaramo brzo!</p>
      <div className="mb-4 text-left text-gray-300">
        <p><strong>Telefon:</strong> +387 61 123 456</p>
        <p><strong>Email:</strong> brzi.servis@example.com</p>
        <p><strong>Adresa:</strong> Ulica Servisna 10, 71000 Sarajevo</p>
        <p><strong>Radno vrijeme:</strong> Pon-Pet: 08:00 - 17:00, Sub: 08:00 - 13:00</p>
      </div>
      <ContactForm />
    </section>
  )
}
