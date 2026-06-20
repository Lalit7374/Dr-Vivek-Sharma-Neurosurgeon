import React from 'react'
import { Link } from 'react-router-dom'

const doctors = [
  { name:'Dr. Vivek Sharma', specialty:'Neurosurgeon', qual:'MBBS, MS, MCh', exp:'10+ Years', loc:'Varanasi, UP', path:'/' },
  { name:'Dr. Anita Verma', specialty:'Cardiologist', qual:'MBBS, MD, DM', exp:'12+ Years', loc:'Lucknow, UP', path:'#' },
  { name:'Dr. Rajesh Gupta', specialty:'Orthopedic Surgeon', qual:'MBBS, MS (Ortho)', exp:'8+ Years', loc:'Varanasi, UP', path:'#' },
  { name:'Dr. Priya Singh', specialty:'Gynecologist', qual:'MBBS, MD', exp:'9+ Years', loc:'Kanpur, UP', path:'#' },
  { name:'Dr. Suresh Mishra', specialty:'Gastroenterologist', qual:'MBBS, MD, DM', exp:'15+ Years', loc:'Allahabad, UP', path:'#' },
  { name:'Dr. Meena Tiwari', specialty:'Dermatologist', qual:'MBBS, MD (Derma)', exp:'7+ Years', loc:'Varanasi, UP', path:'#' },
]

export default function Doctors() {
  return (
    <>
      <div style={{ background:'linear-gradient(135deg,#1a3c5e,#2a5c8e)', color:'white', borderRadius:12, padding:'40px 32px', marginBottom:24, textAlign:'center' }}>
        <h1 style={{ fontFamily:'Merriweather,serif', fontSize:28, marginBottom:8 }}>Our Specialist Doctors</h1>
        <p style={{ fontSize:15, color:'#9bbcd4' }}>Find and consult top-rated doctors across India</p>
      </div>
      <input type="text" placeholder="🔍  Search by doctor name or specialty..." style={{ width:'100%', padding:'12px 18px', border:'1.5px solid #d0dce8', borderRadius:8, fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', marginBottom:20 }} />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:16 }}>
        {doctors.map((d,i) => (
          <div key={i} style={{ background:'white', border:'1px solid #d0dce8', borderRadius:12, padding:20, display:'flex', gap:16, alignItems:'flex-start' }}>
            <div style={{ width:64, height:72, background:'#eaf0f8', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, border:'2px solid #1a3c5e' }}>
              <svg viewBox="0 0 80 90" fill="none" width="44"><circle cx="40" cy="28" r="20" fill="#a0b4c8"/><ellipse cx="40" cy="80" rx="30" ry="18" fill="#a0b4c8"/></svg>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:15, fontWeight:700, color:'#1a3c5e', marginBottom:3 }}>{d.name}</div>
              <div style={{ fontSize:13, color:'#e05c1a', fontWeight:600, marginBottom:8 }}>{d.specialty}</div>
              <div style={{ fontSize:12, color:'#555', marginBottom:3 }}>🎓 {d.qual}</div>
              <div style={{ fontSize:12, color:'#555', marginBottom:3 }}>💼 {d.exp}</div>
              <div style={{ fontSize:12, color:'#555', marginBottom:10 }}>📍 {d.loc}</div>
              <Link to={d.path} style={{ display:'inline-block', background:'#1a3c5e', color:'white', padding:'7px 16px', borderRadius:6, fontSize:13, fontWeight:600 }}>View Profile</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
