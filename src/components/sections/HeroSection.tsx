import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Download, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolio';
import SocialIcon from '../ui/SocialIcon';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-16 flex items-center relative overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px' 
      }}
    >
      {/* Primary floating shapes */}
      <motion.div 
        className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-indigo-500/10 rounded-[60%] blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
          borderRadius: ["60%", "40%", "60%"]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-[55%] blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -45, 0],
          borderRadius: ["55%", "45%", "55%"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      
      {/* Secondary floating shapes */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-[45%] blur-3xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 60, 0],
          borderRadius: ["45%", "35%", "45%"]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-[65%] blur-3xl"
        animate={{
          y: [0, 35, 0],
          x: [0, -15, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -30, 0],
          borderRadius: ["65%", "50%", "65%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      
      {/* Content container */}
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-left">
              <span className="block mb-2">Hi, I'm </span>
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            
            <div className="h-12 md:h-14 mb-8">
              <TypeAnimation
                sequence={[
                  personalInfo.title.split('|')[0].trim(),
                  1000,
                  personalInfo.title,
                  1000,
                  `${personalInfo.title.split('|')[0].trim()} | ${personalInfo.title.split('|')[2].trim()}`,
                  1000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl bg-gradient-to-r from-primary-400 via-violet-400 to-purple-400 text-transparent bg-clip-text font-light"
              />
            </div>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-8">
              {personalInfo.description}
            </p>
            
            {/* Social links */}
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800/50"
                  aria-label={link.name}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SocialIcon name={link.icon} size={24} />
                </motion.a>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex gap-4">
              <motion.a 
                href="#contact" 
                className="btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href={personalInfo.resume} 
                className="btn-outline text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
          
          {/* Profile picture */}
          <motion.div 
            className="relative max-w-[60%] mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative rounded-full overflow-hidden group">
              <motion.div 
                className="absolute -inset-1.5 bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#ff00ea] rounded-full opacity-75 group-hover:opacity-100 transition duration-500"
                animate={{
                  rotate: [0, 360],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#ff00ea] rounded-full opacity-50 blur-md group-hover:opacity-75 transition duration-500"
                animate={{
                  rotate: [360, 0],
                  scale: [1.1, 0.9, 1.1],
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              {/* Dotted border */}
              <motion.div 
                className="absolute -inset-4 rounded-full"
                style={{
                  background: `repeating-conic-gradient(
                    from 0deg,
                    transparent 0deg 10deg,
                    rgba(0, 243, 255, 0.5) 10deg 15deg,
                    transparent 15deg 20deg,
                    rgba(157, 0, 255, 0.5) 20deg 25deg,
                    transparent 25deg 30deg,
                    rgba(255, 0, 234, 0.5) 30deg 35deg
                  )`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative rounded-full overflow-hidden border-2 border-zinc-800/50 aspect-square">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQEvAhuHetaUUw/profile-displayphoto-shrink_400_400/B4EZZr3fWRGYAk-/0/1745566431896?e=1750896000&v=beta&t=btieVwUc_BOitB9fhB1dNw3-zW1q317QdzSzADHNqYk"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-violet-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [180, 0, 180],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#projects" className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-2">
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;