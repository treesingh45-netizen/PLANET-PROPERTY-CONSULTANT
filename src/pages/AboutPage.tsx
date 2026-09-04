import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Search, ShieldCheck, ArrowRight, CheckCircle2, Building, Star, Clock } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SignatureText } from '../components/SignatureText';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const approachSteps = [
    {
      number: '01',
      title: 'Understand',
      tagline: 'Listening to your unique requirements',
      description: 'We first understand what you need.',
      subtext: 'Every buyer, seller and investor has distinctive financial parameters, spatial needs, and time horizons. We take the time to evaluate your exact criteria before presenting options.',
      icon: Search
    },
    {
      number: '02',
      title: 'Guide',
      tagline: 'Objective, grounded evaluation',
      description: 'We help you evaluate suitable options.',
      subtext: 'Navigating property in Karachi requires local ground reality checks. We assess locations, market values, and documentation to protect your best interests.',
      icon: Compass
    },
    {
      number: '03',
      title: 'Move Forward',
      tagline: 'Clarity and confidence at every step',
      description: 'We help you take the next step with greater confidence.',
      subtext: 'From verified negotiations to clear documentation and transfer processes, we support your journey so you make informed, stress-free decisions.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 overflow-hidden bg-white">
      {/* 1. ABOUT HERO */}
      <section id="about-hero" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold uppercase tracking-widest text-[#B45309] mb-6 shadow-sm"
          >
            <Building className="w-3.5 h-3.5" />
            <span>Karachi Real Estate Advisory</span>
          </motion.div>

          <AnimatedHeading
            title="About PLANET PROPERTY CONSULTANT"
            highlightWords={['PLANET', 'PROPERTY', 'CONSULTANT']}
            as="h1"
            size="xl"
            className="mb-4"
          />

          <div className="mb-6">
            <SignatureText
              text="Built around better property decisions."
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
            PLANET PROPERTY CONSULTANT is a local property consultancy based in Gulistan-e-Johar, Karachi, helping clients navigate residential, commercial and investment property opportunities.
          </motion.p>
        </div>

        {/* Hero Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 rounded-2xl overflow-hidden border border-gray-200 relative shadow-xl bg-gray-50"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="PLANET PROPERTY CONSULTANT Karachi"
            className="w-full h-[320px] sm:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 p-4 sm:p-6 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-md">
            <div>
              <div className="text-xs text-[#B45309] font-bold tracking-widest uppercase mb-1">
                Consultancy Location
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-950">
                Block 11, Gulistan-e-Johar, Karachi
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                Providing specialized property advisory across Karachi's key sectors
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-950">5.0 ★ Rated</span>
              <div className="w-2 h-2 rounded-full bg-[#E5A910]" />
              <span className="text-xs text-gray-600 font-medium">Trusted Local Advisory</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. OUR APPROACH */}
      <section id="about-approach" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-2">
              Our Methodology
            </span>
            <AnimatedHeading
              title="Simple Advice. Clear Direction."
              highlightWords={['Simple', 'Clear', 'Direction.']}
              as="h2"
              size="lg"
            />
            <div className="mt-2">
              <SignatureText text="A structured, transparent framework." size="sm" align="center" />
            </div>
          </div>

          {/* 3 Animated Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  id={`approach-step-${step.number}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-4xl font-black text-gray-200 group-hover:text-[#D97706]/40 transition-colors">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-gray-950 mb-2 group-hover:text-[#D97706] transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-base font-semibold text-gray-800 mb-3">
                      {step.description}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed font-body">
                      {step.subtext}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#D97706]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{step.tagline}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LOCAL EXPERTISE & MAP SECTION */}
      <section id="about-local-expertise" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              <span>Gulistan-e-Johar & Karachi Property</span>
            </div>

            <AnimatedHeading
              title="Based in Karachi"
              highlightWords={['Karachi']}
              as="h2"
              size="lg"
            />

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-body">
              Our office is located in Block 11, Gulistan-e-Johar, Karachi, giving us a strong connection with the local property market and surrounding communities.
            </p>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-gray-950 uppercase tracking-wider text-[#B45309]">
                Office Coordinates & Access
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span className="font-medium">{BRAND_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Timings: <strong className="text-gray-950">{BRAND_INFO.hours}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Star className="w-4 h-4 text-[#D97706] shrink-0 fill-[#E5A910]" />
                  <span className="font-bold text-gray-950">5.0 ★ Customer Satisfaction</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BRAND_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D97706] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                Schedule Office Visit
              </button>
            </div>
          </motion.div>

          {/* Right Map Preview Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-xl h-[380px] sm:h-[440px]">
              <iframe
                title="PLANET PROPERTY CONSULTANT Karachi Map"
                src={BRAND_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300 text-left shadow-md">
                <div className="text-xs font-bold text-gray-950 uppercase">Planet Property Consultant</div>
                <div className="text-[11px] text-gray-600 font-medium">Block 11, Gulistan-e-Johar, Karachi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. BRAND STATEMENT */}
      <section id="about-brand-statement" className="py-24 bg-amber-50/40 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-14 rounded-3xl bg-white border border-gray-200 shadow-xl relative"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] block mb-4">
              Core Principle
            </span>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 leading-tight tracking-tight mb-6">
              “Every property decision deserves a <span className="text-[#D97706] underline decoration-[#E5A910]/50 decoration-wavy">clear direction</span>.”
            </h2>

            <p className="text-base text-gray-600 max-w-xl mx-auto mb-8 font-body">
              We stand by transparent communication, grounded Karachi market expertise, and an unwavering commitment to our clients.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider border border-[#E5A910] shadow-[0_4px_20px_rgba(217,119,6,0.3)] transition-all cursor-pointer"
            >
              Contact Our Consultants
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
