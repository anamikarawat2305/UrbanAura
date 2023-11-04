import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import DemoPage from "./pages/demoPage";

const App = () => {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<LandingPage/>}/>
    <Route exact path="/demo"  element={<DemoPage/>}  />
  </Routes>
    </Router>
  );
};

export default App;
