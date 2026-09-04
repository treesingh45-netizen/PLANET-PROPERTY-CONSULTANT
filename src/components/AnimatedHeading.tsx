import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeadingProps {
  title: string;
  highlightWords?: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  title,
  highlightWords = [],
  as: Component = 'h2',
  className = '',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'text-xl sm:text-2xl font-bold tracking-tight',
    md: 'text-2xl sm:text-3xl font-extrabold tracking-tight',
    lg: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight',
    xl: 'text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight',
    hero: 'text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]'
  };

  const words = title.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <Component className={`font-display text-gray-950 ${sizeClasses[size]} ${className}`}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="inline-block"
      >
        {words.map((word, index) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
          const isHighlight = highlightWords.some(hw => 
            cleanWord.toLowerCase() === hw.toLowerCase() || 
            word.toLowerCase().includes(hw.toLowerCase())
          );

          return (
            <motion.span
              variants={child}
              key={index}
              className={`inline-block mr-[0.25em] last:mr-0 ${
                isHighlight ? 'text-[#D97706] drop-shadow-[0_1px_3px_rgba(217,119,6,0.25)]' : 'text-gray-950'
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Component>
  );
};
