 import { useState } from "react";
 import './index.css';
 import Navbar from "./components/navbar";
import EyeTrackingComponent from "./components/eyeTracker";
import Home from "./components/home";
import Projects from "./components/projects/Projects";


function App() {

  return (
    <div>
    <Navbar/>
    <Home />
    <Projects />
    {/* <EyeTrackingComponent /> */}
 
    </div>
  )
}

export default App
