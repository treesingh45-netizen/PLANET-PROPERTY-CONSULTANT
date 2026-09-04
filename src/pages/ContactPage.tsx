import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Star, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SignatureText } from '../components/SignatureText';
import { ContactForm } from '../components/ContactForm';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 overflow-hidden bg-white">
      {/* 1. CONTACT HERO */}
      <section id="contact-hero" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold uppercase tracking-widest text-[#B45309] mb-6 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Connect With Our Team</span>
        </motion.div>

        <AnimatedHeading
          title="Let's Talk Property"
          highlightWords={['Property']}
          as="h1"
          size="xl"
          className="mb-4"
        />

        <div className="mb-6">
          <SignatureText
            text="Your next move starts here."
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
          Whether you are buying, selling, investing or simply exploring your options, speak with PLANET PROPERTY CONSULTANT today.
        </motion.p>
      </section>

      {/* 2. CONTACT INFO CARDS & FORM GRID */}
      <section id="contact-grid-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Phone Card */}
              <motion.a
                id="contact-info-phone"
                href={`tel:${BRAND_INFO.phoneRaw}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] transition-all duration-300 flex items-start gap-4 group block shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center shrink-0 transition-colors shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] block mb-1">
                    Phone
                  </span>
                  <div className="font-display text-xl sm:text-2xl font-bold text-gray-950 group-hover:text-[#D97706] transition-colors">
                    {BRAND_INFO.phone}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct calls & WhatsApp consultation
                  </p>
                </div>
              </motion.a>

              {/* Address Card */}
              <motion.div
                id="contact-info-address"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#D97706] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] block mb-1">
                    Address
                  </span>
                  <div className="font-display text-lg sm:text-xl font-bold text-gray-950 leading-snug">
                    {BRAND_INFO.address}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Karachi, Pakistan • Easily accessible location
                  </p>
                </div>
              </motion.div>

              {/* Rating Card */}
              <motion.div
                id="contact-info-rating"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#E5A910] flex items-center justify-center shrink-0 shadow-sm">
                  <Star className="w-5 h-5 fill-[#E5A910]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] block mb-1">
                    Rating
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-black text-gray-950">5.0</span>
                    <div className="flex text-[#E5A910]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E5A910]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Customer Satisfaction & Trust
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quick Hours Note */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 flex items-center gap-3 shadow-sm">
              <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>Office Hours: Monday to Saturday, 10:00 AM – 8:00 PM</span>
            </div>
          </div>

          {/* Right Column: Interactive Form with Floating Labels (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP SECTION */}
      <section id="contact-map-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl bg-gray-50 border border-gray-200 overflow-hidden shadow-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-1">
                Location Map
              </span>
              <h2 className="font-display text-2xl font-bold text-gray-950">
                Block 11, Gulistan-e-Johar, Karachi
              </h2>
            </div>
            <a
              href={BRAND_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#E5A910] text-gray-900 hover:text-gray-950 text-xs font-bold transition-colors border border-gray-200 shadow-sm"
            >
              <span>View On Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 h-[380px] sm:h-[450px]">
            <iframe
              title="PLANET PROPERTY CONSULTANT Office Map"
              src={BRAND_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Custom Location Overlay Card */}
            <div className="absolute bottom-4 left-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300 max-w-xs shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase mb-1">
                <MapPin className="w-4 h-4 text-[#D97706]" />
                <span>PLANET PROPERTY CONSULTANT</span>
              </div>
              <p className="text-xs text-gray-700">
                Block 11, Gulistan-e-Johar, Karachi, Pakistan
              </p>
              <div className="mt-2 pt-2 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-600">
                <span>Direct: {BRAND_INFO.phone}</span>
                <span className="text-[#D97706] font-bold">5.0 ★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section id="contact-final-cta" className="py-24 bg-amber-50/50 border-t border-amber-200 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedHeading
            title="Ready For Your Next Property Move?"
            highlightWords={['Property', 'Move?']}
            as="h2"
            size="xl"
            className="mb-4"
          />

          <div className="mb-8">
            <SignatureText
              text="Let's make it happen."
              size="lg"
              align="center"
            />
          </div>

          <a
            id="contact-final-call-btn"
            href={`tel:${BRAND_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-base uppercase tracking-wider border border-[#E5A910] shadow-[0_4px_25px_rgba(217,119,6,0.3)] transition-all duration-300 cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            <span>Call +92 336 8213359</span>
          </a>
        </div>
      </section>
    </div>
  );
};
