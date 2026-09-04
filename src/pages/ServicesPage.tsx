import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Key, Building, TrendingUp, Home, Building2, MessageSquare, ArrowRight, CheckCircle2, MessageSquareText } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_LIST, BRAND_INFO } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SignatureText } from '../components/SignatureText';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('buying');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'key':
        return Key;
      case 'building':
        return Building;
      case 'chart':
        return TrendingUp;
      case 'house':
        return Home;
      case 'office':
        return Building2;
      case 'conversation':
        return MessageSquare;
      default:
        return Key;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 overflow-hidden bg-white">
      {/* 1. SERVICES HERO */}
      <section id="services-hero" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold uppercase tracking-widest text-[#B45309] mb-6 shadow-sm"
        >
          <span>Professional Real Estate Services</span>
        </motion.div>

        <AnimatedHeading
          title="Our Property Services"
          highlightWords={['Property', 'Services']}
          as="h1"
          size="xl"
          className="mb-4"
        />

        <div className="mb-6">
          <SignatureText
            text="Solutions built around your goals."
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
          From finding the right property to preparing for a sale or exploring investment opportunities, our services are designed to make the process easier to understand.
        </motion.p>
      </section>

      {/* 2. SERVICES 6-CARD GRID */}
      <section id="services-grid" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const Icon = getServiceIcon(service.iconName);
            const isSelected = activeServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-8 rounded-2xl bg-white border transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group cursor-pointer ${
                  isSelected ? 'border-[#D97706] ring-2 ring-amber-400/30' : 'border-gray-200 hover:border-[#D97706]'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-black text-gray-200 group-hover:text-[#D97706]/50 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:border-[#D97706] text-[#D97706] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Tagline */}
                  <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider block mb-1">
                    {service.tagline}
                  </span>

                  {/* Service Title */}
                  <h3 className="font-display text-2xl font-bold text-gray-950 mb-3 group-hover:text-[#D97706] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-body">
                    {service.description}
                  </p>

                  {/* Detailed Bullet Points */}
                  <div className="space-y-2.5 pt-3 border-t border-gray-100">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation(service.title);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#E5A910] text-gray-900 hover:text-gray-950 border border-gray-200 hover:border-[#E5A910] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. CONSULTATION CALLOUT */}
      <section id="services-callout" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-amber-50/60 border border-amber-200 shadow-lg relative overflow-hidden">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-2">
            Tailored Consultancy
          </span>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-gray-950 mb-3">
            Need Guidance on a Specific Property Matter?
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-8 font-body">
            Our team in Block 11, Gulistan-e-Johar is ready to assess your requirements and help you make confident decisions in Karachi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('General Service Inquiry')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider border border-[#E5A910] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Book Property Consultation</span>
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-bold text-sm border border-gray-300 hover:border-[#D97706] transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
