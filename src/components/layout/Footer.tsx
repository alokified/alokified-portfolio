import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Mail, MapPin, Phone } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';
import { socialLinks, personalInfo, navLinks } from '../../data/portfolio';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div>
            <a href="#home" className="text-white font-bold text-xl font-jetbrains inline-block mb-4">
              <span className="text-primary-400">&lt;</span>
              Alok
              <span className="text-primary-400">/&gt;</span>
            </a>
            <p className="text-zinc-400 mb-6">
              Building innovative solutions with cutting-edge technology. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={link.name}
                >
                  <SocialIcon name={link.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-zinc-400 mb-4">
              Subscribe to my newsletter for updates on my latest projects and tech insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-primary-500 text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {year} Alok Shah. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
              <span>Back to top</span>
              <ChevronUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;