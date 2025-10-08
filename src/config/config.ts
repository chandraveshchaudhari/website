// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Chandravesh Chaudhari',
    title: 'Assistant Professor | Multimodal AI',
    image: getAsset('images/profile.png'), // Resolves to /profile.png or /base-path/profile.png
    email: 'hello@example.com',
    location: 'India',
  },

  seo: {
    title: 'Chandravesh Chaudhari',
    description: 'Official website showcasing education, research, projects and experience.',
  },

  animatedText: ['AI Researcher', 'Educator', 'Speaker', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Contact', url: '/contact' },
  ],

  education: [
    {
      degree: 'Ph.D. in AI',
      institution: 'XYZ University',
      year: '2025',
    },
    {
      degree: 'M.Tech in Computer Science',
      institution: 'ABC Institute',
      year: '2020',
    },
  ],

  experience: [
    {
      role: 'Assistant Professor',
      company: 'ABC University',
      duration: '2020 - Present',
    },
  ],

  projects: [
    {
      title: 'AI Dashboard',
      description: 'A visualization tool for business intelligence.',
      link: 'https://github.com/yourproject',
    },
  ],

  research: [
    {
      title: 'Multimodal Learning Techniques',
      journal: 'IJCAI 2025',
      link: '#',
    },
  ],

  books: [
    {
      title: 'Book on Multimodal AI',
      description: 'A comprehensive guide to multimodal learning techniques and their applications.',
      image: getAsset('book1.jpg'), // Resolves to /book1.jpg
      link: 'https://example.com/book1',
    },
    {
      title: 'Advanced Machine Learning',
      description: 'An in-depth exploration of advanced ML algorithms and their real-world use cases.',
      image: getAsset('book2.jpg'), // Resolves to /book2.jpg
      link: 'https://example.com/book2',
    },
  ],

  contact: {
    email: 'hello@example.com',
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
  },
};

export default siteConfig;