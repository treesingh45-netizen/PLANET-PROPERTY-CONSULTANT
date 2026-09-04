import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageSquare, ShieldCheck, Users, Compass, Clock, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { WHY_US_FEATURES, BRAND_INFO } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SignatureText } from '../components/SignatureText';

interface WhyUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'map-pin':
        return MapPin;
      case 'message-square':
        return MessageSquare;
      case 'shield-check':
        return ShieldCheck;
      case 'users':
        return Users;
      case 'compass':
        return Compass;
      case 'clock':
        return Clock;
      default:
        return ShieldCheck;
    }
  };

  const statementWords = "Your property journey deserves a professional direction.".split(" ");

  return (
    <div className="pt-24 sm:pt-28 pb-16 overflow-hidden bg-white">
      {/* 1. HERO */}
      <section id="why-us-hero" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold uppercase tracking-widest text-[#B45309] mb-6 shadow-sm"
        >
          <span>Distinction & Value</span>
        </motion.div>

        <AnimatedHeading
          title="Why PLANET PROPERTY CONSULTANT?"
          highlightWords={['PLANET', 'PROPERTY', 'CONSULTANT?']}
          as="h1"
          size="xl"
          className="mb-4"
        />

        <div className="mb-6">
          <SignatureText
            text="Confidence starts with the right guidance."
            size="lg"
            align="center"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-body"
        >
          We provide dedicated real estate consultancy rooted in transparent local market knowledge, structured advisory processes, and client-first priorities.
        </motion.p>
      </section>

      {/* 2. SIX ANIMATED FEATURE CARDS */}
      <section id="why-us-features-grid" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_FEATURES.map((feature, idx) => {
            const Icon = getFeatureIcon(feature.iconName);

            return (
              <motion.div
                key={idx}
                id={`feature-card-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center mb-6 transition-all group-hover:scale-105 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-gray-950 mb-3 group-hover:text-[#D97706] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#D97706]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Consultant Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. PREMIUM RATING SECTION (5.0 ★) */}
      <section id="why-us-rating-section" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-14 rounded-3xl bg-white border border-amber-300 relative overflow-hidden shadow-xl"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#E5A910] shadow-sm"
                >
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-[#E5A910]" />
                </div>
              ))}
            </div>

            <div className="font-display text-5xl sm:text-7xl font-black text-gray-950 mb-2 tracking-tight">
              5.0 <span className="text-[#D97706]">★</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-gray-950 uppercase tracking-wider mb-2">
              Customer Rating
            </h3>

            <p className="text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed font-body">
              Consistently recognized by clients for straightforward communication, local Karachi property expertise, and dedicated advisory.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-gray-700 border-t border-gray-100 pt-6 font-medium">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D97706]" />
                Block 11, Gulistan-e-Johar
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                Verified Property Practice
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ANIMATED STATEMENT (Word-by-word reveal on scroll) */}
      <section id="why-us-statement" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center bg-white">
        <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-4">
          Our Driving Motto
        </span>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 leading-tight tracking-tight max-w-4xl mx-auto mb-10">
          “{statementWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`inline-block mr-[0.25em] ${
                word.toLowerCase().includes('professional') || word.toLowerCase().includes('direction')
                  ? 'text-[#D97706]'
                  : 'text-gray-950'
              }`}
            >
              {word}
            </motion.span>
          ))}”
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider border border-[#E5A910] shadow-[0_4px_20px_rgba(217,119,6,0.3)] transition-all cursor-pointer"
          >
            Start Your Property Conversation
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-bold text-sm border border-gray-300 text-center shadow-sm flex items-center justify-center gap-2"
          >
            <span>Visit Contact Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
