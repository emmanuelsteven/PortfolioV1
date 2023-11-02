 import './index.css';
 import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import ContactUs from './components/form';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';



function App() {

  return (
    <div>
    <Navbar/>
    <Home />
    <Projects />
    <About />
    <Skills />
    <ContactUs />
    <Footer />
   
    </div>
  )
}

export default App
