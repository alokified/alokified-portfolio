import React from 'react';
import { ExternalLink, BarChart, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { CodingProfile } from '../../types';

interface CodingProfileCardProps {
  profile: CodingProfile;
  index: number;
}

const CodingProfileCard: React.FC<CodingProfileCardProps> = ({ profile, index }) => {
  const { platform, username, url, rating, solved } = profile;

  // Define platform-specific colors
  const getPlatformColor = () => {
    switch (platform) {
      case 'LeetCode':
        return 'from-amber-600 to-amber-800';
      case 'Codeforces':
        return 'from-blue-600 to-blue-800';
      case 'HackerRank':
        return 'from-green-600 to-green-800';
      case 'CodeChef':
        return 'from-red-600 to-red-800';
      default:
        return 'from-primary-600 to-primary-800';
    }
  };

  return (
    <motion.div 
      className="card relative overflow-hidden hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Platform badge */}
      <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${getPlatformColor()} transform rotate-45 translate-x-3 -translate-y-3`} />
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold mb-1">{platform}</h3>
          <p className="text-zinc-400 text-sm">{username}</p>
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="z-10 text-zinc-500 hover:text-white transition-colors"
          aria-label={`Visit ${platform} profile`}
        >
          <ExternalLink size={16} />
        </a>
      </div>
      
      <div className="mt-4 space-y-2">
        {rating && (
          <div className="flex items-center text-sm">
            <BarChart size={14} className="mr-2 text-zinc-500" />
            <span className="text-zinc-300">{rating}</span>
          </div>
        )}
        
        {solved && (
          <div className="flex items-center text-sm">
            <Code size={14} className="mr-2 text-zinc-500" />
            <span className="text-zinc-300">{solved} problems solved</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CodingProfileCard;