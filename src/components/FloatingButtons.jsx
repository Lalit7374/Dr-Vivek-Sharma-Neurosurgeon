import React from 'react'
import whatsappLogo from '../assets/whatsapp.png'

export default function FloatingButtons() {
  return (
    <div style={{ position:'fixed', bottom:24, right:20, display:'flex', flexDirection:'column', gap:12, zIndex:999 }}>
      <a href="tel:+916387198048" style={{ width:50, height:50, borderRadius:'50%', background:'#2c5f8a', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, boxShadow:'0 3px 10px rgba(0,0,0,0.25)' }}>📞</a>
      <a href="https://wa.me/916387198048" target="_blank" rel="noopener noreferrer" style={{ width:50, height:50, borderRadius:'50%', background:'#25d366', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 3px 10px rgba(0,0,0,0.25)', overflow:'hidden' }}>
        <img src={whatsappLogo} alt="WhatsApp" style={{ width:50, height:50, objectFit:'cover' }} />
      </a>
    </div>
  )
}