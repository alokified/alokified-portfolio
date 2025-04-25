import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, technologies, githubUrl, demoUrl, image } = project;

  return (
    <motion.div 
      className="card group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github size={18} />
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-6">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span 
            key={i} 
            className="text-xs py-1 px-2 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;