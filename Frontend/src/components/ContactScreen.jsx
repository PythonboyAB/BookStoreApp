import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Contact } from './Contact'

export const ContactScreen= () => {
  return (
    
       <div>
        <Navbar/>
        <div className="min-h-screen ">
        <Contact/>
        
        </div>
        <Footer/>
    </div>
    
  )
}
