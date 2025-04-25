import React from 'react';
import { Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TeamProjectCard from '../ui/TeamProjectCard';
import { teamProjects } from '../../data/portfolio';

const TeamworkSection: React.FC = () => {
  return (
    <section id="teamwork" className="section-container">
      <SectionHeading 
        title="Teamwork & Collaboration" 
        subtitle="Projects where I worked as part of a team, showcasing my collaborative skills."
        icon={Users}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamProjects.map((project, index) => (
          <TeamProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamworkSection;