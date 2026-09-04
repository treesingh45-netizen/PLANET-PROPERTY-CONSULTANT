import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Home, Building2 } from 'lucide-react';

export const TrustRow: React.FC = () => {
  const stats = [
    {
      id: 'stat-1',
      value: '5.0',
      isRating: true,
      label: 'Customer Rating',
      sublabel: 'Verified Reviews & Trust',
      icon: Star
    },
    {
      id: 'stat-2',
      value: 'Karachi',
      label: 'Local Property Expertise',
      sublabel: 'Block 11 Gulistan-e-Johar & Beyond',
      icon: MapPin
    },
    {
      id: 'stat-3',
      value: 'Residential',
      label: 'Property Solutions',
      sublabel: 'Homes, Apartments & Plots',
      icon: Home
    },
    {
      id: 'stat-4',
      value: 'Commercial',
      label: 'Property Solutions',
      sublabel: 'Retail, Offices & Investment',
      icon: Building2
    }
  ];

  return (
    <section id="trust-row-section" className="relative py-8 sm:py-12 border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                id={`trust-stat-${stat.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 hover:border-[#D97706] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(217,119,6,0.15)] flex flex-col justify-between"
              >
                {/* Top Icon & Gold Accent */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 group-hover:border-[#D97706] flex items-center justify-center text-[#D97706] transition-colors">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="h-1.5 w-8 rounded-full bg-gray-200 group-hover:bg-[#D97706] transition-all duration-300" />
                </div>

                {/* Stat Value */}
                <div className="mb-2">
                  {stat.isRating ? (
                    <div className="flex items-center gap-2">
                      <span className="font-display text-3xl sm:text-4xl font-black text-gray-950 group-hover:text-[#D97706] transition-colors">
                        {stat.value}
                      </span>
                      <div className="flex items-center text-[#D97706]">
                        <Star className="w-6 h-6 fill-[#E5A910]" />
                      </div>
                    </div>
                  ) : (
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-gray-950 group-hover:text-[#D97706] transition-colors">
                      {stat.value}
                    </span>
                  )}
                </div>

                {/* Stat Labels */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5 font-medium">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
