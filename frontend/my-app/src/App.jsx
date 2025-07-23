import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CardGrid from "./Components/CardGrid";
import Faq from "./Components/Faq";
import FaqItem from "./Components/FaqItem";
import Contactus from "./Components/Contactus";
import MessageBox from "./Components/Messagebox";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Section from "./Components/Section";
import BlogPage from "./Components/BlogPage";  // ✅ Blog list page
import BlogDetail from "./Components/BlogDetail";  // ✅ Individual blog page
import ContactPage from "./Components/ContactPage";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import CycleTracker from "./Components/Calendar.jsx";
import UserProfile from "./Components/UserProfile";
import Notification from "./Components/Notification";
import ProductTracker from "./Components/ProductTracker"; 

// Importing Card Detail Pages
import WhoWeAre from "./Components/pages/WhoWeAre.jsx";
import OurAssociates from "./Components/pages/OurAssociates.jsx";
import UnderstandingMenstruation from "./Components/pages/UnderstandingMenstruation.jsx";
import MenstrualHealth from "./Components/pages/MenstrualHealth.jsx";
import HealthAndFood from "./Components/pages/HealthAndFood.jsx";
import CommunitySupport from "./Components/pages/CommunitySupport.jsx";
import CulturalInsights from "./Components/pages/CulturalInsights.jsx";
import TraditionalPractices from "./Components/pages/TraditionalPractices.jsx";
import EmpoweringWomen from "./Components/pages/EmpoweringWomen.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to Ritu Veda</h1>
              <h2>"Knowledge of the Menstrual Cycle"</h2>
              <h1 style={{ textAlign: "center", color: "#b3002d" }}>
                Welcome to Our Platform
              </h1>
              <CardGrid />
              <Faq />
              <FaqItem />
              <MessageBox />
              <Notification />
              <Footer />
            </>
          }
        />
        
        {/* ✅ Blog Routes */}
        <Route path="/Blog" element={<BlogPage />} />  {/* Blog listing page */}
        <Route path="/Blog/:id" element={<BlogDetail />} />  {/* Individual blog post */}

        {/* Existing Routes */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/User-profile" element={<UserProfile />} />
        <Route path="/ContactUs" element={<ContactPage />} />
        <Route path="/calendar" element={<CycleTracker />} />
        <Route path="/product-tracker" element={<ProductTracker />} /> {/* ✅ New Route */}

        {/* New Card Detail Pages */}
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-associates" element={<OurAssociates />} />
        <Route path="/understanding-menstruation" element={<UnderstandingMenstruation />} />
        <Route path="/menstrual-health" element={<MenstrualHealth />} />
        <Route path="/health-and-food" element={<HealthAndFood />} />
        <Route path="/community-support" element={<CommunitySupport />} />
        <Route path="/cultural-insights" element={<CulturalInsights />} />
        <Route path="/traditional-practices" element={<TraditionalPractices />} />
        <Route path="/empowering-women" element={<EmpoweringWomen />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
