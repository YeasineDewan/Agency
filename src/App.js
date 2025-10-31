import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Route components (lazy-loaded for code splitting)
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const ConcernsProducts = lazy(() => import('./pages/ConcernsProducts'));
const GiveFeedback = lazy(() => import('./pages/GiveFeedback'));
const ArtistModelList = lazy(() => import('./pages/ArtistModelList'));
const QuotationRequest = lazy(() => import('./pages/QuotationRequest'));
const Blogs = lazy(() => import('./pages/Blogs'));
const SEOServiceDetails = lazy(() => import('./pages/SEOServiceDetails'));
const VideoEditingDetails = lazy(() => import('./pages/VideoEditingDetails'));
const WebDevelopmentDetails = lazy(() => import('./pages/WebDevelopmentDetails'));
const SocialMediaDetails = lazy(() => import('./pages/SocialMediaDetails'));
const AppDevelopmentDetails = lazy(() => import('./pages/AppDevelopmentDetails'));
const PhotoEditingDetails = lazy(() => import('./pages/PhotoEditingDetails'));
const Career = lazy(() => import('./pages/Career'));
const Community = lazy(() => import('./pages/Community'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CompanyProfile = lazy(() => import('./pages/CompanyProfile'));
const TermsCondition = lazy(() => import('./pages/TermsCondition'));
const ApplyWebDeveloperLaravel = lazy(() => import('./pages/ApplyWebDeveloperLaravel'));
const ApplyWebDeveloperMERN = lazy(() => import('./pages/ApplyWebDeveloperMERN'));
const ApplySEOAnalyst = lazy(() => import('./pages/ApplySEOAnalyst'));
const ApplySEOExpert = lazy(() => import('./pages/ApplySEOExpert'));
const ApplyContentWriter = lazy(() => import('./pages/ApplyContentWriter'));
const ApplyContentCreator = lazy(() => import('./pages/ApplyContentCreator'));
const ApplyGeneral = lazy(() => import('./pages/ApplyGeneral'));
const AdScopeTool = lazy(() => import('./pages/AdScopeTool'));
const Clients = lazy(() => import('./pages/Clients'));
const ClientLanding = lazy(() => import('./pages/ClientLanding'));
const ClientLogin = lazy(() => import('./pages/ClientLogin'));
const ClientRegister = lazy(() => import('./pages/ClientRegister'));
const ClientDashboard = lazy(() => import('./pages/ClientDashboard'));

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <main id="main-content" className="flex-grow pt-20">
            <Suspense fallback={<div className="p-6">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/concerns-products" element={<ConcernsProducts />} />
              <Route path="/give-feedback" element={<GiveFeedback />} />
              <Route path="/artist-model-list" element={<ArtistModelList />} />
              <Route path="/quotation-request" element={<QuotationRequest />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/services/seo" element={<SEOServiceDetails />} />
              <Route path="/services/video-editing" element={<VideoEditingDetails />} />
              <Route path="/services/web-development" element={<WebDevelopmentDetails />} />
              <Route path="/services/social-media" element={<SocialMediaDetails />} />
              <Route path="/services/app-development" element={<AppDevelopmentDetails />} />
              <Route path="/services/photo-editing" element={<PhotoEditingDetails />} />
              <Route path="/career" element={<Career />} />
              <Route path="/apply/web-developer-laravel" element={<ApplyWebDeveloperLaravel />} />
              <Route path="/apply/web-developer-mern" element={<ApplyWebDeveloperMERN />} />
              <Route path="/apply/seo-analyst" element={<ApplySEOAnalyst />} />
              <Route path="/apply/seo-expert" element={<ApplySEOExpert />} />
              <Route path="/apply/content-writer" element={<ApplyContentWriter />} />
              <Route path="/apply/content-creator" element={<ApplyContentCreator />} />
              <Route path="/apply/general" element={<ApplyGeneral />} />
              <Route path="/tools/ad-scope" element={<AdScopeTool />} />
              <Route path="/community" element={<Community />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/company" element={<CompanyProfile />} />
              <Route path="/terms" element={<TermsCondition />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/client-portal" element={<ClientLanding />} />
              <Route path="/client-login" element={<ClientLogin />} />
              <Route path="/client-register" element={<ClientRegister />} />
              <Route path="/client-dashboard" element={<ClientDashboard />} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;