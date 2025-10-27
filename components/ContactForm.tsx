'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm(){
  const [status,setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault()
    setStatus('loading')
    try{
      // placeholder: integrate your API here
      await new Promise(r=> setTimeout(r,800))
      setStatus('success')
    }catch(e){
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl space-y-4">
      <div>
        <label className="text-sm">Name</label>
        <input required className="w-full mt-1 p-3 rounded-md bg-transparent border border-white/6"/>
      </div>
      <div>
        <label className="text-sm">Email</label>
        <input required type="email" className="w-full mt-1 p-3 rounded-md bg-transparent border border-white/6"/>
      </div>
      <div>
        <label className="text-sm">Message</label>
        <textarea required rows={5} className="w-full mt-1 p-3 rounded-md bg-transparent border border-white/6" />
      </div>
      <div>
        <button type="submit" className="btn-accent">{status === 'loading' ? 'Sending...' : 'Send Message'}</button>
      </div>
      {status === 'success' && <p className="text-green-400">Message sent — we will respond shortly.</p>}
      {status === 'error' && <p className="text-red-400">Failed to send message. Try again later.</p>}
    </form>
  )
}
