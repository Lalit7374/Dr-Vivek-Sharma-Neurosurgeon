import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = () => { if (form.name && form.phone) setSubmitted(true) }

  return (
    <>
      <div style={{ background:'linear-gradient(135deg,#1a3c5e,#2a5c8e)', color:'white', borderRadius:12, padding:'40px 32px', marginBottom:24, textAlign:'center' }}>
        <h1 style={{ fontFamily:'Merriweather,serif', fontSize:28, marginBottom:8 }}>Contact Us</h1>
        <p style={{ fontSize:15, color:'#9bbcd4' }}>We're here to help you book appointments and answer your queries</p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:20 }} className="contact-grid">
        <div className="section-card">
          <h2 className="section-title">Get In Touch</h2>
          {[
            { icon:'📞', label:'Booking Numbers', val:<><a href="tel:+918576085750" style={{ display:'block', color:'#1a3c5e', fontSize:14, fontWeight:500 }}>+91 85760 85750</a><a href="tel:+918467015783" style={{ display:'block', color:'#1a3c5e', fontSize:14, fontWeight:500 }}>+91 84670 15783</a></> },
            { icon:'📧', label:'Email', val:<span style={{ fontSize:14, color:'#1a3c5e' }}>Info@hospitalsindia.co.in</span> },
            { icon:'📍', label:'Address', val:<span style={{ fontSize:14, color:'#333', lineHeight:1.6 }}>Sri Ram Nagar Colony, Manduwadih,<br/>Varanasi, UP – 221106</span> },
            { icon:'🕒', label:'Working Hours', val:<span style={{ fontSize:14, color:'#333' }}>Mon–Wed & Fri–Sun: 6:00 AM – 9:00 PM</span> },
          ].map((item,i) => (
            <div key={i} style={{ display:'flex', gap:14, alignItems:'flex-start', padding:'14px 0', borderBottom:'1px solid #eef2f8' }}>
              <span style={{ fontSize:22, flexShrink:0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.5px', color:'#7a9cb5', marginBottom:4 }}>{item.label}</div>
                {item.val}
              </div>
            </div>
          ))}
          <a href="https://wa.me/918576085750" target="_blank" rel="noopener noreferrer" style={{ display:'block', background:'#25d366', color:'white', textAlign:'center', padding:12, borderRadius:8, fontWeight:600, fontSize:14, marginTop:16 }}>💬 Chat on WhatsApp</a>
        </div>

        <div className="section-card">
          <h2 className="section-title">Send Us a Message</h2>
          {submitted ? (
            <div style={{ background:'#f0fdf4', border:'1px solid #86efac', borderRadius:8, padding:20, fontSize:14.5, color:'#166534', lineHeight:1.75 }}>
              ✅ Thank you, <strong>{form.name}</strong>! We will contact you on <strong>{form.phone}</strong> shortly.
            </div>
          ) : (
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {[
                { label:'Full Name *', name:'name', type:'text', placeholder:'Enter your full name' },
                { label:'Phone Number *', name:'phone', type:'tel', placeholder:'+91 XXXXX XXXXX' },
                { label:'Email Address', name:'email', type:'email', placeholder:'your@email.com' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ fontSize:13, fontWeight:600, color:'#1a3c5e', display:'block', marginBottom:5 }}>{f.label}</label>
                  <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder}
                    style={{ width:'100%', padding:'10px 14px', border:'1.5px solid #d0dce8', borderRadius:7, fontSize:14, fontFamily:'Inter,sans-serif', outline:'none' }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:'#1a3c5e', display:'block', marginBottom:5 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your condition or query..." rows={4}
                  style={{ width:'100%', padding:'10px 14px', border:'1.5px solid #d0dce8', borderRadius:7, fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', resize:'vertical' }} />
              </div>
              <button onClick={handleSubmit} style={{ background:'#1a3c5e', color:'white', padding:'12px 28px', border:'none', borderRadius:7, fontSize:15, fontWeight:600, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
                📩 Send Message
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  )
}
