import React from 'react';
import { BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import CodingProfileCard from '../ui/CodingProfileCard';
import { codingProfiles } from '../../data/portfolio';

const CompetitiveSection: React.FC = () => {
  return (
    <section id="competitive" className="section-container bg-zinc-950">
      <SectionHeading 
        title="Competitive Programming" 
        subtitle="Check out my profiles on various competitive programming platforms."
        icon={BookOpen}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {codingProfiles.map((profile, index) => (
          <CodingProfileCard
            key={profile.platform}
            profile={profile}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CompetitiveSection;