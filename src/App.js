import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
<<<<<<< HEAD
import ConcernsProducts from './pages/ConcernsProducts';
import GiveFeedback from './pages/GiveFeedback';
import ArtistModelList from './pages/ArtistModelList';
import QuotationRequest from './pages/QuotationRequest';
import Blogs from './pages/Blogs';
import SEOServiceDetails from './pages/SEOServiceDetails';
import VideoEditingDetails from './pages/VideoEditingDetails';
import WebDevelopmentDetails from './pages/WebDevelopmentDetails';
import SocialMediaDetails from './pages/SocialMediaDetails';
import Career from './pages/Career';
import Community from './pages/Community';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CompanyProfile from './pages/CompanyProfile';
import TermsCondition from './pages/TermsCondition';
=======
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
              <Route path="/concerns-products" element={<ConcernsProducts />} />
              <Route path="/give-feedback" element={<GiveFeedback />} />
              <Route path="/artist-model-list" element={<ArtistModelList />} />
              <Route path="/quotation-request" element={<QuotationRequest />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/services/seo" element={<SEOServiceDetails />} />
              <Route path="/services/video-editing" element={<VideoEditingDetails />} />
              <Route path="/services/web-development" element={<WebDevelopmentDetails />} />
              <Route path="/services/social-media" element={<SocialMediaDetails />} />
              <Route path="/career" element={<Career />} />
              <Route path="/community" element={<Community />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/company" element={<CompanyProfile />} />
              <Route path="/terms" element={<TermsCondition />} />
=======
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
