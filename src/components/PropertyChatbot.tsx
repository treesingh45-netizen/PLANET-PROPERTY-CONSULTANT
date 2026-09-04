import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Home,
  Building2,
  TrendingUp,
  Compass,
  MapPin,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  User,
  PhoneCall,
  Calendar,
  Layers,
  HelpCircle,
  ThumbsUp,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { PageId, PropertyItem } from '../types';
import { PROPERTIES_DATA, BRAND_INFO } from '../data/mockData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  propertyCards?: PropertyItem[];
  actionType?: 'navigate-properties' | 'open-consultation' | 'contact-page';
  actionPayload?: string;
}

interface PropertyChatbotProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (topic?: string, propertyTitle?: string) => void;
}

export const PropertyChatbot: React.FC<PropertyChatbotProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);

  // User Requirement State Tracker
  const [requirements, setRequirements] = useState<{
    purpose?: string; // Buy, Invest, Rent, Sell
    propertyType?: string; // Residential, Commercial, Plots, Investment
    location?: string; // Johar, Gulshan, DHA, Bahria, etc.
    budget?: string;
    specs?: string;
    contactName?: string;
    contactPhone?: string;
  }>({});

  const [step, setStep] = useState<number>(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial welcome message
  const initialMessages: Message[] = [
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `👋 Hello! Welcome to **PLANET PROPERTY CONSULTANT** (5.0 ★). I'm your dedicated Karachi Property Advisor.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      text: `Are you looking to find, invest, or consult on a property in Karachi? What is your primary objective?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickReplies: [
        '🏠 Buy a Home / Apartment',
        '🏢 Commercial Property',
        '📈 Investment Opportunity',
        '📐 Buy Plots / Land',
        '💼 Sell / List My Property'
      ]
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setShowTooltip(false);
    }
  }, [messages, isOpen, isTyping]);

  // Hide initial greeting tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const addBotResponse = (
    text: string,
    quickReplies?: string[],
    propertyCards?: PropertyItem[],
    actionType?: 'navigate-properties' | 'open-consultation' | 'contact-page',
    actionPayload?: string,
    delayMs = 600
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newMsg: Message = {
        id: `bot-${Date.now()}-${Math.random()}`,
        sender: 'bot',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies,
        propertyCards,
        actionType,
        actionPayload
      };
      setMessages((prev) => [...prev, newMsg]);
    }, delayMs);
  };

  const handleUserMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    processInput(text.trim());
  };

  const processInput = (text: string) => {
    const lower = text.toLowerCase();

    // 1. Check if user is answering purpose / type
    if (lower.includes('buy') || lower.includes('home') || lower.includes('apartment') || lower.includes('residential')) {
      setRequirements((prev) => ({ ...prev, purpose: 'Buy', propertyType: 'Residential' }));
      setStep(1);
      addBotResponse(
        `Great choice! Residential living in Karachi offers vibrant choices. Which locality or sector do you prefer?`,
        [
          '📍 Gulistan-e-Johar',
          '📍 Gulshan-e-Iqbal',
          '📍 DHA / Clifton',
          '📍 Bahria Town Karachi',
          '📍 Scheme 33',
          '📍 Malir Cantt / Other'
        ]
      );
      return;
    }

    if (lower.includes('commercial') || lower.includes('office') || lower.includes('shop') || lower.includes('showroom')) {
      setRequirements((prev) => ({ ...prev, purpose: 'Buy', propertyType: 'Commercial' }));
      setStep(1);
      addBotResponse(
        `Commercial assets in Karachi provide strong rental yield and capital appreciation. Which prime business zone interests you?`,
        [
          '📍 Gulistan-e-Johar Commercial',
          '📍 Gulshan-e-Iqbal / Main Road',
          '📍 DHA / Shahrah-e-Faisal',
          '📍 Bahria Town Commercial',
          '📍 Anywhere with High Rental Yield'
        ]
      );
      return;
    }

    if (lower.includes('plot') || lower.includes('land') || lower.includes('files')) {
      setRequirements((prev) => ({ ...prev, purpose: 'Buy', propertyType: 'Plots' }));
      setStep(1);
      addBotResponse(
        `Plots and land in approved master-planned schemes offer solid long-term growth. Where are you seeking land?`,
        [
          '📍 Scheme 33 (120 & 240 Sq. Yds)',
          '📍 Bahria Town Karachi',
          '📍 Gulistan-e-Johar Plots',
          '📍 Malir / Gadap Town',
          '📍 DHA City Karachi'
        ]
      );
      return;
    }

    if (lower.includes('invest') || lower.includes('yield') || lower.includes('capital appreciation')) {
      setRequirements((prev) => ({ ...prev, purpose: 'Invest', propertyType: 'Investment' }));
      setStep(1);
      addBotResponse(
        `Smart property investment requires verified documentation and strategic entry prices. What is your preferred investment scope?`,
        [
          '💰 High Rental Income (Shops/Offices)',
          '📈 Long-term Capital Growth (Plots)',
          '🏢 Under-Construction Installment Projects',
          '🏡 Renovate & Resell Opportunities'
        ]
      );
      return;
    }

    if (lower.includes('sell') || lower.includes('list')) {
      setRequirements((prev) => ({ ...prev, purpose: 'Sell' }));
      addBotResponse(
        `We help sellers achieve fair market valuation, vetted buyers, and clean transaction handling. Would you like to submit your property details to our team in Block 11, Gulistan-e-Johar?`,
        ['📝 Fill Property Valuation Form', '📍 Visit Our Office', '💬 Talk with a Consultant']
      );
      return;
    }

    // 2. Check if user answered Location
    if (
      lower.includes('johar') ||
      lower.includes('gulshan') ||
      lower.includes('dha') ||
      lower.includes('clifton') ||
      lower.includes('bahria') ||
      lower.includes('scheme 33') ||
      lower.includes('malir')
    ) {
      const locName = text.replace('📍', '').trim();
      setRequirements((prev) => ({ ...prev, location: locName }));
      setStep(2);
      addBotResponse(
        `Excellent, **${locName}** is an active market. What approximate budget range are you working with for this move?`,
        [
          '💵 Under PKR 75 Lakh',
          '💵 PKR 75 Lakh – 1.5 Crore',
          '💵 PKR 1.5 Crore – 3 Crore',
          '💵 PKR 3 Crore – 6 Crore',
          '💵 PKR 6 Crore+'
        ]
      );
      return;
    }

    // 3. Check if user answered Budget
    if (lower.includes('crore') || lower.includes('lakh') || lower.includes('pkr') || lower.includes('budget')) {
      const budgetVal = text.replace('💵', '').trim();
      setRequirements((prev) => ({ ...prev, budget: budgetVal }));
      setStep(3);

      // Filter matched properties from mock database
      const matched = PROPERTIES_DATA.filter((p) => {
        if (requirements.propertyType === 'Residential' && p.category === 'residential') return true;
        if (requirements.propertyType === 'Commercial' && p.category === 'commercial') return true;
        if (requirements.propertyType === 'Plots' && p.category === 'plots') return true;
        if (requirements.propertyType === 'Investment' && p.category === 'investment') return true;
        return true;
      }).slice(0, 2);

      addBotResponse(
        `Thank you for sharing your parameters! Based on your preference (${requirements.propertyType || 'Property'} in ${
          requirements.location || 'Karachi'
        } around ${budgetVal}), here are verified recommendations currently available:`,
        [
          '📋 View All Catalog Properties',
          '📅 Book Private Viewing / Consultation',
          '🔄 Reset & Start Fresh'
        ],
        matched
      );
      return;
    }

    // 4. Check for Specific Questions
    if (lower.includes('address') || lower.includes('location') || lower.includes('office') || lower.includes('where')) {
      addBotResponse(
        `📍 **Our Office Location**:\n${BRAND_INFO.address}\n\n🕒 **Office Timings**:\n${BRAND_INFO.hours}\n\nOur consultancy is easily accessible in Block 11, Gulistan-e-Johar, Karachi. Would you like directions or to schedule a visit?`,
        ['📍 Open Google Maps', '📅 Schedule Office Visit', '📋 Explore Properties']
      );
      return;
    }

    if (lower.includes('verification') || lower.includes('noc') || lower.includes('legal') || lower.includes('document')) {
      addBotResponse(
        `🛡️ **Property Due Diligence & Legal Verification**:\nWe verify Title Deeds, KDA / SBCA approved layouts, Sub-registrar transfer records, and utility NOCs before facilitating transactions to safeguard your capital.`,
        ['🤝 Book Legal Advisory Session', '📋 View Verified Properties', '💬 Ask Another Question']
      );
      return;
    }

    if (lower.includes('timing') || lower.includes('hours') || lower.includes('open')) {
      addBotResponse(
        `🕒 **Working Hours**:\n${BRAND_INFO.hours}\nSunday: Closed (Available for pre-booked site visits).`,
        ['📅 Book Consultation', '📍 Office Location']
      );
      return;
    }

    if (lower.includes('catalog') || lower.includes('view all') || lower.includes('listings')) {
      addBotResponse(
        `You can explore our full interactive catalog featuring Residential, Commercial, Investment, and Plots across Karachi.`,
        ['👉 Go to Properties Page', '💬 Ask about specific area']
      );
      return;
    }

    if (lower.includes('reset') || lower.includes('restart') || lower.includes('start fresh')) {
      handleResetChat();
      return;
    }

    if (lower.includes('consultation') || lower.includes('book') || lower.includes('appointment') || lower.includes('viewing')) {
      onOpenConsultation('Chatbot Inquiry');
      addBotResponse(
        `I have opened our Consultation Request window for you. Fill in your contact number and our team will get in touch promptly!`,
        ['💬 Ask Another Question', '📋 Explore Properties']
      );
      return;
    }

    if (lower.includes('map') || lower.includes('google maps')) {
      window.open(BRAND_INFO.googleMapsLink, '_blank');
      addBotResponse(
        `Opened Google Maps location for **PLANET PROPERTY CONSULTANT** in a new tab!`,
        ['💬 Ask About Properties', '📅 Book Office Visit']
      );
      return;
    }

    if (lower.includes('contact page') || lower.includes('go to contact')) {
      onNavigate('contact');
      addBotResponse(
        `Navigated to our official Contact page where you can see our complete contact details and contact form.`,
        ['💬 Ask Property Question', '📋 Explore Properties']
      );
      return;
    }

    if (lower.includes('properties page') || lower.includes('go to properties')) {
      onNavigate('properties');
      addBotResponse(
        `Navigated to our Properties Catalog page!`,
        ['💬 Ask for Recommendations', '📅 Request Consultation']
      );
      return;
    }

    // Default intelligent fallback answer
    addBotResponse(
      `Understood! At **PLANET PROPERTY CONSULTANT**, we provide tailored guidance across Gulistan-e-Johar, Gulshan, DHA, Bahria Town, and Scheme 33. How would you like us to assist you further?`,
      [
        '🏠 Find Residential Home',
        '🏢 Find Commercial Unit',
        '📐 Find Plots & Land',
        '📅 Book Consultation',
        '📍 Office Location'
      ]
    );
  };

  const handleQuickReply = (reply: string) => {
    if (reply.includes('Reset') || reply.includes('Start Fresh')) {
      handleResetChat();
      return;
    }

    if (reply.includes('Open Google Maps')) {
      window.open(BRAND_INFO.googleMapsLink, '_blank');
      addBotResponse(`Opened Google Maps location!`, ['💬 Ask Another Question']);
      return;
    }

    if (reply.includes('Go to Properties Page') || reply.includes('View All Catalog')) {
      onNavigate('properties');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      addBotResponse(`Navigated to Properties Catalog!`, ['💬 Ask Another Question']);
      return;
    }

    if (reply.includes('Contact Page') || reply.includes('Contact Form')) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      addBotResponse(`Navigated to Contact Page!`, ['💬 Ask Another Question']);
      return;
    }

    if (reply.includes('Book') || reply.includes('Schedule')) {
      onOpenConsultation('Chatbot Consultation');
      addBotResponse(`Opened consultation form. We look forward to speaking with you!`, ['📋 View Properties']);
      return;
    }

    handleUserMessage(reply);
  };

  const handleResetChat = () => {
    setRequirements({});
    setStep(0);
    setMessages(initialMessages);
  };

  return (
    <>
      {/* 1. Floating Right Chatbot Trigger Button & Greeting Bubble */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
        {/* Tooltip speech bubble */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-3 max-w-xs p-3.5 rounded-2xl bg-white border border-amber-300 shadow-xl text-gray-900 relative text-xs font-medium cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E5A910] animate-ping shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-950">Looking for Property in Karachi?</p>
                  <p className="text-gray-600 mt-0.5">Chat with our AI Advisor to match your requirements & budget.</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                  }}
                  className="text-gray-400 hover:text-gray-700 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              {/* Arrow pointing to button */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-amber-300 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Chat Trigger Button */}
        <motion.button
          id="property-chatbot-toggle-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider shadow-[0_6px_30px_rgba(217,119,6,0.4)] border border-amber-300 transition-all cursor-pointer group"
          aria-label="Toggle Property Finder Chatbot"
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5 text-gray-950" />
              <span className="font-extrabold text-xs uppercase">Close Chat</span>
            </>
          ) : (
            <>
              <div className="relative">
                <MessageSquare className="w-5 h-5 fill-gray-950 text-gray-950" />
                {hasUnread && (
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-red-500 border-2 border-white animate-pulse" />
                )}
              </div>
              <span className="font-black text-xs uppercase tracking-wider">Property Finder AI</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-md bg-black text-[#E5A910] text-[10px] font-bold">
                Online
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* 2. Interactive Chat Window (Positioned on the right side) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="property-chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? '72px' : '580px'
            }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] bg-white border border-amber-300/80 rounded-3xl shadow-[0_15px_60px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden transition-all duration-300`}
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Chat Header */}
            <div className="px-5 py-3.5 bg-gradient-to-r from-amber-500 via-[#E5A910] to-[#D97706] text-gray-950 flex items-center justify-between shadow-sm shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black border-2 border-amber-200 overflow-hidden shadow-md shrink-0 flex items-center justify-center">
                  <img
                    src={BRAND_INFO.logoUrl}
                    alt="PPC"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-extrabold text-sm sm:text-base leading-none text-gray-950">
                      Property Advisor
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  </div>
                  <p className="text-[11px] font-medium text-black/80 mt-0.5">
                    PLANET PROPERTY CONSULTANT • 5.0 ★
                  </p>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-gray-950 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? 'Expand' : 'Minimize'}
                  className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-gray-950 transition-colors cursor-pointer"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-gray-950 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Requirements Indicator Bar */}
                {(requirements.purpose || requirements.propertyType || requirements.location || requirements.budget) && (
                  <div className="px-4 py-2 bg-amber-50 border-b border-amber-200 text-[11px] text-gray-700 flex items-center gap-2 overflow-x-auto shrink-0 whitespace-nowrap">
                    <span className="font-bold text-[#B45309] uppercase">Criteria:</span>
                    {requirements.propertyType && (
                      <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 font-medium">
                        {requirements.propertyType}
                      </span>
                    )}
                    {requirements.location && (
                      <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 font-medium">
                        {requirements.location}
                      </span>
                    )}
                    {requirements.budget && (
                      <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 font-medium">
                        {requirements.budget}
                      </span>
                    )}
                  </div>
                )}

                {/* Messages Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-end gap-2 max-w-[88%]">
                        {msg.sender === 'bot' && (
                          <div className="w-7 h-7 rounded-full bg-black border border-[#E5A910] overflow-hidden shrink-0 mb-1 shadow-xs">
                            <img
                              src={BRAND_INFO.logoUrl}
                              alt="PPC"
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}

                        <div
                          className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                            msg.sender === 'user'
                              ? 'bg-[#E5A910] text-gray-950 rounded-br-none font-medium'
                              : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                          }`}
                        >
                          <p className="whitespace-pre-line font-body">{msg.text}</p>
                        </div>
                      </div>

                      <span className="text-[10px] text-gray-400 mt-1 px-1">
                        {msg.timestamp}
                      </span>

                      {/* Property Recommendations Preview inside Chat */}
                      {msg.propertyCards && msg.propertyCards.length > 0 && (
                        <div className="mt-3 space-y-2.5 w-full max-w-[92%] pl-9">
                          {msg.propertyCards.map((prop) => (
                            <div
                              key={prop.id}
                              className="p-3 rounded-2xl bg-white border border-amber-300 shadow-md flex gap-3 items-center group"
                            >
                              <img
                                src={prop.image}
                                alt={prop.title}
                                className="w-16 h-16 rounded-xl object-cover shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <span className="text-[10px] font-bold text-[#B45309] uppercase block">
                                  {prop.categoryLabel}
                                </span>
                                <h4 className="font-bold text-xs text-gray-950 truncate">
                                  {prop.title}
                                </h4>
                                <div className="flex items-center gap-1 text-[11px] text-gray-600 truncate mt-0.5">
                                  <MapPin className="w-3 h-3 text-[#D97706] shrink-0" />
                                  <span>{prop.location}</span>
                                </div>
                                <div className="mt-1.5 flex items-center gap-2">
                                  <button
                                    onClick={() => onOpenConsultation(prop.categoryLabel, prop.title)}
                                    className="px-2.5 py-1 rounded-lg bg-[#E5A910] text-gray-950 font-bold text-[10px] hover:bg-[#D97706] transition-colors cursor-pointer"
                                  >
                                    Inquire Details
                                  </button>
                                  <button
                                    onClick={() => {
                                      onNavigate('properties');
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="text-[10px] font-bold text-[#D97706] hover:underline"
                                  >
                                    View in Catalog →
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Quick Reply Chips */}
                      {msg.quickReplies && msg.quickReplies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5 pl-9 max-w-[95%]">
                          {msg.quickReplies.map((reply, rIdx) => (
                            <button
                              key={rIdx}
                              onClick={() => handleQuickReply(reply)}
                              className="px-3 py-1.5 rounded-xl bg-white hover:bg-amber-100/70 text-gray-900 hover:text-black border border-amber-300 text-[11px] sm:text-xs font-semibold shadow-xs transition-all hover:scale-102 cursor-pointer text-left"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-end gap-2 max-w-[80%]">
                      <div className="w-7 h-7 rounded-full bg-black border border-[#E5A910] overflow-hidden shrink-0 mb-1">
                        <img
                          src={BRAND_INFO.logoUrl}
                          alt="PPC"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-3 rounded-2xl bg-white border border-gray-200 rounded-bl-none shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#D97706] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-[#D97706] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-[#D97706] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Action Navigation Bar */}
                <div className="px-3 py-1.5 bg-gray-100 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-600">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenConsultation('Quick Chat Consultation')}
                      className="text-[#B45309] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Book Consultation</span>
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-gray-700 font-bold hover:underline cursor-pointer"
                    >
                      Contact Page
                    </button>
                  </div>
                  <span className="text-[10px] text-gray-400">Karachi Real Estate</span>
                </div>

                {/* Input Field Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUserMessage(inputText);
                  }}
                  className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type property type, area, budget or question..."
                    className="flex-1 bg-gray-50 border border-gray-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D97706] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="p-2.5 rounded-2xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-bold transition-all disabled:opacity-40 disabled:hover:bg-[#E5A910] shadow-sm cursor-pointer shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
