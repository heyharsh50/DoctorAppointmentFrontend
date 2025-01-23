import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecialtySection from './components/SpecialtySection';
import FeaturedDoctors from './components/FeaturedDoctors';
import HomeContact from './components/HomeContact';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Contact from './components/Contact';
import About from './components/About';
import DoctorProfile from './components/DoctorProfile';
import FindDoctors from './components/FindDoctors';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="pt-16">
              <Hero />
              <SpecialtySection />
              <FeaturedDoctors />
              <HomeContact />
            </main>
          } />
          <Route path="/doctors" element={<FindDoctors />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;