import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Building2, TrendingUp, Compass, Search, Filter, MapPin, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { PageId, PropertyItem } from '../types';
import { PROPERTIES_DATA, BRAND_INFO } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SignatureText } from '../components/SignatureText';
import { PropertyCard } from '../components/PropertyCard';

interface PropertiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (topic?: string, propertyTitle?: string) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Opportunities', icon: Filter },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building2 },
    { id: 'investment', label: 'Investment', icon: TrendingUp },
    { id: 'plots', label: 'Plots', icon: Compass }
  ];

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured property (first item or marked as featured)
  const featuredProperty = PROPERTIES_DATA.find(p => p.featured) || PROPERTIES_DATA[0];

  return (
    <div className="pt-24 sm:pt-28 pb-16 overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section id="properties-hero" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold uppercase tracking-widest text-[#B45309] mb-6 shadow-sm"
        >
          <span>Karachi Real Estate Portfolio</span>
        </motion.div>

        <AnimatedHeading
          title="Explore Property Opportunities"
          highlightWords={['Property', 'Opportunities']}
          as="h1"
          size="xl"
          className="mb-4"
        />

        <div className="mb-6">
          <SignatureText
            text="Find a place that fits your future."
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
          Discover curated residential, commercial, investment and plot opportunities across established and emerging sectors of Karachi.
        </motion.p>
      </section>

      {/* 2. FEATURED PROPERTY SECTION */}
      {featuredProperty && (
        <section id="featured-property-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-r from-amber-50/70 via-white to-amber-50/50 border border-amber-300 overflow-hidden shadow-xl p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A910] animate-ping" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B45309]">
                  Featured Opportunity
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-[#B45309] uppercase">
                Prime Location • Residential / Commercial
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Featured Image */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden group h-72 sm:h-96 shadow-md">
                <img
                  src={featuredProperty.image}
                  alt={featuredProperty.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-white bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 w-fit">
                  <MapPin className="w-4 h-4 text-[#E5A910]" />
                  <span>{featuredProperty.location}</span>
                </div>
              </div>

              {/* Featured Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold text-[#B45309] uppercase tracking-wider">
                  Contact for Details
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-950 leading-snug">
                  {featuredProperty.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-body">
                  {featuredProperty.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProperty.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-white text-gray-800 text-xs font-medium border border-gray-200 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    id="featured-request-info-btn"
                    onClick={() => onOpenConsultation(featuredProperty.categoryLabel, featuredProperty.title)}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider border border-[#E5A910] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Property Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* 3. CATEGORY FILTERS & SEARCH */}
      <section id="properties-filter-bar" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-btn-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E5A910] text-gray-950 shadow-sm'
                      : 'bg-white text-gray-700 hover:text-gray-950 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by area, type, tag..."
              className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D97706] transition-colors shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 4. PROPERTY CARDS GRID */}
      <section id="properties-grid" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, idx) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={idx}
                onSelect={(prop) => onOpenConsultation(prop.categoryLabel, prop.title)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-gray-950 mb-2">No Properties Found</h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
              We couldn't find matches for "{searchQuery}". Contact our consultancy team directly to inquire about unlisted opportunities.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-xl bg-[#E5A910] text-gray-950 font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 5. PROPERTY SEARCH CTA */}
      <section id="properties-search-cta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-amber-50/60 border border-amber-200 text-center relative overflow-hidden shadow-lg">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest block mb-2">
            Custom Property Search
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 mb-4">
            Looking For Something Specific?
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mb-8 font-body leading-relaxed">
            Tell us what type of property you are looking for and our team can discuss the available options.
          </p>

          <button
            id="properties-contact-consultant-btn"
            onClick={() => onOpenConsultation('Custom Property Inquiry')}
            className="px-8 py-4 rounded-xl bg-[#E5A910] hover:bg-[#D97706] text-gray-950 font-black text-sm uppercase tracking-wider border border-[#E5A910] shadow-md transition-all cursor-pointer"
          >
            Contact Consultant
          </button>
        </div>
      </section>
    </div>
  );
};
