import React from 'react'

const cats = [
  { icon:'🧠', title:'Neurology & Neurosurgery', items:['Brain Tumor Surgery','Spine Surgery','Epilepsy Treatment','Stroke Management',"Parkinson's Treatment",'Migraine Treatment'] },
  { icon:'❤️', title:'Cardiology', items:['Angioplasty','Bypass Surgery','Heart Valve Replacement','Pacemaker Implant','Cardiac Catheterization'] },
  { icon:'🦴', title:'Orthopedics', items:['Knee Replacement','Hip Replacement','Spine Correction','Fracture Surgery','Sports Injury Treatment'] },
  { icon:'👁️', title:'Ophthalmology', items:['Cataract Surgery','LASIK Surgery','Glaucoma Treatment','Retina Surgery','Cornea Transplant'] },
  { icon:'🫁', title:'Pulmonology', items:['Asthma Treatment','COPD Management','Lung Cancer Care','Sleep Apnea','Bronchoscopy'] },
  { icon:'🩺', title:'General Surgery', items:['Laparoscopic Surgery','Hernia Repair','Appendectomy','Gallbladder Removal','Thyroid Surgery'] },
]

export default function Treatments() {
  return (
    <>
      <div style={{ background:'linear-gradient(135deg,#1a3c5e,#2a5c8e)', color:'white', borderRadius:12, padding:'40px 32px', marginBottom:24, textAlign:'center' }}>
        <h1 style={{ fontFamily:'Merriweather,serif', fontSize:28, marginBottom:8 }}>Medical Treatments</h1>
        <p style={{ fontSize:15, color:'#9bbcd4' }}>Comprehensive care across all major specialties</p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:16 }}>
        {cats.map((c,i) => (
          <div key={i} className="section-card">
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <span style={{ fontSize:28 }}>{c.icon}</span>
              <h3 style={{ fontSize:15, fontWeight:700, color:'#1a3c5e' }}>{c.title}</h3>
            </div>
            {c.items.map(item => (
              <div key={item} style={{ fontSize:13.5, color:'#333', padding:'5px 0', borderBottom:'1px solid #f0f4f8', display:'flex', gap:8 }}>
                <span style={{ color:'#e05c1a', fontWeight:700 }}>→</span> {item}
              </div>
            ))}
            <button style={{ marginTop:14, background:'#1a3c5e', color:'white', padding:'9px 20px', borderRadius:6, fontSize:13, fontWeight:600, border:'none', cursor:'pointer', width:'100%' }}>Find Specialist</button>
          </div>
        ))}
      </div>
    </>
  )
}
