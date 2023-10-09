import { useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import './App.css'

import Home from './components/Home'
import About from './components/About';
import Department from './components/Departments';
import Community from './components/Community';
import Recruitment from './components/Recruitment';
import Board from './components/Board';
import Members from './components/Members';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about-us" element={<About />} />
        <Route path="departments" element={<Department />} />
        <Route path="community" element={<Community />} />
        <Route path="recruitment" element={<Recruitment/>}/>
        <Route path="exec-board" element={<Board/>}/>
        <Route path="members" element={<Members/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
