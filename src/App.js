import "./App.css";
import { useEffect } from "react";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import Gallery from "./Components/Gallery";
import Products from "./Components/Products";
import { ToastContainer } from "react-toastify";
import Contact from "./Components/Contact";
import INFO from "./Components/INFO";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import SmartSwitchSection from "./Components/SmartSwitchSection";
import FeaturesSection from "./Components/FeaturesSection";
import HowItWorks from "./Components/HowItWorks";
import Video from "./Components/Video";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutCompany from "./Components/AboutCompany";
import { Privacypolicy } from "./Components/Privacypolicy";

Modal.setAppElement("#root");

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Toast notifications */}
        <ToastContainer />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <FeaturesSection />
                <SmartSwitchSection />
                <Video />
                <HowItWorks />
                <Products />
                <Gallery />
                <Contact />
                <INFO />
              </>
            }
          />

          <Route path="/aboutcompany" element={<AboutCompany />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
