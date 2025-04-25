import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolio';

type ProjectCategory = 'all' | 'personal' | 'academic' | 'freelance';

const ProjectsSection: React.FC = () => {
  const [category, setCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'personal', label: 'Personal' },
    { value: 'academic', label: 'Academic' },
    { value: 'freelance', label: 'Freelance' },
  ];

  return (
    <section id="projects" className="section-container">
      <SectionHeading 
        title="My Projects" 
        subtitle="Here are some of my recent projects that showcase my skills and interests."
        icon={Code}
      />
      
      {/* Category filter */}
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              category === cat.value
                ? 'bg-primary-500 text-white'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
      
      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12 text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No projects found in this category.
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;