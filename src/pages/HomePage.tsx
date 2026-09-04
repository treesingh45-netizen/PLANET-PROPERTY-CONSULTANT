import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Key, Building2, TrendingUp, MessageSquare, CheckCircle, MessageSquareText } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO, PROPERTIES_DATA } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SignatureText } from '../components/SignatureText';
import { TrustRow } from '../components/TrustRow';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section id="home-hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/40 via-white to-white">
        {/* Subtle Background Pattern & Soft Gold Radial */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5A910] animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Karachi Property Consultancy
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs font-semibold text-gray-700">
              Block 11, Gulistan-e-Johar
            </span>
          </motion.div>

          {/* Large Heading: Your Property. Your Next Move. */}
          <div className="mb-4">
            <AnimatedHeading
              title="Your Property. Your Next Move."
              highlightWords={['Property.', 'Move.']}
              as="h1"
              size="hero"
              className="max-w-4xl"
            />
          </div>

          {/* Signature-style text: Property decisions made simpler. */}
          <div className="mb-6">
            <SignatureText
              text="Property decisions made simpler."
              size="lg"
              align="center"
            />
          </div>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10 font-body"
          >
            PLANET PROPERTY CONSULTANT helps buyers, sellers and property investors find practical real-estate opportunities and make confident property decisions in Karachi.
          </motion.p>

          {/* Buttons: Explore Properties & Talk to a Consultant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-explore-properties-btn"
              onClick={() => {
                onNavigate('properties');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-base uppercase tracking-wider border border-[#E5A910] shadow-[0_4px_25px_rgba(217,119,6,0.3)] hover:shadow-[0_6px_30px_rgba(217,119,6,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-talk-consultant-btn"
              onClick={() => onOpenConsultation('General Consultation')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-950 hover:text-[#B45309] font-bold text-base border border-gray-300 hover:border-[#D97706] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquareText className="w-4 h-4 text-[#D97706]" />
              <span>Talk to a Consultant</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. ANIMATED TRUST ROW */}
      <TrustRow />

      {/* 3. INTRODUCTION SECTION */}
      <section id="home-intro" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-[#D97706]" />
              <span>Our Philosophy</span>
            </div>

            <AnimatedHeading
              title="Property Guidance With a Clear Direction"
              highlightWords={['Clear', 'Direction']}
              as="h2"
              size="lg"
            />

            <div>
              <SignatureText
                text="A smarter way to move forward."
                size="md"
              />
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-body">
              Whether you are looking to buy, sell or explore property opportunities, we focus on understanding your requirements and helping you move toward the right decision.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-950">Grounded Local Insights:</strong> Deep knowledge of Block 11 Gulistan-e-Johar and surrounding Karachi property hubs.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-950">Client-First Transparency:</strong> Straightforward evaluations without rushed commitments.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D97706] hover:text-[#B45309] transition-colors group cursor-pointer"
              >
                <span>Read more about our approach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50 group">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                alt="Karachi Property Consultation"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-md flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#B45309] font-bold uppercase tracking-wider block">
                    PLANET PROPERTY CONSULTANT
                  </span>
                  <span className="text-sm font-bold text-gray-950">
                    Karachi Real Estate Solutions
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-950 block">Block 11</span>
                  <span className="text-xs text-gray-600 font-medium">Gulistan-e-Johar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section id="home-services-preview" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-2">
              Our Core Services
            </span>
            <AnimatedHeading
              title="Tailored Real Estate Services"
              highlightWords={['Services']}
              as="h2"
              size="lg"
            />
            <div className="mt-2">
              <SignatureText text="Solutions built around your goals." size="sm" align="center" />
            </div>
          </div>

          {/* 4 Animated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Buy Property */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center mb-5 transition-colors">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-950 mb-2 group-hover:text-[#D97706] transition-colors">
                  Buy Property
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-body">
                  Find suitable residential and commercial property opportunities.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Card 2: Sell Property */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center mb-5 transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-950 mb-2 group-hover:text-[#D97706] transition-colors">
                  Sell Property
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-body">
                  Present your property professionally and connect with potential buyers.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Card 3: Property Investment */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center mb-5 transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-950 mb-2 group-hover:text-[#D97706] transition-colors">
                  Property Investment
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-body">
                  Explore property opportunities based on your goals and requirements.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Card 4: Property Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center mb-5 transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-950 mb-2 group-hover:text-[#D97706] transition-colors">
                  Property Consultation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-body">
                  Get practical guidance before making an important property decision.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section id="home-final-cta" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-amber-50/50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-3">
            Take The Next Step
          </span>

          <AnimatedHeading
            title="Ready to Make Your Next Property Move?"
            highlightWords={['Property', 'Move?']}
            as="h2"
            size="xl"
            className="mb-4"
          />

          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto mb-8 font-body">
            Speak with <strong className="text-gray-950">PLANET PROPERTY CONSULTANT</strong> today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="home-cta-consult-btn"
              onClick={() => onOpenConsultation('General Property Consultation')}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-base uppercase tracking-wider border border-[#E5A910] shadow-[0_4px_25px_rgba(217,119,6,0.3)] hover:shadow-[0_6px_30px_rgba(217,119,6,0.45)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Book Property Consultation</span>
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-bold text-base border border-gray-300 hover:border-[#D97706] transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <span>Contact Details & Office</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
