import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header'
import HeaderStatic from './header/headerStatic'

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