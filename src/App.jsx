import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Hospitals from './pages/Hospitals'
import Treatments from './pages/Treatments'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  )
}
