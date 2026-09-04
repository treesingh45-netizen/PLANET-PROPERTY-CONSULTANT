import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare, Search, MessageSquareText } from 'lucide-react';
import { PageId } from '../types';
import { FAQ_LIST, BRAND_INFO } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SignatureText } from '../components/SignatureText';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchFilter, setSearchFilter] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQ_LIST.filter(faq =>
    faq.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="pt-24 sm:pt-28 pb-16 overflow-hidden bg-white">
      {/* 1. FAQ HERO */}
      <section id="faq-hero" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold uppercase tracking-widest text-[#B45309] mb-6 shadow-sm"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Clarity & Answers</span>
        </motion.div>

        <AnimatedHeading
          title="Frequently Asked Questions"
          highlightWords={['Questions']}
          as="h1"
          size="xl"
          className="mb-4"
        />

        <div className="mb-6">
          <SignatureText
            text="Let’s make property simpler."
            size="lg"
            align="center"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Get direct, straightforward answers about our Karachi real estate advisory services, buying, selling, and consultation processes.
        </motion.p>

        {/* Quick Search */}
        <div className="max-w-md mx-auto mt-8 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search questions..."
            className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D97706] transition-colors shadow-sm"
          />
        </div>
      </section>

      {/* 2. ACCORDION FAQ SECTION */}
      <section id="faq-accordion-list" className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqId === faq.id;

            return (
              <motion.div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-amber-50/40 border-amber-300 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-amber-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-[#D97706] text-xs font-bold flex items-center justify-center shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-gray-950">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#E5A910] text-gray-950' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-700 border-t border-amber-200/50 leading-relaxed font-body">
                        <span className="text-gray-900 block font-medium">{faq.answer}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS CTA */}
      <section id="faq-cta" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-amber-50/60 border border-amber-200 shadow-lg relative overflow-hidden">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-2">
            Direct Assistance
          </span>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-gray-950 mb-3">
            Still Have Questions?
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-md mx-auto mb-8 font-body leading-relaxed">
            Let's discuss your property requirement directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="faq-consult-btn"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider border border-[#E5A910] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Ask a Consultant</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-bold text-sm border border-gray-300 hover:border-[#D97706] transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <span>Go to Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
