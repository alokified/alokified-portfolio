import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ExtracurricularCard from '../ui/ExtracurricularCard';
import { extracurriculars } from '../../data/portfolio';

const ExtracurricularSection: React.FC = () => {
  return (
    <section id="extracurricular" className="section-container bg-black">
      <SectionHeading 
        title="Extracurricular Activities" 
        subtitle="Activities and interests outside of my technical work that shape who I am."
        icon={Briefcase}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {extracurriculars.map((extracurricular, index) => (
          <ExtracurricularCard
            key={extracurricular.id}
            extracurricular={extracurricular}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExtracurricularSection;