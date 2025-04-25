import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  className = '' 
}) => {
  return (
    <motion.div 
      className={`mb-12 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {Icon && (
        <div className="flex justify-center mb-4">
          <span className="p-3 rounded-full bg-zinc-900/80 text-primary-400">
            <Icon size={24} />
          </span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;