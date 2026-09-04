import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Star, MapPin, MessageSquareText } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'properties', label: 'Properties' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <BrandLogo
              size="md"
              onClick={() => handleLinkClick('home')}
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#B45309] font-bold bg-amber-50/70'
                        : 'text-gray-700 hover:text-black hover:bg-gray-100/70'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#D97706] rounded-full shadow-[0_1px_4px_rgba(217,119,6,0.5)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Golden Consultation Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="header-consultation-btn"
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E5A910] text-[#111827] font-black text-sm uppercase tracking-wide border border-[#E5A910] hover:bg-[#111827] hover:text-[#E5A910] shadow-[0_4px_16px_rgba(229,169,16,0.3)] hover:shadow-[0_4px_20px_rgba(17,24,39,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-lg bg-black/10 group-hover:bg-[#E5A910]/20 flex items-center justify-center transition-colors">
                  <MessageSquareText className="w-3.5 h-3.5" />
                </div>
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenConsultation}
                className="p-2.5 rounded-xl bg-[#E5A910] text-gray-950 sm:hidden shadow-sm font-bold text-xs flex items-center gap-1.5"
                aria-label="Book Consultation"
              >
                <MessageSquareText className="w-4 h-4" />
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 hover:text-black hover:bg-gray-200 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] sm:top-[70px] z-40 bg-white/98 backdrop-blur-xl border-b border-gray-200 px-6 py-6 lg:hidden shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col gap-2 mb-6">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold text-left transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-[#B45309] border border-amber-200'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#D97706]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Mobile Location Quick Card */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Customer Rating</span>
                <span className="flex items-center gap-1 font-bold text-gray-900">
                  5.0 <Star className="w-3.5 h-3.5 text-[#D97706] fill-[#E5A910]" />
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <MapPin className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span className="line-clamp-1">{BRAND_INFO.address}</span>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#E5A910] text-gray-950 font-black text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#D97706] transition-colors cursor-pointer"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 px-4 rounded-xl bg-gray-900 text-white font-bold text-sm border border-gray-800 hover:bg-black transition-colors"
              >
                Go to Contact Page
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
