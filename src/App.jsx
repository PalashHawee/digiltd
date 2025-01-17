import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutSection from "./components/home/about/About";
import HappyClients from "./components/home/HappyClient";
import ContactUs from "./components/home/Contact";
// import MeetTheTeam from "./components/team/Team";
import WorkProcess from "./components/workProcess/WrokProcess";
import CommunicateForm from "./pages/contact/CommuicateForm";
import Communicate from "./pages/contact/Commuincate";
import MeetTheTeam from "./components/team/Team";
import Services from "./components/services/Services";
import Career from "./components/careers/Careers";
import AgricultureLandingPage from "./components/agriculture/Agriculture";
import EducationLandingPage from "./components/education/Education";
import EngineeringLandingPage from "./components/engineering/Engineering";

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
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/agriculture" element={<AgricultureLandingPage />} />
        <Route path="/education" element={<EducationLandingPage />} />
        <Route path="/engineering" element={<EngineeringLandingPage />} />
        <Route path="/contact" element={<Communicate />} />
      </Routes>
    </Router>
  );
};

export default App;
