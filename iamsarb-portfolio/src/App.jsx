import { useState } from 'react'
import { Button } from '@mui/material';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Navbar from './Components/Navbar';


function App() {

  return (
    <BrowserRouter>
       <Navbar />
    <div className="App">
        <Routes>
              <Route exact path = "/"   element = {<Home />}>   </Route>
              <Route  path = "/about"   element = {<About />}>   </Route>
              <Route  path = "/contact"   element = {<Contact />}>   </Route>
              <Route  path = "/skills"   element = {<Skills />}>   </Route>
              <Route  path = "/work"   element = {<Work />}>   </Route> 
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
