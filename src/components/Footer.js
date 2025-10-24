import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import { SiSoundcloud, SiFlickr } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Access Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quickAccess.title')}</h3>
             <ul className="space-y-3">
              <li><Link to="/concerns-products" className="text-gray-300 hover:text-white transition duration-300">{t('footer.quickAccess.concernsProducts')}</Link></li>
              <li><Link to="/give-feedback" className="text-gray-300 hover:text-white transition duration-300">{t('footer.quickAccess.giveFeedback')}</Link></li>
              <li><Link to="/artist-model-list" className="text-gray-300 hover:text-white transition duration-300">{t('footer.quickAccess.artists')}</Link></li>
              <li><Link to="/quotation-request" className="text-gray-300 hover:text-white transition duration-300">{t('footer.quickAccess.quotation')}</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-white transition duration-300">{t('footer.quickAccess.blogs')}</Link></li>
              <li><Link to="/clients" className="text-gray-300 hover:text-white transition duration-300">{t('footer.quickAccess.clients')}</Link></li>
              <li><Link to="/ad-scope" className="text-gray-300 hover:text-white transition duration-300">{t('footer.quickAccess.adScope')}</Link></li>
            </ul>
          </div>

          {/* Know More Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.knowMore.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Link to="/career" className="text-gray-300 hover:text-white transition duration-300">{t('footer.knowMore.career')}</Link>
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded">{t('footer.knowMore.hiring')}</span>
              </li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">{t('footer.knowMore.about')}</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white transition duration-300">{t('footer.knowMore.community')}</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition duration-300">{t('footer.knowMore.privacy')}</Link></li>
              <li><Link to="/company" className="text-gray-300 hover:text-white transition duration-300">{t('footer.knowMore.company')}</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition duration-300">{t('footer.knowMore.terms')}</Link></li>
            </ul>
          </div>

          {/* Quick Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quickContact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+8801797-242610" className="text-gray-300 hover:text-white transition duration-300">+8801797-242610</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+8801939-229988" className="text-gray-300 hover:text-white transition duration-300">+8801939-229988</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+8801958-030254" className="text-gray-300 hover:text-white transition duration-300">+8801958-030254</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:info@agencypro.com" className="text-gray-300 hover:text-white transition duration-300">info@agencypro.com</a>
              </li>
              <li className="flex items-start mt-4">
                <span className="mr-2">🏢</span>
                <p className="text-gray-300">
                  {t('footer.quickContact.address')}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications and Download Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-gray-800 p-2 rounded">
              <img src="/images/basis-logo.png" alt="BASIS Member" className="h-8" />
              <p className="text-xs text-gray-400 mt-1">{t('footer.certifications.registeredMember')}</p>
            </div>
            <img src="/images/e-club-logo.png" alt="E-CLUB" className="h-10" />
            <img src="/images/e-cab-logo.png" alt="E-CAB" className="h-10" />
            <div className="bg-gray-800 p-2 rounded mt-4">
              <img src="/images/dmca-logo.png" alt="DMCA Protected" className="h-8" />
            </div>
          </div>

          <div className="flex flex-col md:items-end">
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="block">
                <img src="/images/pay-bill.png" alt="Pay Bill" className="h-10" />
              </button>
              <button className="block">
                <img src="/images/google-play.png" alt="Google Play" className="h-10" />
              </button>
              <button className="block">
                <img src="/images/windows.png" alt="Windows" className="h-10" />
              </button>
            </div>

            <div className="mt-4">
              <img src="/images/payment-methods.png" alt="Payment Methods" className="max-w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 font-medium">{t('footer.social.follow')}:</p>
            <div className="flex space-x-4 mt-3">
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SiSoundcloud size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SiFlickr size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
