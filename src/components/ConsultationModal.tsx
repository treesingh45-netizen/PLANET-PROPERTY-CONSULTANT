import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, User, Send, CheckCircle2, MessageSquare, Building2, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  initialPropertyTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'General Consultation',
  initialPropertyTitle
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState(initialTopic);
  const [message, setMessage] = useState(initialPropertyTitle ? `Inquiry regarding: ${initialPropertyTitle}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-amber-50 border border-[#D97706] text-[#D97706] flex items-center justify-center mx-auto mb-5 shadow-[0_4px_20px_rgba(217,119,6,0.25)]"
                >
                  <CheckCircle2 className="w-9 h-9" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-gray-950 mb-2">
                  Enquiry Received
                </h3>
                <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
                  Thank you for reaching out to <strong className="text-[#B45309]">PLANET PROPERTY CONSULTANT</strong>. Our team will contact you promptly at <span className="text-gray-950 font-bold">{phoneNumber || 'your phone number'}</span>.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-6 text-left text-xs text-gray-600 space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Block 11, Gulistan-e-Johar, Karachi</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>We will reach out to you directly via your phone/WhatsApp</span>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-6 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-bold transition-colors shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-full bg-black border-2 border-[#E5A910] overflow-hidden shadow-md shrink-0">
                    <img
                      src={BRAND_INFO.logoUrl}
                      alt="PLANET PROPERTY CONSULTANT"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B45309] block">
                      PLANET PROPERTY CONSULTANT • 5.0 ★
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-gray-950 leading-tight">
                      Talk to a Consultant
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-5">
                  Discuss your property requirements in Karachi with practical and transparent guidance.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D97706] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D97706] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D97706] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Property Requirement
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:bg-white focus:border-[#D97706] transition-colors cursor-pointer"
                      >
                        <option value="Buy Property">Buy Property</option>
                        <option value="Sell Property">Sell Property</option>
                        <option value="Investment">Investment</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Message / Specific Requirements
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your preferred location, property type, or specific question..."
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D97706] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 px-6 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
