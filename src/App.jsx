import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/LandingPage/Homepage";
import ServicePage from "./components/ServicesPage/ServicePage";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import HireExpert from "./components/HireExpert/HireExpert";
import ResourcesPage from "./components/ResourcesPage/ResourcesPage";
import Navbar from "./components/utilities/Navbar";
import Footer from "./components/utilities/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/hire-expert" element={<HireExpert />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
