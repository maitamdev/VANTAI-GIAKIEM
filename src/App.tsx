import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ZaloFloat from './components/ZaloFloat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RoutesPage from './pages/RoutesPage';
import PricingPage from './pages/PricingPage';
import ProcessPage from './pages/ProcessPage';
import FleetPage from './pages/FleetPage';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/dich-vu" element={<ServicesPage />} />
          <Route path="/tuyen-van-chuyen" element={<RoutesPage />} />
          <Route path="/bang-gia" element={<PricingPage />} />
          <Route path="/quy-trinh" element={<ProcessPage />} />
          <Route path="/doi-xe" element={<FleetPage />} />
          <Route path="/tin-tuc" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ZaloFloat />
    </div>
  );
}
