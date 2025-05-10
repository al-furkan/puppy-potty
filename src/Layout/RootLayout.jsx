import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/header'
import Footer from '../components/Footer/Footer'

const RootLayout = () => {
  return (
   <>
    <Header />
    <Outlet />  
    <Footer />      
   </>
  )
}

export default RootLayout;