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
      institution: 'Christ University, Bangalore',
      degree: 'Doctor of Philosophy (PhD)',
      year: '2020–2025',
      image: getAsset('assets/images/education-page/Christ_University.png'),
      description: [
        'Stock prediction using multimodal learning (tabular, sentiment, time-series, news video)',
      ],
    },
    {
      institution: 'Indira Gandhi National Open University',
      degree: 'Post Graduate Diploma in Computer Applications',
      year: '2017–2018',
      image: getAsset('assets/images/education-page/ignouLogo.png'),
      description: [
        'Focused on C programming, systems analysis, web design',
        'Learned computer organisation, database management, Java programming',
      ],
    },
    {
      institution: 'Chaudhary Charan Singh University, Meerut',
      degree: "Master's of Commerce – Finance",
      year: '2015–2017',
      image: getAsset('assets/images/education-page/CCSU-Logo.jpg'),
      description: [
        'Studied managerial economics, statistical analysis',
        'Focus on security analysis, portfolio & financial management',
      ],
    },
  ],

  // ✅ Add MOOC cards here
  moocscards: [
    {
      title: "TensorFlow Developer Professional Certificate",
      cardImage: getAsset("assets/images/education-page/tensorflow.png"),
      moocLink: "https://www.coursera.org/account/accomplishments/professional-cert/LDCLR9ZZJXDD",
    },
    {
      title: "Deep Learning Specialization (DeepLearning.AI)",
      cardImage: getAsset("assets/images/education-page/deeplearning.png"),
      moocLink: "https://www.coursera.org/account/accomplishments/specialization/NKYUMBACQN63",
    },
    {
      title: "Mathematics for Machine Learning Specialization (Imperial College London)",
      cardImage: getAsset("assets/images/education-page/math.png"),
      moocLink: "https://www.coursera.org/account/accomplishments/specialization/6RUU8V5QKFAP",
    },
  ],

  // ✅ Experience section updated
  experience: [
    {
      title: "Assistant Professor",
      cardImage: getAsset("assets/images/experience-page/Christ_University.png"),
      place: "Christ University",
      time: "(May 2025 – Present)",
      desp: `<li>Teaching: Predictive Analytics, Financial Forecasting</li>
             <li>Developed automated Excel assignment checker</li>`,
    },
    {
      title: "Teaching Assistant",
      cardImage: getAsset("assets/images/experience-page/Christ_University.png"),
      place: "Christ University",
      time: "(May 2022 – Dec 2024)",
      desp: `<li>Courses handled: Computer Applications in Business, Excel, E-commerce</li>
             <li>Guided practical data analysis projects</li>`,
    },
  ],

  // ✅ Projects section updated
  projects: [
    {
      title: "MultiModal Machine Learning AutoML",
      cardImage: getAsset("assets/images/project-page/Brain-AutoML.png"),
      description: "BMMA framework is capable of scaling to multiple modalities such as tabular, sentiment data, time series, and computer vision data...",
      tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
      Previewlink: "",
      Githublink: "https://github.com/chandraveshchaudhari/brain-ai",
    },
    {
      title: "Hybrid Subset Feature Selection and Importance Framework",
      cardImage: getAsset("assets/images/project-page/HSFSIframework.png"),
      description: "Implements MultiSURF, ReliefF, SURF, and more for scalable feature selection...",
      tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
      Previewlink: "",
      Githublink: "https://github.com/chandraveshchaudhari/hybrid-feature-selection",
    },
    {
      title: "systematic-reviewpy",
      cardImage: getAsset("assets/images/project-page/systematic-reviewpy.png"),
      description: "An open-source Python framework for systematic review based on PRISMA",
      tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
      Previewlink: "",
      Githublink: "https://github.com/chandraveshchaudhari/systematic-reviewpy",
    },
  ],


  research: [
    {
      title: "Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review",
      authors: "Chandravesh Chaudhari, Geetanjali Purswani",
      conferences: "Congress on Intelligent Systems, Springer Nature Singapore",
      researchYr: 2022,
      image: "/images/research/review_paper.png",
      citation: {
        vancouver:
          "Chaudhari, C., Purswani, G. (2023). Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review. In: Kumar, S., Sharma, H., Balachandran, K., Kim, J.H., Bansal, J.C. (eds) Third Congress on Intelligent Systems. CIS 2022. Lecture Notes in Networks and Systems, vol 608. Springer, Singapore. https://doi.org/10.1007/978-981-19-9225-4_17",
      },
      abstract:
        "This paper systematically reviews the literature related to stock price prediction systems...",
      link: "#", // optional: external link if available
    },
    {
      title: "Hybrid Subset Feature Selection And Importance Framework",
      authors: "Chandravesh Chaudhari, Geetanjali Purswani",
      conferences:
        "2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023",
      researchYr: 2023,
      image: "/images/research/subset.png",
      citation: {
        vancouver:
          "C. Chaudhari and G. Purswani, \"Hybrid Subset Feature Selection And Importance Framework,\" 2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023, pp. 1-6, doi: 10.1109/InC457730.2023.10262828.",
      },
      abstract:
        "Feature selection algorithms are used in high-dimensional data to remove noise...",
      link: "#",
    },
  ],

  books: [
    {
      title: 'Machine Learning for Business',
      description: 'Machine Learning for Business is an interactive and practical learning hub that connects business strategy with modern machine learning techniques.',
      image: getAsset('images/book_cover_machine_learning_for_business.png'), // Resolves to /book1.jpg
      link: 'https://chandraveshchaudhari.github.io/Machine_Learning_For_Business/intro.html#',
    },
    {
      title: 'Programming for Machine Learning and Business',
      description: 'This interactive book is designed to help learners, researchers, and professionals bridge the gap between Python programming, machine learning fundamentals, and real-world business applications.',
      image: getAsset('images/Book_Cover_programming_for_business.png'), // Resolves to /book2.jpg
      link: 'https://chandraveshchaudhari.github.io/Programming_for_Business/intro.html',
    },
  ],

  contact: {
    email: 'chandraveshchaudhari@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chandravesh-chaudhari/',
    github: 'https://github.com/chandraveshchaudhari',
  },
};

export default siteConfig;