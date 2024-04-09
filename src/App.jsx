import React, { useState } from 'react';
import './App.css'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Header from './components/header.jsx'
import Dashboard from './pages/dashboard.jsx'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>

     
    </>
  );
}



export default App;
