import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { NavLink } from 'react-router-dom'

// const links = [
//   { label: 'Home', path: '/' },
//   { label: 'Doctors', path: '/doctors' },
//   { label: 'Hospitals', path: '/hospitals' },
//   { label: 'Treatments', path: '/treatments' },
//   { label: 'Blogs', path: '/blogs' },
//   { label: 'Contact', path: '/contact' },
// ]

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   return (
//     <>
//       <header style={{ background:'#2c5f8a', position:'sticky', top:0, zIndex:100, boxShadow:'0 2px 8px rgba(0,0,0,0.2)' }}>
//         <div style={{ maxWidth:960, margin:'0 auto', padding:'14px 16px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          
//           <NavLink to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
//             <img src={logo} alt="Logo" style={{ height:40, width:'auto', objectFit:'contain' }} />
//             <span style={{ fontFamily:'Merriweather,serif', fontSize:20, fontWeight:700, color:'white' }}>Healthhubplus</span>
//           </NavLink>

//           <nav className="desktop-nav">
//             {links.map(l => (
//               <NavLink key={l.path} to={l.path} end={l.path==='/'} style={({ isActive }) => ({
//                 color: isActive ? 'white' : '#cde', fontSize:13.5, padding:'6px 10px', borderRadius:5,
//                 background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent', marginLeft:4
//               })}>
//                 {l.label}
//               </NavLink>
//             ))}
//           </nav>

//           <button onClick={() => setOpen(!open)} className="hamburger" aria-label="menu">
//             <span/><span/><span/>
//           </button>
//         </div>

//         {open && (
//           <nav style={{ background:'#1e4f7a', padding:'8px 16px 16px' }}>
//             {links.map(l => (
//               <NavLink key={l.path} to={l.path} end={l.path==='/'} onClick={() => setOpen(false)}
//                 style={({ isActive }) => ({
//                   display:'block', color: isActive ? 'white' : '#cde', fontSize:15,
//                   padding:'10px 0', borderBottom:'1px solid rgba(255,255,255,0.08)'
//                 })}>
//                 {l.label}
//               </NavLink>
//             ))}
//           </nav>
//         )}
//       </header>
//       <style>{`
//         .desktop-nav { display:flex; }
//         .hamburger { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
//         .hamburger span { display:block; width:24px; height:2px; background:white; border-radius:2px; }
//         @media(max-width:768px) { .desktop-nav { display:none; } .hamburger { display:flex; } }
//       `}</style>
//     </>
//   )
// }

export default function Navbar() {
  return (
    <>
      <header style={{ background:'#2c5f8a', position:'sticky', top:0, zIndex:100, boxShadow:'0 2px 8px rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth:960, margin:'0 auto', padding:'14px 16px', display:'flex', alignItems:'center' }}>
          <NavLink to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
            <img src={logo} alt="Logo" style={{ height:40, width:'auto', objectFit:'contain' }} />
            <span style={{ fontFamily:'Merriweather,serif', fontSize:20, fontWeight:700, color:'white' }}>Healthhubplus</span>
          </NavLink>
        </div>
      </header>
    </>
  )
}