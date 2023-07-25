import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContactUs from "./pages/GlobalPages/ContactUs/ContactUs";
import AboutUs from "./pages/GlobalPages/AboutUs/AboutUs";
import ErrorPage from "./pages/GlobalPages/404page/404ErrorPage";
import NgoMdoule from "./pages/NGOmodule/NgoMdoule";
import Navbar from "./pages/GlobalPages/Navbar/Navbar";
import DonationLandingPage from "./pages/DonorModule/DonationLandingPage/DonationLandingPage";
import DonorFormTimeline from "./pages/DonorModule/DonorFormTimeline/DonorFormTimeline";
import DonationRegistration from "./pages/DonorModule/DonationRegistrationForm/DonationRegistration";
import DonationFormContext from "./pages/DonorModule/DonationRegistrationForm/DonationFormContext/DonationFormContext";
import DonationDashboardContext from "./pages/DonorModule/DonationDashboard/DonatationDshboardContext/DonationDashboardContext";
import DonationDashbaord from "./pages/DonorModule/DonationDashboard/DonationDashbaord";
import Footer from "./pages/GlobalPages/Footer/Footer";
import NgoTimeline from "./pages/NGOmodule/AddNgoForm/NgoTimeline/NgoTimeline";
import Admin from "./pages/AdminDashboard/Admin";
import DonationSignupForm from "./pages/DonorModule/DonationSignInForm/DonationSignupForm";

// import Navbar from "./pages/GlobalPages/Navbar/Navbar";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Router>
      {window.location.pathname !== ("/admin/Dashboard") && window.location.pathname !== ("/NgoForm")  ? <Navbar />: null} 
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ngo" element={<NgoMdoule />} />
          <Route path="/donor" element={<DonationLandingPage />} />
          <Route path="/donor/timeline" element={<DonorFormTimeline />} />
          <Route
            path="/donor/timeline/reg"
            exact
            element={
              <DonationFormContext>
                <DonationRegistration />
              </DonationFormContext>
            }
          />
          <Route
            path="/donor/timeline/reg/dash"
            exact
            element={
              <DonationDashboardContext>
                <DonationDashbaord />
              </DonationDashboardContext>
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/ngo/timeline" element={<NgoTimeline/>} />
          <Route path="/admin/Dashboard" element={<Admin/>} />
          <Route path="/sign" element={ <DonationSignupForm/>} />
        
          
          
        </Routes>
        {window.location.pathname !== ("/donor/timeline/reg") && window.location.pathname !== ("/NgoForm") && window.location.pathname !== ("/admin")  ? <Footer />: null} 

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
