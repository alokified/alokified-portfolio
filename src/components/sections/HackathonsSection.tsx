import React from 'react';
import { Lightbulb } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import HackathonCard from '../ui/HackathonCard';
import { hackathons } from '../../data/portfolio';

const HackathonsSection: React.FC = () => {
  return (
    <section id="hackathons" className="section-container">
      <SectionHeading 
        title="Hackathon Projects" 
        subtitle="Competitions where I collaborated with others to build innovative solutions within tight deadlines."
        icon={Lightbulb}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hackathon, index) => (
          <HackathonCard
            key={hackathon.id}
            hackathon={hackathon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default HackathonsSection;