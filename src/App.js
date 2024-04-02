import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import DemoPage from "./pages/demoPage";
import GeneratePage from "./pages/generatePage";
import GenerateOutput from "./pages/generateOutput"; 

const App = () => {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<LandingPage/>}/>
    <Route exact path="/demo"  element={<DemoPage/>}  />
    <Route exact path="/generate"  element={<GeneratePage/>}  />
    {/* <Route exact path="/output"  element={<GenerateOutput/>}  /> */}
  </Routes>
    </Router>
  );
};

export default App;
