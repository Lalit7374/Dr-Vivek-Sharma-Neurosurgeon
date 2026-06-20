import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import doctorPhoto from '../assets/doctor-photo.jpg'

export default function Home() {
  const [imgErr, setImgErr] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    { q: "What is Dr Vivek Sharma's booking number?", a: "Call +91 63871 98048 or +91 74083 68540 for appointment booking." },
    { q: "Is Dr Vivek Sharma a neurologist or neurosurgeon?", a: "He practices as both a neurologist and neurosurgeon, treating brain, spine, and nerve conditions." },
    { q: "What are the consultation timings?", a: "All days of the week (Monday to Sunday), 06:00 AM – 09:00 PM." },
    { q: "Where is the clinic located?", a: "Sri Ram Nagar Colony, Manduwadih, Varanasi, Uttar Pradesh – 221106." },
    { q: "What if my appointment is not confirmed?", a: "A complete refund of all fees paid to Healthhubplus will be processed promptly without any deductions." },
    { q: "Is Dr Vivek Sharma associated with BHU?", a: "Yes, he has previously served as a Professor at Banaras Hindu University (BHU)." },
  ]

  const treatments = ['Head Injury','Head Pain','Headache','Lumbar Spondylosis','Neurospine Surgery','Neurosurgery','Sciatica','Seizure & Epilepsy','Slip Disc','Spinal Cord Tumour','Spinal Disorders','Spine Injury','Spondylolisthesis','Stroke & Paralysis','Vertigo','Migraine','Parkinson\'s','Alzheimer\'s']

  return (
    <>
      {/* Profile Card */}
      <div className="section-card" style={{ display:'flex', gap:28, alignItems:'flex-start', marginTop:8, flexWrap:'wrap' }}>
        <div style={{ flexShrink:0 }}>
          {doctorPhoto && !imgErr
            ? <img src={doctorPhoto} alt="Dr. Vivek Sharma" onError={() => setImgErr(true)} style={{ width:160, height:190, objectFit:'cover', objectPosition:'center top', borderRadius:10, border:'3px solid #2c5f8a', display:'block', transform:'scale(1.15)', transformOrigin:'center top' }} />
            : <div style={{ width:160, height:190, background:'#eaf0f8', border:'2px dashed #a0b4c8', borderRadius:10, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10, padding:12, textAlign:'center' }}>
                <svg viewBox="0 0 80 90" fill="none" width="70"><circle cx="40" cy="28" r="20" fill="#a0b4c8"/><ellipse cx="40" cy="80" rx="30" ry="18" fill="#a0b4c8"/></svg>
                <p style={{ fontSize:10, color:'#7a95b0', lineHeight:1.4 }}>Add photo:<br/><code style={{ fontSize:9, background:'#d8e5f0', padding:'2px 4px', borderRadius:3 }}>src/assets/doctor-photo.jpg</code></p>
              </div>
          }
        </div>
        <div style={{ flex:1, minWidth:200 }}>
          <h1 style={{ fontFamily:'Merriweather,serif', fontSize:26, color:'#2c5f8a', marginBottom:4 }}>Dr. Vivek Sharma</h1>
          <p style={{ fontSize:16, color:'#e05c1a', fontWeight:600, marginBottom:14 }}>Neurosurgeon</p>
          {[['🎓 Education','MBBS, MS, MCh'],['💼 Experience','10+ Years'],['🏥 Hospital','Dr Vivek Sharma Clinic, Sri Ram Nagar Colony, Manduwadih, Varanasi'],['🌍 Country','India']].map(([l,v]) => (
            <div key={l} style={{ display:'flex', gap:10, fontSize:14, marginBottom:7 }}>
              <span style={{ color:'#2c5f8a', fontWeight:600, minWidth:110, flexShrink:0 }}>{l}</span>
              <span style={{ color:'#444' }}>{v}</span>
            </div>
          ))}
          <a href="tel:+916387198048" style={{ display:'inline-block', background:'#2c5f8a', color:'white', padding:'11px 28px', borderRadius:6, fontSize:15, fontWeight:600, marginTop:14 }}>📅 Book Appointment</a>
        </div>
      </div>

      {/* About */}
      <div className="section-card">
        <h2 className="section-title">About Doctor</h2>
        <p style={{ fontSize:14.5, color:'#333', lineHeight:1.8 }}>
          <strong>Dr. Vivek Sharma</strong>, a highly experienced <strong>Neurosurgeon in Varanasi</strong>, treats a broad range of conditions including <strong>muscle weakness, seizures, migraine, paralysis, epilepsy, stroke, brain tumors, multiple sclerosis, Alzheimer's, and Parkinson's disease</strong>. He holds <strong>MBBS, MS, and MCh</strong> qualifications and has previously served as a <strong>Professor at BHU</strong>.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginTop:18 }}>
          <div style={{ background:'#eaf4ff', borderLeft:'4px solid #2c5f8a', padding:'14px 16px', borderRadius:4 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', color:'#7a8a99', marginBottom:4 }}>🕒 Timings</div>
            <div style={{ fontSize:13.5, color:'#333' }}>Monday to Sunday (All Days)<br/><strong>06:00 AM – 09:00 PM</strong></div>
          </div>
          <div style={{ background:'#fff4ec', borderLeft:'4px solid #e05c1a', padding:'14px 16px', borderRadius:4 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', color:'#7a8a99', marginBottom:4 }}>📍 Address</div>
            <div style={{ fontSize:13.5, color:'#333' }}>Sri Ram Nagar Colony, Manduwadih,<br/>Varanasi, UP – 221106</div>
          </div>
        </div>
      </div>

      {/* Booking */}
      <div className="section-card">
        <h2 className="section-title">Online Appointment Booking</h2>
        <div style={{ background:'#2c5f8a', color:'white', borderRadius:10, padding:'18px 22px', marginBottom:14 }}>
          <div style={{ fontSize:12, color:'#9bbcd4', textTransform:'uppercase', letterSpacing:'0.6px', marginBottom:10 }}>Booking Numbers</div>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
            <a href="tel:+916387198048" style={{ fontSize:18, fontWeight:700, color:'white' }}>📞 +91 63871 98048</a>
            <span style={{ color:'#7a9cb5' }}>or</span>
            <a href="tel:+917408368540" style={{ fontSize:18, fontWeight:700, color:'white' }}>📞 +91 74083 68540</a>
          </div>
        </div>
        <ul style={{ paddingLeft:0 }}>
          {['Quick confirmation within 3–4 working days','Hassle-free appointment assistance','Complete guidance throughout the process'].map(b => (
            <li key={b} style={{ fontSize:14, color:'#333', padding:'8px 12px', background:'#f0f7ee', borderRadius:6, marginBottom:8, listStyle:'none' }}>✅ {b}</li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <div style={{ background:'#fff8e1', border:'1px solid #f0c040', borderRadius:8, padding:'18px 20px' }}>
        <p style={{ fontSize:14, color:'#444', lineHeight:1.75, marginBottom:14 }}>If you choose to book through <strong>Healthhubplus</strong>, our team will facilitate your consultation within <strong>3 to 4 working days</strong>.</p>
        <ul style={{ paddingLeft:0 }}>
          <li style={{ fontSize:14, color:'#444', lineHeight:1.7, marginBottom:8, listStyle:'none' }}>• Service charges are applicable and payable in advance.</li>
          <li style={{ fontSize:14, color:'#444', lineHeight:1.7, marginBottom:8, listStyle:'none' }}>• Doctor's consultation fee is payable directly at the clinic.</li>
          <li style={{ fontSize:14, color:'#444', lineHeight:1.7, background:'#fff3cd', borderLeft:'3px solid #e0a800', padding:'10px 12px', borderRadius:4, listStyle:'none', marginBottom:8 }}>
            • <strong>Refund Policy:</strong> In the event that your appointment cannot be successfully confirmed or scheduled for any reason, a <strong>complete refund of all fees paid</strong> to Healthhubplus will be processed promptly and without any deductions. We are fully committed to maintaining transparency, fairness, and trust in every patient interaction.
          </li>
          <li style={{ fontSize:14, color:'#444', lineHeight:1.7, background:'#f0f4ff', borderLeft:'3px solid #4a6fa5', padding:'10px 12px', borderRadius:4, listStyle:'none' }}>
            • <strong>Independence Disclaimer:</strong> Healthhubplus is an independent patient facilitation platform and is in no way officially affiliated with, employed by, or representative of Dr. Vivek Sharma or his clinic. We operate solely as an intermediary service provider, acting as a bridge between patients seeking medical consultation and the doctor. All medical decisions, diagnoses, and treatments remain entirely under the authority of the concerned physician.
          </li>
        </ul>
      </div>

      {/* Treatments */}
      <div className="section-card">
        <h2 className="section-title">Treatments Offered</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:8 }}>
          {treatments.map(t => (
            <div key={t} style={{ background:'#eaf0f8', color:'#2c5f8a', fontSize:12.5, padding:'8px 12px', borderRadius:6, border:'1px solid #c0d4ea', textAlign:'center' }}>{t}</div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="section-card">
        <h2 className="section-title">Frequently Asked Questions</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ border:'1px solid #d8e4f0', borderRadius:8, marginBottom:8, overflow:'hidden' }}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width:'100%', background:'none', border:'none', padding:'14px 16px', display:'flex', gap:10, alignItems:'center', cursor:'pointer', textAlign:'left', fontFamily:'Inter,sans-serif', fontSize:14, color:'#2c5f8a', fontWeight:600 }}>
              <span style={{ color:'#e05c1a', fontWeight:700 }}>Q{i+1}.</span>
              <span style={{ flex:1 }}>{f.q}</span>
              <span style={{ fontSize:10, color:'#7a9cb5' }}>{openFaq === i ? '▲' : '▼'}</span>
            </button>
            {openFaq === i && <div style={{ padding:'12px 16px 14px 40px', fontSize:13.5, color:'#444', lineHeight:1.75, background:'#f8fafc', borderTop:'1px solid #e8f0f8' }}>{f.a}</div>}
          </div>
        ))}
      </div>
    </>
  )
}