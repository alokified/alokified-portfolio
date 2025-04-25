import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Extracurricular } from '../../types';

interface ExtracurricularCardProps {
  extracurricular: Extracurricular;
  index: number;
}

const ExtracurricularCard: React.FC<ExtracurricularCardProps> = ({ extracurricular, index }) => {
  const { title, organization, description, period } = extracurricular;

  return (
    <motion.div 
      className="card hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      
      {organization && (
        <p className="text-primary-400 text-sm mb-2">{organization}</p>
      )}
      
      {period && (
        <div className="flex items-center text-zinc-500 text-sm mb-3">
          <Clock size={14} className="mr-1" />
          {period}
        </div>
      )}
      
      <p className="text-zinc-400 text-sm">{description}</p>
    </motion.div>
  );
};

export default ExtracurricularCard;