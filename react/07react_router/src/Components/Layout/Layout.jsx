import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../About/About'
import ContactUs from '../ContactUs/ContactUs'
import { Route, Router, Routes } from 'react-router-dom'
import UserId from '../UserId/UserId'
import Github from '../Github/Github'

function Layout() {
  return (
    <>
        <Header />  
        <Routes>  
          <Route path='' Component={Home}></Route>
          <Route path='about' Component={About}></Route>
          <Route path='contactus' Component={ContactUs}></Route>
          <Route path='user/:userid' Component={UserId }></Route>
          <Route path='github' Component={Github}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default Layout