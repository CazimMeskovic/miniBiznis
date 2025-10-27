import ContactForm from '../../components/ContactForm'

export default function ContactPage(){
  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="text-gray-300">Have a project? Let us know — we respond quickly.</p>
      <ContactForm />
    </section>
  )
}
