import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='' Component={Home}></Route>
        <Route path='home' Component={Home}></Route>
        <Route path='about' Component={About}></Route>
        <Route path='contactus' Component={ContactUs}></Route>
      </Routes>
      <Analytics />
    </>
  )
}

export default App


