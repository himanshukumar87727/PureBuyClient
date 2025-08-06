import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Profile, Setting, SignUp,Login, Footer, PageNotFound, Home,OtpVerification } from './All Components'




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path='/otp-verification/:type/:userId' element={<OtpVerification />} />
        
        

      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}

