import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Lovely Professional University",
      period: "2020 - 2024",
      details: "Specialized in Computer Science with focus on software development and engineering principles."
    },
    {
      degree: "Intermediate (12th)",
      institution: "Higher Secondary School",
      period: "2018 - 2020",
      details: "Completed intermediate education with focus on Science and Mathematics."
    },
    {
      degree: "Matriculation (10th)",
      institution: "Secondary School",
      period: "2016 - 2018",
      details: "Completed secondary education with distinction."
    }
  ];

  return (
    <section id="education" className="section-container">
      <SectionHeading 
        title="Education" 
        subtitle="My academic journey and qualifications"
        icon={GraduationCap}
      />
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="card relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Floating shapes */}
            <motion.div
              className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-violet-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative">
              <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
              <p className="text-primary-400 mb-2">{edu.institution}</p>
              <p className="text-sm text-zinc-400 mb-3">{edu.period}</p>
              <p className="text-zinc-300">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;