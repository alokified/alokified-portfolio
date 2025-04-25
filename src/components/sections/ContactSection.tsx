import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolio';
import SocialIcon from '../ui/SocialIcon';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-4">
          <span className="p-3 rounded-full bg-zinc-900/80 text-primary-400">
            <Mail size={24} />
          </span>
        </div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-success-900/20 border border-success-700/30 rounded-lg p-4 text-success-400">
                <p>Your message has been sent successfully! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-zinc-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-zinc-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-zinc-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-primary-500 text-white resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Contact info */}
          <motion.div 
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card mb-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-400 mb-1">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div>
                  <p className="text-zinc-400 mb-1">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                
                <div>
                  <p className="text-zinc-400 mb-1">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Connect with Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/70"
                  >
                    <SocialIcon name={link.icon} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;