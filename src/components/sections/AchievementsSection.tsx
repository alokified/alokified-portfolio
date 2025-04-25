import React from 'react';
import { Award, Medal } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AchievementCard from '../ui/AchievementCard';
import { achievements } from '../../data/portfolio';

const AchievementsSection: React.FC = () => {
  const certifications = achievements.filter(item => item.category === 'certification');
  const achievementItems = achievements.filter(item => item.category !== 'certification');

  return (
    <section id="achievements" className="section-container">
      <SectionHeading 
        title="Achievements & Certifications" 
        subtitle="Recognitions and professional certifications that showcase my expertise"
        icon={Award}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3),0_0_30px_rgba(157,0,255,0.2),0_0_45px_rgba(255,0,234,0.1)]" />
          <div className="card relative">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Medal className="text-primary-400" />
              <span>Certifications</span>
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <AchievementCard
                  key={cert.id}
                  achievement={cert}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,234,0.3),0_0_30px_rgba(157,0,255,0.2),0_0_45px_rgba(0,243,255,0.1)]" />
          <div className="card relative">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-accent-400" />
              <span>Achievements</span>
            </h3>
            
            <div className="space-y-4">
              {achievementItems.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;