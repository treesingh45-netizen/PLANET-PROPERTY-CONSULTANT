import React from 'react';
import { motion } from 'motion/react';

interface SignatureTextProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  animate?: boolean;
}

export const SignatureText: React.FC<SignatureTextProps> = ({
  text,
  className = '',
  size = 'md',
  align = 'left',
  animate = true
}) => {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl lg:text-6xl'
  };

  const alignClasses = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end'
  };

  if (!animate) {
    return (
      <span className={`font-signature italic text-[#B45309] font-normal tracking-wide inline-block ${sizeClasses[size]} ${className}`}>
        {text}
      </span>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center flex-wrap gap-2 ${alignClasses[align]} ${className}`}
    >
      <span className={`font-signature italic text-[#B45309] font-normal tracking-wide relative select-none drop-shadow-[0_1px_4px_rgba(217,119,6,0.2)] ${sizeClasses[size]}`}>
        {text}
      </span>
      {/* Decorative Gold line flourish */}
      <motion.span 
        initial={{ width: 0 }}
        whileInView={{ width: '40px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="h-[2px] bg-gradient-to-r from-[#D97706] to-transparent inline-block rounded-full self-center ml-1"
      />
    </motion.div>
  );
};
