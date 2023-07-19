import './App.css';
import  {    useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from './pages/LandingPage/LandingPage';
import ContactUs from './pages/GlobalPages/ContactUs/ContactUs';
import AboutUs from './pages/GlobalPages/AboutUs/AboutUs';
import ErrorPage from './pages/GlobalPages/404page/404ErrorPage';
import NgoMdoule from './pages/NGOmodule/NgoMdoule';

// import Navbar from "./pages/GlobalPages/Navbar/Navbar";
function App() { 
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
   

  return (
    <div className="">

      <Router>
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/ngo" element={<NgoMdoule/>} />
          
        
        </Routes>
                {/* {window.location.pathname !== ("/DonorLandingPage/timeline/signup/reg") && window.location.pathname !== ("/NgoForm")  ? <Footer />: null}  */}
        
                
    
      </Router>
 </div>
  )
}

export default App
