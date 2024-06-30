import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Classes from "./components/classes/Classes";
import Academics from "./components/academics/Academics";
import SchoolPolicies from "./components/schoolpolicies/SchoolPolicies";
import FeesAndAdmission from "./components/feeAndAdmission/FeesAndAdmission";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff&faculties" element={<CourseHome />} />
          <Route path="/OurSchool" element={<Classes />} />
          <Route path="/about" element={<About />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/School-Policies" element={<SchoolPolicies />} />
          <Route path="/fees-and-Admission" element={<FeesAndAdmission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
