import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import HeaderStatic from './Header/headerStatic'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <HeaderStatic/>
    </>
  )
}

export default Layout