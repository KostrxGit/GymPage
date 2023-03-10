import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Components/Navbar/navbar'
import Footer from './Components/Footer/Footer'
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PlansPage from './pages/PlansPage'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />  
        <Route path="/plans" element={<PlansPage />} />    

      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
)



