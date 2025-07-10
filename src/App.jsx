import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import PopularJobs from "./Components/PopularJobs";
import DreamJobSection from "./Components/DreamJob";
import JobList from "./Components/JobList"; // ✅ fixed import
import FooterSection from "./Components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Explore from "./Pages/Explore";
import PostJob from "./Pages/PostJob";
import ForgotPassword from './Pages/ForgotPassword';

const Home = () => (
  <>
    <Hero />
    <PopularJobs />
    <DreamJobSection />
    <JobList /> {/* ✅ fixed component name */}
    <FooterSection />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/jobs" element={<JobList />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
