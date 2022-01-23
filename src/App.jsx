import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Dashboard from './Dashboard';
import SignInSide from "./SignInSide";
import Home from "./projectPresent/Home"
import About from "./projectPresent/About"
import Team from "./projectPresent/Team"
import HistoryTemp from "./HistoryTemp";
import HistoryHum from "./HistoryHum";

const App = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/HistoryT" element={<HistoryTemp />} />
        <Route path="/Dashboard/HistoryH" element={<HistoryHum />} />

      </Routes>
    </Router>
    )
}

export default App
