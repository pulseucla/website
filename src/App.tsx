import { useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import './App.css'

import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  )
}

export default App
