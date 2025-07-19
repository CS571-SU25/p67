import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Eboard from './componets/Eboard'
import Events from './componets/Events'
import Interested from './componets/Interested'
import AboutUs from './componets/Aboutus'
import Home from './componets/Home'
import BmcLayout from "./structural/BmcLayout";
function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<BmcLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/eboard" element={<Eboard/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path='/interested' element={<Interested/>}></Route>
      </Route>
    </Routes>
  </HashRouter>
}

export default App
