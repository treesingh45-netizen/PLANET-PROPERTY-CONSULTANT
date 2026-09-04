import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, Home, Building2, TrendingUp, Compass, Key } from 'lucide-react';
import { PropertyItem } from '../types';

interface PropertyCardProps {
  property: PropertyItem;
  onSelect?: (property: PropertyItem) => void;
  index?: number;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  index = 0
}) => {
  const getCategoryIcon = () => {
    switch (property.category) {
      case 'residential':
        return Home;
      case 'commercial':
        return Building2;
      case 'investment':
        return TrendingUp;
      case 'plots':
        return Compass;
      default:
        return Key;
    }
  };

  const Icon = getCategoryIcon();

  return (
    <motion.div
      id={`property-card-${property.id}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col rounded-2xl bg-white border border-gray-200 hover:border-[#D97706] overflow-hidden shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(217,119,6,0.2)] transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-amber-300 text-[#B45309] text-xs font-bold tracking-wide uppercase shadow-sm">
          <Icon className="w-3.5 h-3.5" />
          <span>{property.categoryLabel}</span>
        </div>

        {/* Status / Verified Badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#E5A910] text-gray-950 text-[11px] font-extrabold uppercase tracking-wider shadow-md">
          Verified Opportunity
        </div>

        {/* Location pill on image */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs font-semibold text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 w-fit">
          <MapPin className="w-3.5 h-3.5 text-[#E5A910] shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Subtype */}
          <div className="text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1.5">
            {property.type}
          </div>

          {/* Title */}
          <h3 className="font-display text-lg sm:text-xl font-bold text-gray-950 group-hover:text-[#D97706] transition-colors line-clamp-2 mb-2.5">
            {property.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed font-body">
            {property.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {property.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          id={`inquire-btn-${property.id}`}
          onClick={() => onSelect?.(property)}
          className="w-full py-3 px-4 rounded-xl bg-gray-900 hover:bg-[#E5A910] text-white hover:text-gray-950 font-bold text-sm border border-gray-900 hover:border-[#E5A910] transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
        >
          <span>Request Information</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
