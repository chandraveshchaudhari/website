// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Sai Sathwik S',
    title: 'Second-Year Economics Student',
    image: getAsset('images/profile.png'),
    description:
      'Sai Sathwik S is a second-year Economics student with a strong interest in data-driven decision making, public policy, and business analytics. He actively explores how economics connects with technology, AI, and modern business environments. His academic journey includes hands-on research work, participation in national business fests, and practical exposure to analytical tools such as Excel, Python, and data visualization techniques.\n\n' +
      'As a student at Christ University, Sathwik has worked on multiple coursework projects involving microeconomics, statistics, and financial markets. He is deeply interested in understanding how economic theory shapes real-world business strategy and policy-making.\n\n' +
      'Beyond academics, he continues to explore interdisciplinary fields that connect economics with technology—including machine learning applications, digital economy trends, and applied econometrics.',
    tagline: 'Exploring economics through data, technology, and purpose.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Sai Sathwik S - Economics Student',
    description:
      "Portfolio website showcasing academics, projects, research interests, and achievements of Sai Sathwik S.",
  },

  animatedText: ['Economics Student', 'Research Enthusiast', 'Business Fest Competitor', 'Learner'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Academics', url: '/education' },
    { name: 'Achievements', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Contact', url: '/contact' },
  ],

  blogs: [
    {
      title: 'Understanding Rural Healthcare Accessibility',
      url: getAsset('static_page/rural_healthcare_blog.html'),
    },
  ],

  education: [
    {
      institution: 'Christ University, Bangalore',
      degree: 'Bachelor of Arts in Economics',
      year: '2023–2026',
      image: getAsset('images/education/Christ_University.png'),
      description: [
        'Coursework: Microeconomics, Macroeconomics, Statistics, Mathematical Methods for Economics',
        'Ongoing learning in applied econometrics and economic policy analysis',
      ],
    },
  ],

  certifications: [
    {
      title: 'Excel Crash Course (CFI)',
      cardImage: getAsset('images/education/Certifications/download.svg'),
      file: getAsset('images/education/Certifications/cfi_excel_crash_course.pdf'),
    },
    {
      title: 'Python Essentials (SoloLearn)',
      file: getAsset('images/education/Certifications/sololearn_python.jpg'),
    },
    {
      title: 'Statistics Foundations (Coursera)',
      cardImage: getAsset('images/education/Certifications/download.svg'),
      file: getAsset('images/education/Certifications/statistics_foundations.pdf'),
    },
  ],

  experience: [
    {
      title: 'National-Level Business Fest Competitor',
      cardImage: getAsset('images/experience/business_fest.png'),
      place: 'Various Universities Across India',
      time: '(2023 – Present)',
      desp: [
        'Participated in business strategy, marketing, and finance events',
        'Worked on case analyses and rapid problem-solving tasks',
      ],
    },
    {
      title: 'Research & Coursework Projects',
      cardImage: getAsset('images/experience/research_icon.png'),
      place: 'Christ University',
      time: '(2023 – Present)',
      desp: [
        'Completed research assignments in micro and macroeconomic analysis',
        'Explored data analytics applications in economics',
      ],
    },
  ],

  projects: [
    {
      title: 'Rural Medical Accessibility App Concept',
      cardImage: getAsset('images/project/health_app.png'),
      description:
        'Designed a conceptual model for a fast-response pharmaceutical delivery app aimed at rural areas. The project explored logistics, feasibility, and technology integration.',
      Githublink: '#',
    },
    {
      title: 'India Inflation Trend Analysis',
      cardImage: getAsset('images/project/inflation.png'),
      description:
        'Data-driven analysis of India’s inflation patterns using publicly available datasets. Includes trend forecasting and policy insights.',
      Githublink: '#',
    },
  ],

  research: [
    {
      title: 'A Study on Youth Digital Consumption Patterns',
      authors: 'Sai Sathwik S',
      conferences: 'Undergraduate Research Project',
      researchYr: 2024,
      image: getAsset('/images/research/digital_consumption.png'),
      abstract:
        'This study explores how young adults engage with digital platforms and how consumption patterns are shaped by economic and social influences.',
    },
  ],

  books: [],

  contact: {
    email: 'saisathwiks@example.com',
    linkedin: 'https://www.linkedin.com/in/sai-sathwik/',
    github: 'https://github.com/saisathwik',
  },
};

export default siteConfig;
