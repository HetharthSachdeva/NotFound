import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/common/header/Header"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import SignupPage from "./pages/signup/Signup"
import Footer from "./components/common/footer/Footer"
import Dashboard from "./pages/dashboard/Dashboard" 

function App() {
  const location = useLocation();

  return (
    <>
      {/* Render Header only on the Home page */}
      {location.pathname === '/' && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<CourseHome/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/journal' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

      <Footer />
    </>
  )
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
