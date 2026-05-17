import { Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetails from './pages/ServiceDetailsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar sits outside the Routes so it renders on EVERY page */}
      <Navbar />
      <ScrollToTop />
      {/* Routes handle which page content to show based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/services" element={<ServicesPage />} />
        {/* Added the dynamic path for Service Details */}
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;