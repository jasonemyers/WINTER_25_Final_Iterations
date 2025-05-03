// src/App.js

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // routing components
import Home from './pages/home';                   // home page
import Doctors from './pages/doctors';             // doctors list page
import About from './pages/about';                 // about page
import Contact from './pages/contact';             // contact page
import DoctorsDetails from './pages/doctorsDetails'; // doctor profile page
import Category from './pages/category';           // category-specific list
import SignIn from './pages/sign-in';              // user login page
import SignUp from './pages/sign-up';              // user signup page
import SignInDoctors from "./pages/doctor-sign-in"; // doctor login page
import SignUpDoctors from "./pages/doctor-sign-up"; // doctor signup page
import DoctorsList from './pages/playground';      // playground/testing page
import './userdetection.js';                       // user detection script
import Dashboard from './pages/dashboard';         // user dashboard
import SignOut from './pages/sign-out';            // sign-out page
import './index.css';                              // base styles
import './main.css';                               // main styles
import './normalize.css';                          // CSS reset

function App() {
  return (
    <Router>                                       {/* wrap app in router */}
      <div className="App">                       {/* main container */}
        <Routes>                                  {/* define routes */}
          <Route path="/" element={<Home />} />   {/* home route */}
          <Route path="/doctorsDetails/:documentId" element={<DoctorsDetails />} /> {/* doctor profile */}
          <Route path="/category/:id" element={<Category />} /> {/* category filter */}
          <Route path="/about" element={<About />} /> {/* about page */}
          <Route path="/contact" element={<Contact />} /> {/* contact page */}
          <Route path="/sign-in" element={<SignIn />} /> {/* user login */}
          <Route path="/sign-up" element={<SignUp />} /> {/* user signup */}
          <Route path="/doctors" element={<Doctors />} /> {/* doctors list */}
          <Route path="/doctors-sign-in" element={<SignInDoctors />} /> {/* doctor login */}
          <Route path="/doctors-sign-up" element={<SignUpDoctors />} /> {/* doctor signup */}
          <Route path="/playground" element={<DoctorsList />} /> {/* playground/testing */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* user dashboard */}
          <Route path="/sign-out" element={<SignOut />} /> {/* logout route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // export main component
