import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

import Home from './components/Home/Home-Page'
import About from './components/About-us/About';
import Department from './components/Departments/Departments';
import Community from './components/Community/Community';
import Recruitment from './components/Recruitment/Recruitment';
import Board from './components/Exec-board/Board';
import Member from './components/Members/Members';
import Case_Study from './components/Case-Studies/CaseStudies';
import SaintBaldrick from './components/St-Baldricks/St_Baldricks';

function App() {

  return (
    <BrowserRouter basename={'/website/'}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<About />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/community" element={<Community />} />
        <Route path="/recruitment" element={<Recruitment/>}/>
        <Route path="/exec-board" element={<Board/>}/>
        <Route path="/members" element={<Member/>}/>
        <Route path="/clinical-symposiums" element={<Case_Study/>}/>
        <Route path="/st-baldricks" element={<SaintBaldrick/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
