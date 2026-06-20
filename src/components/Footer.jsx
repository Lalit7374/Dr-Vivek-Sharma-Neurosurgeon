// import React from 'react'
// import logo from '../assets/logo.jpeg'
// import { Link } from 'react-router-dom'

// export default function Footer() {
//   return (
//     <footer style={{ background:'#2c5f8a', color:'#cde', padding:'36px 16px 16px', marginTop:8 }}>
//       <div style={{ maxWidth:960, margin:'0 auto' }}>
//         <div className="footer-grid">
//           <div>
//             <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
//               <img src={logo} alt="Logo" style={{ height:36, width:'auto', objectFit:'contain' }} />
//               <span style={{ fontFamily:'Merriweather,serif', fontSize:18, color:'white', fontWeight:700 }}>Healthhubplus</span>
//             </div>
//             <div style={{ fontSize:13, color:'#9bbcd4', marginBottom:6 }}>📧 Info@hospitalsindia.co.in</div>
//             <div style={{ fontSize:12.5, color:'#7a9cb5' }}>Your trusted healthcare partner in India.</div>
//           </div>
//           <div>
//             <div style={{ fontSize:13, fontWeight:700, color:'white', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:12 }}>Quick Links</div>
//             {[['Home','/'],['Doctors','/doctors'],['Hospitals','/hospitals'],['Treatments','/treatments']].map(([l,p]) => (
//               <Link key={p} to={p} style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:6 }}>{l}</Link>
//             ))}
//           </div>
//           <div>
//             <div style={{ fontSize:13, fontWeight:700, color:'white', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:12 }}>Information</div>
//             {[['Blogs','/blogs'],['Contact Us','/contact']].map(([l,p]) => (
//               <Link key={p} to={p} style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:6 }}>{l}</Link>
//             ))}
//             <a href="#" style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:6 }}>Privacy Policy</a>
//             <a href="#" style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:6 }}>Terms & Conditions</a>
//           </div>
//           <div>
//             <div style={{ fontSize:13, fontWeight:700, color:'white', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:12 }}>Contact</div>
//             <a href="tel:+916387198048" style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:6 }}>📞 +91 63871 98048</a>
//             <a href="tel:+917408368540" style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:6 }}>📞 +91 74083 68540</a>
//           </div>
//         </div>
//         <div style={{ borderTop:'1px solid #2c5278', paddingTop:14, fontSize:12, color:'#7a9cb5', textAlign:'center', marginTop:24 }}>
//           Copyright © 2025 Healthhubplus. All rights reserved.
//         </div>
//       </div>
//       <style>{`
//         .footer-grid { display:grid; grid-template-columns:1.5fr 1fr 1fr 1fr; gap:24px; }
//         @media(max-width:768px) { .footer-grid { grid-template-columns:1fr 1fr; gap:20px; } }
//         @media(max-width:480px) { .footer-grid { grid-template-columns:1fr; } }
//       `}</style>
//     </footer>
//   )
// }


import React from 'react'
import logo from '../assets/logo.jpeg'

export default function Footer() {
  return (
    <footer style={{ background:'#2c5f8a', color:'#cde', padding:'36px 16px 16px', marginTop:8 }}>
      <div style={{ maxWidth:960, margin:'0 auto' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
              <img src={logo} alt="Logo" style={{ height:36, width:'auto', objectFit:'contain' }} />
              <span style={{ fontFamily:'Merriweather,serif', fontSize:18, color:'white', fontWeight:700 }}>Healthhubplus</span>
            </div>
            <p style={{ fontSize:13, color:'#9bbcd4', lineHeight:1.7 }}>Your trusted healthcare partner in India. We help patients connect with the best doctors and hospitals.</p>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize:13, fontWeight:700, color:'white', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:12 }}>Contact Us</div>
            <a href="tel:+916387198048" style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:8 }}>📞 +91 63871 98048</a>
            <a href="tel:+917408368540" style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:8 }}>📞 +91 74083 68540</a>
            {/* <a href="mailto:Info@healthhubplus.com" style={{ display:'block', fontSize:13, color:'#9bbcd4', marginBottom:8 }}>📧 Info@healthhubplus.com</a> */}
          </div>

          {/* Doctor Info */}
          <div>
            <div style={{ fontSize:13, fontWeight:700, color:'white', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:12 }}>Our Doctor</div>
            <p style={{ fontSize:13, color:'#9bbcd4', marginBottom:6 }}>👨‍⚕️ Dr. Vivek Sharma</p>
            <p style={{ fontSize:13, color:'#9bbcd4', marginBottom:6 }}>🧠 Neurosurgeon</p>
            <p style={{ fontSize:13, color:'#9bbcd4', marginBottom:6 }}>📍 Varanasi, UP</p>
            <p style={{ fontSize:13, color:'#9bbcd4', marginBottom:6 }}>🕒 Monday to Sunday (All Days)</p>
            <p style={{ fontSize:13, color:'#9bbcd4' }}>⏰ 06:00 AM – 09:00 PM</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid #2c5278', paddingTop:14, marginTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
          <span style={{ fontSize:12, color:'#7a9cb5' }}>Copyright © 2025 Healthhubplus. All rights reserved.</span>
          <div style={{ display:'flex', gap:16 }}>
            <a href="#" style={{ fontSize:12, color:'#7a9cb5' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize:12, color:'#7a9cb5' }}>Terms & Conditions</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { display:grid; grid-template-columns:1.8fr 1fr 1fr; gap:24px; }
        @media(max-width:768px) { .footer-grid { grid-template-columns:1fr 1fr; gap:20px; } }
        @media(max-width:480px) { .footer-grid { grid-template-columns:1fr; } }
      `}</style>
    </footer>
  )
}