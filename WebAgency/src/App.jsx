
import {Hero, Navbar, Services} from './components';
import './App.css'
import StarsCanvas from "./components/canvas/Stars";
import Work from "./components/work/Work";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";


const App = () => {



 return (
    
  
    <div className='relative z-0 bg-black'>


    
    <Navbar />
    <Hero />
    <Services />
    <Work />
    <About />
    <Testimonials />
    <Contact />
    <StarsCanvas />
    
    
    </div>

 )
}

export default App
