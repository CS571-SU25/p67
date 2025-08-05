import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Events from './componets/Events'
import Interested from './componets/Interested'
import AboutUs from './componets/Aboutus'
import Home from './componets/Home'
import BmcLayout from "./structural/BmcLayout";
import EboardMemberSummary from './componets/EboardMemberSummary'
import Questions from './componets/Questions'
import Expansion from './componets/Expansion'
function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<BmcLayout/>}>
      <Route index element={<>
        
       <section id="home"><Home/></section>
      <section id="about-us"> <AboutUs/></section>
        </>}
        />
      
      <Route path="/eboard" element={<EboardMemberSummary/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path='/questions' element={<Questions/>}/>
      <Route path='/interested' element={<Interested/>}/>
      <Route path='/expansion' element={<Expansion/>}/>
      
      </Route>
    </Routes>
  </HashRouter>
}

export default App
