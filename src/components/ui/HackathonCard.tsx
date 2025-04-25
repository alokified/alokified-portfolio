import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Hackathon } from '../../types';

interface HackathonCardProps {
  hackathon: Hackathon;
  index: number;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon, index }) => {
  const { name, date, projectName, role, result, description, teamSize } = hackathon;

  return (
    <motion.div 
      className="card hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          {result && (
            <span className="flex items-center gap-1 bg-accent-900/50 text-accent-400 text-xs py-1 px-2 rounded-full">
              <Trophy size={12} />
              {result}
            </span>
          )}
        </div>
        <p className="text-primary-400 font-medium">{projectName}</p>
      </div>
      
      <div className="space-y-2 text-sm text-zinc-400">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-zinc-500" />
          <span>{date}</span>
        </div>
        
        {role && (
          <div className="flex items-start gap-2">
            <span className="text-zinc-500">Role:</span>
            <span>{role}</span>
          </div>
        )}
        
        {teamSize && (
          <div className="flex items-center gap-2">
            <Users size={14} className="text-zinc-500" />
            <span>Team of {teamSize}</span>
          </div>
        )}
      </div>
      
      {description && (
        <div className="mt-4 pt-4 border-t border-zinc-800/50">
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      )}
    </motion.div>
  );
};

export default HackathonCard;