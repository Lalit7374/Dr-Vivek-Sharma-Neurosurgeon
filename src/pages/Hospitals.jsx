import React from 'react'

const hospitals = [
  { name:'Sir Sunderlal Hospital (BHU)', loc:'Lanka, Varanasi, UP', type:'Government Teaching Hospital', beds:'2500+', specs:['Neurology','Cardiology','Orthopedics','Oncology'] },
  { name:'Heritage Hospital', loc:'Varanasi, UP', type:'Multi-Specialty Private Hospital', beds:'300+', specs:['Neurosurgery','Cardiac Surgery','Pediatrics','Gynecology'] },
  { name:'Shubham Hospital', loc:'Manduwadih, Varanasi, UP', type:'Super Specialty Hospital', beds:'150+', specs:['Neurology','Spine Surgery','Urology','ENT'] },
  { name:'SGPGI Lucknow', loc:'Raibareli Road, Lucknow, UP', type:'Government Institute', beds:'960+', specs:['Nephrology','Neurology','Gastroenterology','Endocrinology'] },
]

export default function Hospitals() {
  return (
    <>
      <div style={{ background:'linear-gradient(135deg,#1a3c5e,#2a5c8e)', color:'white', borderRadius:12, padding:'40px 32px', marginBottom:24, textAlign:'center' }}>
        <h1 style={{ fontFamily:'Merriweather,serif', fontSize:28, marginBottom:8 }}>Top Hospitals in India</h1>
        <p style={{ fontSize:15, color:'#9bbcd4' }}>Trusted hospitals with world-class facilities</p>
      </div>
      {hospitals.map((h,i) => (
        <div key={i} className="section-card">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10, flexWrap:'wrap', gap:10 }}>
            <div>
              <div style={{ fontSize:18, color:'#1a3c5e', fontWeight:700, marginBottom:4 }}>🏥 {h.name}</div>
              <div style={{ fontSize:13, color:'#e05c1a', fontWeight:600 }}>{h.type}</div>
            </div>
            <div style={{ background:'#1a3c5e', color:'white', padding:'6px 14px', borderRadius:20, fontSize:13, fontWeight:600, whiteSpace:'nowrap' }}>{h.beds} Beds</div>
          </div>
          <div style={{ display:'flex', gap:20, fontSize:13.5, color:'#555', marginBottom:12, flexWrap:'wrap' }}>
            <span>📍 {h.loc}</span>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:14 }}>
            {h.specs.map(s => <span key={s} style={{ background:'#eaf0f8', color:'#1a3c5e', fontSize:12, padding:'4px 10px', borderRadius:4, border:'1px solid #c0d4ea' }}>{s}</span>)}
          </div>
          <button style={{ background:'#1a3c5e', color:'white', padding:'9px 20px', borderRadius:6, fontSize:13, fontWeight:600, border:'none', cursor:'pointer' }}>Get Appointment</button>
        </div>
      ))}
    </>
  )
}
