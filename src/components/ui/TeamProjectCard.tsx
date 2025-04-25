import React from 'react';
import { Users, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { TeamProject } from '../../types';
import { useState } from 'react';

interface TeamProjectCardProps {
  project: TeamProject;
  index: number;
}

const TeamProjectCard: React.FC<TeamProjectCardProps> = ({ project, index }) => {
  const { title, description, role, teamSize, contributions } = project;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="card hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="flex items-center gap-1 bg-zinc-800 text-zinc-300 text-xs py-1 px-2 rounded-full">
          <Users size={12} />
          Team of {teamSize}
        </span>
      </div>
      
      <p className="text-zinc-400 mb-4">{description}</p>
      
      <div className="text-zinc-300 mb-4">
        <span className="text-zinc-500">Role: </span>{role}
      </div>
      
      <div>
        <button 
          className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          My Contributions
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expanded && (
          <motion.ul 
            className="mt-3 ml-4 space-y-2 text-zinc-400"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {contributions.map((contribution, i) => (
              <li key={i} className="text-sm list-disc list-outside ml-4">
                {contribution}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
};

export default TeamProjectCard;