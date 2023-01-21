import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HeaderStatic from './Header/headerStatic'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <HeaderStatic/>
    <Footer/>
    </>
  )
}

export default Layout