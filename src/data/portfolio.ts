import { 
  Project, 
  CodingProfile, 
  Achievement, 
  Hackathon, 
  Extracurricular,
  SocialLink,
  NavLink
} from '../types';

import { Github, Linkedin, Twitter, Mail, Code, Briefcase, Award, GraduationCap, Lightbulb, BookOpen, DivideIcon as LucideIcon } from 'lucide-react';

export const personalInfo = {
  name: 'Alok Shah',
  title: 'Computer Science Engineer | Full Stack Developer| Web Developer',
  description: 'Passionate about creating secure, performant web experiences.',
  location: 'Nagpur, Maharashtra, India',
  email: 'aloksha951@gmail.com',
  phone: '+91 9022882705',
  resume: '/resume.pdf'
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Competitive', href: '#competitive' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Extracurricular', href: '#extracurricular' },
  { name: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: 'p1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/alok/ecommerce-platform',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'personal',
    featured: true
  },
  {
    id: 'p2',
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/alok/chat-app',
    demoUrl: 'https://chat-app-demo.example.com',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    category: 'personal'
  },
  {
    id: 'p3',
    title: 'AI-Powered Task Manager',
    description: 'Task management application with AI capabilities for prioritization and time estimation.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/alok/ai-task-manager',
    technologies: ['React', 'Python', 'Flask', 'TensorFlow', 'PostgreSQL'],
    category: 'academic',
    featured: true
  },
  {
    id: 'p4',
    title: 'Advanced Encryption System',
    description: 'Implementation of a hybrid encryption system combining symmetric and asymmetric algorithms.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/alok/encryption-system',
    technologies: ['C++', 'OpenSSL', 'Cryptography'],
    category: 'academic'
//////  {
    id: 'p5',
    title: 'Portfolio Website for Client',
    description: 'Designed and developed a personalized portfolio website for a photographer client.',
    image: 'https://images.pexels.com/photos/3584967/pexels-photo-3584967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://photography-portfolio.example.com',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Cloudinary'],
    category: 'freelance'
  },
  {
    id: 'p6',
    title: 'Restaurant Management System',
    description: 'Comprehensive restaurant management system with order tracking, inventory management, and analytics.',
    image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/alok/restaurant-system',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MySQL'],
    category: 'freelance'
  }
];

export const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'alokified',
    url: 'https://leetcode.com/alokified/',
    
    solved: 22,
    icon: 'LeetCode'
  },
  {
    platform: 'Codeforces',
    username: 'alokshah',
    url: 'https://codeforces.com/profile/alok_cp',
    rating: '',
    solved: 3,
    icon: 'Codeforces'
  },
  {
    platform: 'HackerRank',
    username: 'alokshah951',
    url: 'https://www.hackerrank.com/profile/alokshah951',
    rating: '1 Star in Problem Solving',
    icon: 'HackerRank'
  },
  {
    platform: 'CodeChef',
    username: 'alok_chef',
    url: 'https://www.codechef.com/users/alok_chef',
    rating: '',
    icon: 'CodeChef'
  }
];

export const achievements = [
  {
    id: 'a1',
    title: 'Programming in C++: A Hands-on Introduction',
    organization: 'Amazon Web Services',
    date: 'December 2024',
    description: 'This specialization is intended for people without programming experience who seek to develop C++ programming skills and learn about the underlying computer science concepts that will allow them to pick up other programming languages quickly. In these four courses, you will cover everything from fundamentals to objectoriented design. These topics will help prepare you to write anything from small programs to automate repetitive tasks to larger applications, giving you enough understanding of C++ to tackle more specialized topics such as Data Science and Artificial Intelligence.',
    url: 'https://www.coursera.org/account/accomplishments/specialization/7BCUNQQDR7ZP',
    category: 'certification'
  },
  {
    id: 'a2',
    title: 'Server side JavaScript with Node.js',
    organization: 'Google Cloud',
    date: 'October 2024',
    description: 'Professional certification for server side JavaScript with Node.js',
    url: 'https://www.coursera.org/account/accomplishments/verify/SK5YHM7TLHCH',
    category: 'certification'
  },
  {
    id: 'a3',
    title: '1st Place - University Hackathon',
    organization: 'Tech University',
    date: 'March 2024',
    description: 'Won first place for developing an innovative solution for educational accessibility.',
    category: 'award'
  },
  {
    id: 'a4',
    title: 'Best Security Implementation Award',
    organization: 'CyberSec Conference',
    date: 'July 2024',
    description: 'Recognized for outstanding security implementation in web applications.',
    category: 'award'
  },
  {
    id: 'a5',
    title: 'GitHub Arctic Code Vault Contributor',
    organization: 'GitHub',
    date: '2024',
    description: 'Contributed code to repositories archived in the GitHub Arctic Code Vault.',
    url: 'https://archiveprogram.github.com/',
    category: 'badge'
  }
];

export const hackathons = [
  {
    id: 'h1',
    name: 'Apna college Hackathon',
    date: 'May 2024',
    projectName: 'E-Commerce Shopping Website',
    role: 'Full Stack Developer',
    result: 'Final Round',
    description: 'Developed a full-stack e-commerce website with user authentication, product catalog, and payment processing.',
    teamSize: 4
  },
  {
    id: 'h2',
    name: 'Smart India Hackathon',
    date: 'August 2024',
    projectName: 'DDoS Detection System',
    role: 'Backend Developer',
    result: 'Qualified',
    description: 'Created a Traffic Management System to detect and mitigate DDoS attacks using machine learning.',
    teamSize: 3
  },
  {
    id: 'h3',
    name: 'College Hackathon',
    date: 'November 2024',
    projectName: 'MediTrack',
    role: 'Frontend Developer & UI/UX',
    description: 'Built a medication tracking system with reminders and health analytics.',
    teamSize: 4
  }
];

export const extracurriculars = [
  {
    id: 'e1',
    title: 'Coding Club Member',
    organization: 'University Tech Club',
    description: 'Led weekly coding sessions and workshops for junior students.',
    period: '2024 - Present'
  },
  {
    id: 'e2',
    title: 'Open Source Contributor',
    description: 'Active contributor to several open-source projects including React libraries and Node.js tools.',
    period: '2022 - Present'
  },
  {
    id: 'e3',
    title: 'Volunteer Web Developer',
    organization: 'Local Non-Profit',
    description: 'Developed and maintained websites for local Soul Foundation non-profit organization.',
    period: '2023 - Present'
  },
  {
    id: 'e4',
    title: 'Chess Player',
    description: 'Competitive chess player with participation in regional tournaments.',
    period: '2021 - Present'
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/alokified',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/alokshah951',
    icon: 'Linkedin'
  },
 
  {
    name: 'Email',
    url: 'mailto:alokshah951@gmail.com',
    icon: 'Mail'
  }
];

export const sectionIcons = {
  projects: Code,
  competitive: BookOpen,
  achievements: Award,
  education: GraduationCap,
  hackathons: Lightbulb,
  extracurricular: Briefcase
};