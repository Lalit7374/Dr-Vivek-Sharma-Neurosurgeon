import React from 'react'

const blogs = [
  { title:'Warning Signs of a Brain Tumor You Should Never Ignore', cat:'Neurology', date:'May 20, 2025', excerpt:'Persistent headaches, vision changes, or sudden seizures can be early indicators of a brain tumor. Learn when to seek immediate medical attention.', time:'5 min read' },
  { title:'How to Prevent Stroke: Lifestyle Changes That Matter', cat:'Neurology', date:'May 10, 2025', excerpt:'Stroke is largely preventable. Controlling blood pressure, quitting smoking, and staying active can significantly reduce your risk.', time:'4 min read' },
  { title:'Living With Epilepsy: A Complete Guide for Patients', cat:'Neurology', date:'April 28, 2025', excerpt:'With proper medication and lifestyle adjustments, most epilepsy patients lead completely normal lives.', time:'6 min read' },
  { title:'Migraine vs Headache: Know the Difference', cat:'Neurology', date:'April 15, 2025', excerpt:'Not all head pain is a migraine. Understanding the differences can help you get the right treatment faster.', time:'3 min read' },
  { title:'Slip Disc: When Surgery is Necessary', cat:'Spine', date:'April 5, 2025', excerpt:'Most slip disc cases resolve with physiotherapy and rest. Here is when your doctor may recommend surgical intervention.', time:'5 min read' },
  { title:"Parkinson's Disease: Early Signs and Treatment Options", cat:'Neurology', date:'March 22, 2025', excerpt:'Early diagnosis can significantly slow its progression. Know the subtle early signs that are often overlooked.', time:'7 min read' },
]

export default function Blogs() {
  return (
    <>
      <div style={{ background:'linear-gradient(135deg,#1a3c5e,#2a5c8e)', color:'white', borderRadius:12, padding:'40px 32px', marginBottom:24, textAlign:'center' }}>
        <h1 style={{ fontFamily:'Merriweather,serif', fontSize:28, marginBottom:8 }}>Health Blogs & Articles</h1>
        <p style={{ fontSize:15, color:'#9bbcd4' }}>Expert insights on health, wellness, and medical care</p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:16 }}>
        {blogs.map((b,i) => (
          <div key={i} className="section-card" style={{ display:'flex', flexDirection:'column' }}>
            <span style={{ display:'inline-block', background:'#eaf0f8', color:'#1a3c5e', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.6px', padding:'4px 10px', borderRadius:4, marginBottom:10, width:'fit-content' }}>{b.cat}</span>
            <h3 style={{ fontSize:15, fontWeight:700, color:'#1a3c5e', marginBottom:8, lineHeight:1.4, flex:1 }}>{b.title}</h3>
            <p style={{ fontSize:13, color:'#555', lineHeight:1.7, marginBottom:12, flex:1 }}>{b.excerpt}</p>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'#7a9cb5', marginBottom:12 }}>
              <span>📅 {b.date}</span><span>{b.time}</span>
            </div>
            <button style={{ background:'#1a3c5e', color:'white', padding:'9px', borderRadius:6, fontSize:13, fontWeight:600, border:'none', cursor:'pointer', width:'100%' }}>Read More</button>
          </div>
        ))}
      </div>
    </>
  )
}
