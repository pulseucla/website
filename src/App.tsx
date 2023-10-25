import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

import Home from './components/Home'
import About from './components/About';
import Department from './components/Departments';
import Community from './components/Community';
import Recruitment from './components/Recruitment';
import Board from './components/Board';
import Member from './components/Members';
import Case_Study from './components/CaseStudies';
import SaintBaldrick from './components/St_Baldricks';

function App() {

  return (
    <BrowserRouter basename="/pulse-site/">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about-us" element={<About />} />
        <Route path="departments" element={<Department />} />
        <Route path="community" element={<Community />} />
        <Route path="recruitment" element={<Recruitment/>}/>
        <Route path="exec-board" element={<Board/>}/>
        <Route path="members" element={<Member/>}/>
        <Route path="clinical-symposiums" element={<Case_Study/>}/>
        <Route path="st-baldricks" element={<SaintBaldrick/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
