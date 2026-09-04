import React from 'react';
import { MapPin, Star, Clock, MessageSquare } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'properties', label: 'Properties' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="relative bg-gray-50 border-t border-gray-200 text-gray-600 overflow-hidden">
      {/* Subtle Golden Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#E5A910] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" onClick={() => handleNav('home')} />
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed pt-2">
              Professional property consultancy helping clients explore residential, commercial and investment opportunities in Karachi with clear direction and transparent guidance.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-1 text-[#E5A910]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E5A910]" />
                ))}
              </div>
              <div className="text-xs">
                <span className="text-gray-950 font-bold">5.0 ★</span>
                <span className="text-gray-600 ml-1.5 font-medium">Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest border-l-2 border-[#D97706] pl-3">
              Explore Pages
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-sm text-gray-600 hover:text-[#D97706] hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Office (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest border-l-2 border-[#D97706] pl-3">
              Location & Hours
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-medium">Karachi Office</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">
                    {BRAND_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-medium">Office Timings</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">
                    {BRAND_INFO.hours}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleNav('contact')}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-50 hover:bg-[#E5A910] text-gray-950 font-bold text-xs uppercase tracking-wider border border-amber-200 hover:border-[#E5A910] shadow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#D97706] group-hover:text-gray-950" />
                <span>View Contact Details & Phone</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p className="text-center sm:text-left">
            © 2026 <strong className="text-gray-950">PLANET PROPERTY CONSULTANT</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="hover:text-gray-900">Karachi, Pakistan</span>
            <span>•</span>
            <span className="hover:text-gray-900">Real Estate Consultancy</span>
            <span>•</span>
            <button
              onClick={onOpenConsultation}
              className="text-[#D97706] hover:underline font-bold cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
