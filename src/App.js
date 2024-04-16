 import React from 'react'
 import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Tamplates/Home';
import About from './Components/Tamplates/About';
import Whycloudverse from './Components/Tamplates/Whycloudverse';
import PlatformOverview from './Components/Tamplates/PlatformOverview';

 
 export default function App() {
   return (
    <> 
      <Router> 
      <Navbar/>
                <Routes> 
                  <Route
                      exact
                      path="/"
                      element={<Home />}
                  />
  
                  <Route
                  path="/about"
                  element={<About />}
                  />    

                  <Route
                  path="/why-cloudverse"
                  element={<Whycloudverse />}
                  />   

                  <Route
                  path="/platform-overview"
                  element={<PlatformOverview />}
                  />   

                  </Routes>                  
            </Router>
 

    </>
   )
 }
 