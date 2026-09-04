import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Phone, Mail, User, MessageSquare, Building } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    requirement: 'Buy Property',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      requirement: 'Buy Property',
      message: ''
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-10 rounded-2xl bg-white border border-amber-300 shadow-xl text-center"
      >
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-[#D97706] text-[#D97706] flex items-center justify-center mx-auto mb-5 shadow-[0_4px_20px_rgba(217,119,6,0.25)]">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 mb-2">
          Enquiry Successfully Submitted
        </h3>
        <p className="text-gray-700 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-gray-950">{formData.fullName}</strong>. A property consultant from <strong className="text-[#B45309]">PLANET PROPERTY CONSULTANT</strong> will get in touch with you at <strong className="text-gray-950">{formData.phone}</strong> shortly.
        </p>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 max-w-md mx-auto mb-6 text-left text-xs text-gray-600 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Requirement:</span>
            <span className="text-[#B45309] font-bold">{formData.requirement}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Consultancy Office:</span>
            <span className="text-gray-900 font-medium">{BRAND_INFO.address}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Direct Contact:</span>
            <span className="text-[#B45309] font-bold">{BRAND_INFO.phone}</span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="py-3 px-8 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-bold transition-colors cursor-pointer shadow-md hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)]"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      id="contact-consultant-form"
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-xl relative space-y-5"
    >
      <div className="border-b border-gray-100 pb-5 mb-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] block mb-1">
          Direct Property Consultation
        </span>
        <h3 className="font-display text-2xl font-bold text-gray-950">
          Send Us an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Share your requirements and we will provide practical property guidance.
        </p>
      </div>

      {/* Full Name */}
      <div className="relative pt-1">
        <div className={`relative rounded-xl border transition-all duration-300 ${
          focusedField === 'fullName' || formData.fullName
            ? 'border-[#D97706] bg-amber-50/20'
            : 'border-gray-300 bg-gray-50'
        }`}>
          <div className="flex items-center px-4 py-3">
            <User className={`w-4 h-4 mr-3 transition-colors ${
              focusedField === 'fullName' ? 'text-[#D97706]' : 'text-gray-500'
            }`} />
            <input
              type="text"
              id="field-fullName"
              required
              value={formData.fullName}
              onFocus={() => setFocusedField('fullName')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Full Name *"
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Phone Number & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="relative">
          <div className={`relative rounded-xl border transition-all duration-300 ${
            focusedField === 'phone' || formData.phone
              ? 'border-[#D97706] bg-amber-50/20'
              : 'border-gray-300 bg-gray-50'
          }`}>
            <div className="flex items-center px-4 py-3">
              <Phone className={`w-4 h-4 mr-3 transition-colors ${
                focusedField === 'phone' ? 'text-[#D97706]' : 'text-gray-500'
              }`} />
              <input
                type="tel"
                id="field-phone"
                required
                value={formData.phone}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone Number * (+92...)"
                className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <div className={`relative rounded-xl border transition-all duration-300 ${
            focusedField === 'email' || formData.email
              ? 'border-[#D97706] bg-amber-50/20'
              : 'border-gray-300 bg-gray-50'
          }`}>
            <div className="flex items-center px-4 py-3">
              <Mail className={`w-4 h-4 mr-3 transition-colors ${
                focusedField === 'email' ? 'text-[#D97706]' : 'text-gray-500'
              }`} />
              <input
                type="email"
                id="field-email"
                value={formData.email}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Property Requirement Dropdown */}
      <div className="relative">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 ml-1">
          Property Requirement
        </label>
        <div className="relative rounded-xl border border-gray-300 bg-gray-50 focus-within:border-[#D97706] transition-colors">
          <div className="flex items-center px-4 py-3">
            <Building className="w-4 h-4 text-[#D97706] mr-3" />
            <select
              id="field-requirement"
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className="w-full bg-transparent text-sm text-gray-900 focus:outline-none cursor-pointer"
            >
              <option value="Buy Property" className="bg-white text-gray-900">Buy Property</option>
              <option value="Sell Property" className="bg-white text-gray-900">Sell Property</option>
              <option value="Investment" className="bg-white text-gray-900">Investment</option>
              <option value="Residential" className="bg-white text-gray-900">Residential</option>
              <option value="Commercial" className="bg-white text-gray-900">Commercial</option>
              <option value="General Consultation" className="bg-white text-gray-900">General Consultation</option>
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 ml-1">
          Message
        </label>
        <div className={`relative rounded-xl border transition-all duration-300 ${
          focusedField === 'message' || formData.message
            ? 'border-[#D97706] bg-amber-50/20'
            : 'border-gray-300 bg-gray-50'
        }`}>
          <div className="flex items-start px-4 py-3">
            <MessageSquare className={`w-4 h-4 mr-3 mt-1 transition-colors ${
              focusedField === 'message' ? 'text-[#D97706]' : 'text-gray-500'
            }`} />
            <textarea
              id="field-message"
              rows={4}
              value={formData.message}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your property goals, preferred area in Karachi, budget range, or specific query..."
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none resize-none leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Golden Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        id="send-enquiry-btn"
        className="w-full py-4 px-6 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-base uppercase tracking-wider border border-[#E5A910] shadow-md hover:shadow-[0_4px_20px_rgba(217,119,6,0.35)] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>Submitting Enquiry...</span>
        ) : (
          <>
            <span>Send Enquiry</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};
