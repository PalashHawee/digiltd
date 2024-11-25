import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutSection from "./components/home/about/About";
import HappyClients from "./components/home/HappyClient";
import ContactUs from "./components/home/Contact";
// import MeetTheTeam from "./components/team/Team";
import WorkProcess from "./components/workProcess/WrokProcess";
import CommunicateForm from "./pages/contact/CommuicateForm";
import Communicate from "./pages/contact/Commuincate";
import MeetTheTeam from "./components/team/Team";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap all routes with Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/farzana" element={<MeetTheTeam />} />
        <Route path="/work-process" element={<WorkProcess />} />

        <Route path="/contact" element={<Communicate />} />
      </Routes>
    </Router>
  );
};

export default App;
