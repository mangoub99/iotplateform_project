import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Dashboard from './Dashboard';
import SignInSide from "./SignInSide";
const App = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    )
}

export default App
