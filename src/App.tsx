import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PageId } from './types';
import { BRAND_INFO } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PropertyChatbot } from './components/PropertyChatbot';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('General Consultation');
  const [consultationPropertyTitle, setConsultationPropertyTitle] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'properties', 'why-us', 'faq', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page Title and Meta description dynamically
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'PLANET PROPERTY CONSULTANT | Real Estate Consultancy Karachi',
      about: 'About Us | PLANET PROPERTY CONSULTANT Karachi',
      services: 'Our Services | PLANET PROPERTY CONSULTANT Karachi',
      properties: 'Explore Properties | PLANET PROPERTY CONSULTANT Karachi',
      'why-us': 'Why Choose Us | PLANET PROPERTY CONSULTANT Karachi',
      faq: 'Frequently Asked Questions | PLANET PROPERTY CONSULTANT',
      contact: 'Contact Us | PLANET PROPERTY CONSULTANT Karachi'
    };

    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage]);

  // Scroll to Top Listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (topic: string = 'General Consultation', propertyTitle?: string) => {
    setConsultationTopic(topic);
    setConsultationPropertyTitle(propertyTitle);
    setIsConsultationOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Office Visit / About')}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case 'properties':
        return (
          <PropertiesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case 'why-us':
        return (
          <WhyUsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Why Us Inquiry')}
          />
        );
      case 'faq':
        return (
          <FaqPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('FAQ Follow-up')}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#E5A910] selection:text-gray-950">
      {/* 1. Global Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation('General Consultation')}
      />

      {/* 2. Main Animated Page Content */}
      <main className="flex-1 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation('Footer Consultation')}
      />

      {/* 4. Consultation & Property Inquiry Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialTopic={consultationTopic}
        initialPropertyTitle={consultationPropertyTitle}
      />

      {/* 5. Intelligent Property Advisor Chatbot on the Right Side */}
      <PropertyChatbot
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 6. Scroll to Top Button (Left side of chatbot) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-30 p-3 rounded-full bg-white text-gray-900 border border-gray-300 hover:bg-[#E5A910] hover:text-gray-950 shadow-lg transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
