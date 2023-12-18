import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import DemoPage from "./pages/demoPage";
import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";


const App = () => {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<LandingPage/>}/>
    <Route exact path="/about" element={<Features/>}/>
    <Route exact path="/testimonials" element={ <Testimonial />}/>
    <Route exact path="/home" element={<LandingPage/>}/>
    <Route exact path="/features" element={<FeaturesSecond/>}/>
    <Route exact path="/demo"  element={<DemoPage/>}  />
  </Routes>
    </Router>
  );
};

export default App;
