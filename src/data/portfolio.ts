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
  title: 'Computer Science Engineer | Full Stack Developer | Open Source Enthusiast',
  description: 'Passionate about creating secure, performant web experiences.',
  location: 'New Delhi, India',
  email: 'alok@example.com',
  phone: '+91 9876543210',
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
  },
  {
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
    username: 'alok_coder',
    url: 'https://leetcode.com/alok_coder/',
    rating: '1850+ Rating',
    solved: 450,
    icon: 'LeetCode'
  },
  {
    platform: 'Codeforces',
    username: 'alok_cp',
    url: 'https://codeforces.com/profile/alok_cp',
    rating: 'Specialist (1400+)',
    solved: 300,
    icon: 'Codeforces'
  },
  {
    platform: 'HackerRank',
    username: 'alok_hr',
    url: 'https://www.hackerrank.com/alok_hr',
    rating: '5 Star in Problem Solving',
    icon: 'HackerRank'
  },
  {
    platform: 'CodeChef',
    username: 'alok_chef',
    url: 'https://www.codechef.com/users/alok_chef',
    rating: '4 Star (1800+)',
    icon: 'CodeChef'
  }
];

export const achievements = [
  {
    id: 'a1',
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: 'December 2024',
    description: 'Advanced certification for designing distributed systems on AWS.',
    url: 'https://aws.amazon.com/certification/',
    category: 'certification'
  },
  {
    id: 'a2',
    title: 'Google Cloud Professional Developer',
    organization: 'Google Cloud',
    date: 'October 2024',
    description: 'Professional certification for developing applications on Google Cloud Platform.',
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
    name: 'Tech4Good Hackathon',
    date: 'May 2024',
    projectName: 'AccessiBuddy',
    role: 'Full Stack Developer',
    result: '1st Place',
    description: 'Developed an application to assist people with disabilities navigate public spaces.',
    teamSize: 4
  },
  {
    id: 'h2',
    name: 'FinTech Innovation Challenge',
    date: 'August 2024',
    projectName: 'SmartBudget',
    role: 'Backend Developer',
    result: 'Top 5 Finalist',
    description: 'Created a financial management tool with AI-powered insights.',
    teamSize: 3
  },
  {
    id: 'h3',
    name: 'Healthcare Hackathon',
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
    title: 'Coding Club Leader',
    organization: 'University Tech Club',
    description: 'Led weekly coding sessions and workshops for junior students.',
    period: '2023 - Present'
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
    description: 'Developed and maintained websites for local non-profit organizations.',
    period: '2023 - Present'
  },
  {
    id: 'e4',
    title: 'Chess Player',
    organization: 'University Chess Club',
    description: 'Competitive chess player with participation in regional tournaments.',
    period: '2021 - Present'
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/alok',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/alok',
    icon: 'Linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/alok',
    icon: 'Twitter'
  },
  {
    name: 'Email',
    url: 'mailto:alok@example.com',
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