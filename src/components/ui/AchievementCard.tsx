import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const { title, organization, date, description, url, category } = achievement;

  const getCategoryBadge = () => {
    switch (category) {
      case 'certification':
        return (
          <span className="bg-primary-900/50 text-primary-400 text-xs py-1 px-2 rounded-full">
            Certification
          </span>
        );
      case 'award':
        return (
          <span className="bg-accent-900/50 text-accent-400 text-xs py-1 px-2 rounded-full">
            Award
          </span>
        );
      case 'badge':
        return (
          <span className="bg-secondary-900/50 text-secondary-400 text-xs py-1 px-2 rounded-full">
            Badge
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="card hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          {getCategoryBadge()}
        </div>
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label={`Learn more about ${title}`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      
      <div className="text-zinc-400 text-sm mb-2">
        {organization}
      </div>
      
      <div className="flex items-center text-zinc-500 text-sm mb-3">
        <Calendar size={14} className="mr-1" />
        {date}
      </div>
      
      {description && (
        <p className="text-zinc-400 text-sm">{description}</p>
      )}
    </motion.div>
  );
};

export default AchievementCard;