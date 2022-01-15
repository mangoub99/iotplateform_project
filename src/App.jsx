import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Dashboard from './Dashboard';
import SignInSide from "./SignInSide";
import Home from "./projectPresent/Home"
import About from "./projectPresent/About"
import Team from "./projectPresent/Team"
import ContactUs from "./projectPresent/ContactUs"
const App = () => {
    return (
    <Router>
      <Routes>
        <Route path="/Overview" element={<Home />} />
        <Route path="/Overview/About" element={<About />} />
        <Route path="/Overview/Team" element={<Team />} />
        <Route path="/Overview/ContactUs" element={<ContactUs />} />
        <Route path="/" element={<SignInSide />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    )
}

export default App
