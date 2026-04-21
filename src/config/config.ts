// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

// Central remote logo URL (load once and reuse)
const remoteLogo = 'https://raw.githubusercontent.com/chandraveshchaudhari/chandraveshchaudhari/b4b4c8ff7b7b9747e3c8a67a2ab561e4aae7d7df/data/logo.png';

const siteConfig = {
  personal: {
    name: 'Dr. Chandravesh Chaudhari',
    title: 'Assistant Professor | Multimodal AI Researcher',
    image: {
      src: getAsset('images/profile.png'), // Resolves to /profile.png or /base-path/profile.png
      fallback: remoteLogo,
    },
    description: 'Chandravesh Chaudhari, Ph.D. is an applied researcher and practitioner building production-ready machine learning systems for finance, decision intelligence, and research automation. He combines rigorous academic methods with practical engineering to deliver reproducible, scalable solutions used in experiments and prototypes.\n\n' +
      'At Christ University (School of Business and Management), he teaches predictive analytics, financial forecasting, and applied data science. He mentors student research, leads curriculum development, and helps teams transition models from research code to reproducible pipelines.\n\n' +
      'He holds a Ph.D. and a Masters in Finance, and has multiple industry certifications in deep learning and applied analytics. His research emphasises multimodal learning, AutoML, and finance-oriented forecasting, with a strong focus on productionization, evaluation, and reproducibility.',
    tagline: 'Empowering business through data-driven intelligence.',
  location: 'Bangalore, India',
  },

  seo: {
    title: "Dr. Chandravesh Chaudhari - Assistant Professor & AI Researcher",
    description: 'Official website showcasing Dr. Chandravesh Chaudhari\'s education, research, projects and experience.',
  },

  animatedText: ['Multimodal Machine Learning', 'Decision Fusion', 'Hybrid Systems', 'Local LLMs', 'Finance Applications', 'AutoML', 'Literature Review Automation'],

navigation: [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'Research', url: '/research' },
  { name: 'Education', url: '/education' },
  { name: 'Experience', url: '/experience' },
  { name: 'Blogs', url: '/blogs' },
  { name: 'Resume', url: '/resume' },
  { name: 'Contact', url: '/contact' },
],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Project Management Mastery',
      url: getAsset('static_page/project_management_blog.html'),
    },
  ],


  education: [
    {
      institution: 'Christ University, Bangalore',
      degree: 'Doctor of Philosophy (PhD) in Commerce',
      department: 'Department of Commerce',
      year: 'June 2020 – September 2025',
      image: getAsset('images/education/Christ_University.png'),
      guide: 'Dr. Geetanjali Purswani',
      thesisTitle: 'Advances on Stock Price Prediction Using Machine Learning',
      thesisLink: 'http://hdl.handle.net/10603/680165',
      description: [
        'Thesis: Advances on Stock Price Prediction Using Machine Learning',
      ],
      keyContributions: [
        'Developed novel multimodal representation and fusion techniques (early, late, hybrid, and decision-level fusion) combining tabular financial indicators, time-series data, and LLM-generated sentiment, significantly improving multi-horizon stock prediction accuracy and robustness.',
        'Integrated tabular financial indicators, time-series stock data, and LLM-driven sentiment insights into unified multimodal representations.',
        'Representation Learning for Structured Data: Developed advanced embeddings and encodings for structured financial data to improve downstream predictive performance.',
        'Designed temporal alignment methods and advanced embeddings for heterogeneous data sources (intra-day to event-driven signals), enabling effective multi-time-scale modeling.',
        'Information Fusion and Decision Fusion: Implemented early, intermediate, late fusion strategies and decision-level ensemble fusion for robust predictions.',
        'Conducted extensive ablation studies and feature importance analysis to identify optimal modality combinations, enhancing model interpretability and performance on financial datasets.',
        'Built reproducible ML pipelines using Apache Airflow and tracked experiments with MLflow; integrated local LLM inference on edge devices as part of hybrid fusion workflows.',
        'Applied feature-level, decision-level, and hybrid fusion techniques with rigorous model validation for financial forecasting tasks.',
      ],
    },
    {
      institution: 'Indira Gandhi National Open University',
      degree: 'Post Graduate Diploma in Computer Applications',
      year: '2017–2018',
      image: getAsset('images/education/ignouLogo.png'),
      description: [
        'Focused on C programming, systems analysis, web design',
        'Learned computer organisation, database management, Java programming',
      ],
    },
    {
      institution: 'Chaudhary Charan Singh University, Meerut',
      degree: "Masters of Commerce – Finance",
      year: '2015–2017',
      image: getAsset('images/education/CCSU-Logo.jpg'),
      description: [
        'Studied managerial economics, statistical analysis',
        'Focus on security analysis, portfolio & financial management',
      ],
    },
  ],

// ✅ Unified MOOC + Certifications Section
certifications: [
  // --- Deep Learning Specialization (DeepLearning.AI) ---
    // --- Deep Learning Specialization (DeepLearning.AI) ---
  {
    title: "Deep Learning Specialization (DeepLearning.AI)",
    specialization: true,
    file: getAsset("images/education/Certifications/deep learning specialisation- Neural Networks and Deep Learning Improving Deep Neural Networks Hyperparameter tuning Regularization and Optimization Structuring Machine Learning Projects Convolutional Neural Networks Sequence Models.pdf"),
    certificates: [
      { name: "Neural Networks and Deep Learning", file: getAsset("images/education/Certifications/deep learning Neural Networks and Deep Learning.pdf") },
  { name: "Improving Deep Neural Networks", file: getAsset("images/education/Certifications/deep learning- Improving Deep Neural Networks- Hyperparameter tuning, Regularization and Optimization.pdf") },
      { name: "Structuring Machine Learning Projects", file: getAsset("images/education/Certifications/deep learning ai structuring ML projects.pdf") },
      { name: "Convolutional Neural Networks", file: getAsset("images/education/Certifications/deep learning Convolutional Neural Networks.pdf") },
      { name: "Sequence Models", file: getAsset("images/education/Certifications/deep learning sequence models.pdf") },
    ],
  },

  // --- TensorFlow Developer Specialization (DeepLearning.AI) ---
  {
    title: "TensorFlow Developer Professional Certificate (DeepLearning.AI)",
    specialization: true,
    file: getAsset("images/education/Certifications/deep learning specialisation- Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning Convolutional Neural Networks in TensorFlow Natural Language Processing in TensorFlow Sequences, Time Series and Prediction.pdf"),
    certificates: [
      { name: "Introduction to TensorFlow for AI", file: getAsset("images/education/Certifications/deep learning ai Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning.pdf") },
      { name: "Convolutional Neural Networks in TensorFlow", file: getAsset("images/education/Certifications/deep learning Convolutional Neural Networks in TensorFlow.pdf") },
      { name: "Natural Language Processing in TensorFlow", file: getAsset("images/education/Certifications/deep learning ai Natural language processing in tensorflow.pdf") },
  { name: "Sequences, Time Series and Prediction", file: getAsset("images/education/Certifications/deeplearning ai- Sequences, time series and prediction.pdf") },
    ],
  },

  // --- Mathematics for Machine Learning (Imperial College London) ---
  {
    title: "Mathematics for Machine Learning Specialization (Imperial College London)",
    specialization: true,
    file: getAsset("images/education/Certifications/specialisation- mathematics for ML- 3 courses.pdf"),
    certificates: [
  { name: "Linear Algebra", file: getAsset("images/education/Certifications/Imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   L i n e a r  A l g e b r a.pdf") },
  { name: "Multivariate Calculus", file: getAsset("images/education/Certifications/imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   M u l t i v a r i a t e  C a l c u l u s.pdf") },
  { name: "Principal Component Analysis", file: getAsset("images/education/Certifications/Imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   P C A.pdf") },
    ],
  },

  // --- University of Michigan ---
  {
    title: "Introduction to Data Science in Python (University of Michigan)",
    file: getAsset("images/education/Certifications/university of michigan- Introduction to Data Science in Python.pdf"),
  },

  // --- Duke University ---
  {
    title: "Business Metrics for Data-Driven Companies (Duke University)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Duke university- Business metrics for Data-driven companies.pdf"),
  },
  {
    title: "Mastering Data Analysis in Excel (Duke University)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Duke university- Mastering Data Analysis in Excel.pdf"),
  },

  // --- Corporate Finance Institute (CFI) ---
  {
    title: "Accounting Fundamentals (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institure- accounting fundamentals.pdf"),
  },
  {
    title: "Excel Crash Course (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institute excel crash course.pdf"),
  },
  {
    title: "Reading Financial Statements (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institute reading financial statements.pdf"),
  },

  // --- SoloLearn Programming Courses ---
  {
    title: "Python 3 Tutorial (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn python 3 tutorial course.jpg"),
  },
  {
    title: "Java Tutorial (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn java tutorial course.jpg"),
  },
  {
    title: "SQL Fundamentals (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn sql fundamental course.jpg"),
  },
  {
    title: "HTML Fundamentals (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn HTML fundamentals course.jpg"),
  },

  // --- Additional Workshops & Achievements ---
  {
    title: "Intellectual Property Rights Workshop (Central University of Haryana)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/central university of haryana: intellectual property rights.pdf"),
  },
  {
    title: "Clarivate Journal Citation Reports Workshop",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Journal citation reports: clarivate.pdf"),
  },
  {
    title: "IEEE Bangalore: Role of IEEE in Engineering",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/IEEE bangalore section role of ieee in engineering.pdf"),
  },
  {
    title: "Microsoft AI Classroom Series",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Microsoft ai classroom series certificate.pdf"),
  },
  {
    title: "HackerRank SQL (Basic)",
    file: getAsset("images/education/Certifications/HackerRank SQL basic.png"),
  },
  {
    title: "Programming with JavaScript (Coursera)",
    file: 'https://coursera.org/verify/PS4RNI0GLH9C',
  },
],



  // ✅ Experience section updated
  experience: [
  {
    title: "Assistant Professor",
    cardImage: getAsset("images/experience/Christ_University.png"),
    place: "Christ University",
    time: "(May 2025 – Present)",
    desp: [
      "Teaching: Predictive Analytics, Financial Forecasting, and Applied Machine Learning",
      "Developed automated Excel assignment checker and reproducible grading pipelines",
      "Supervised student research projects that transitioned to shared GitHub repos and evaluation pipelines",
      "Led efforts to productionize experiment pipelines and reproducible notebooks for reproducible evaluation",
    ],
  },
  {
    title: "Teaching Assistant",
    cardImage: getAsset("images/experience/Christ_University.png"),
    place: "Christ University",
    time: "(May 2022 – Dec 2024)",
    desp: [
      "Courses handled: Computer Applications in Business, Excel, E-commerce",
      "Guided practical data analysis projects",
    ],
  },
],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Financial Variable Generation',
      cardImage: remoteLogo,
      description:
        'Generate financial ratios and derived fundamental-analysis variables from extracted financial statement data.',
    },
    {
      title: "BMMA: Multimodal AutoML",
      cardImage: getAsset("images/project/Brain-AutoML.png"),
      description: "Multimodal AutoML framework that orchestrates modality adapters, search, and robust evaluation for tabular, time-series, text, and image data.",
      Githublink: "https://github.com/chandraveshchaudhari/brain-ai",
      localPath: "projects/core-research/brain-ai",
      tech: ["Python", "PyTorch", "Scikit-learn", "MLflow", "Airflow"],
      role: "Lead author & architect",
      highlights: [
        "Designed modality adapters and evaluation harness for reproducible experiments",
        "Implemented decision-level ensemble fusion and meta-fusion techniques",
        "Integrated local LLMs to augment textual modality features",
      ],
    },
    {
      title: "Hybrid Feature Selection & Importance",
      cardImage: getAsset("images/project/HSFSIframework.png"),
      description: "Toolkit for hybrid subset selection and importance ranking for explainable ML across high-dimensional datasets.",
      Githublink: "https://github.com/chandraveshchaudhari/hybrid-feature-selection",
      localPath: "projects/core-research/hybrid-feature-selection",
      tech: ["Python", "NumPy", "Scikit-learn"],
      role: "Maintainer & algorithm designer",
      highlights: ["Implements MultiSURF/ReliefF/SURF variants", "Scales to high-dimensional tabular datasets"],
    },
    {
      title: "Financial Variable Generation",
      cardImage: remoteLogo,
      description: "Automated generation of financial indicators, corporate-event-aware features, and backtest-ready time-series feature pipelines.",
      Githublink: "https://github.com/chandraveshchaudhari/financial-variable-generation",
      localPath: "projects/core-research/financial-variable-generation",
      tech: ["Pandas", "NumPy"],
      role: "Developer",
      highlights: ["Event-aware feature windows", "Leakage-safe backtesting support"],
    },
    {
      title: "LitSynth: Literature Synthesis / Research Management System",
      cardImage: remoteLogo,
      description: "RAG + agentic flows and citation-graph intelligence for literature triage and automated synthesis of systematic reviews. Also maintained as a research management system for provenance-enabled workflows.",
      Githublink: "https://github.com/chandraveshchaudhari/research-management-system",
      localPath: "projects/core-research/research_management_system",
      tech: ["Local LLMs", "Python", "FAISS"],
      role: "Product owner",
      highlights: ["Automates PRISMA-style triage", "Citation graph extraction and summarization", "Provenance-aware ingestion pipelines"],
    },
    {
      title: "Resume and Portfolio Website",
      cardImage: remoteLogo,
      description: "Generator for rich resume content and portfolio pages with exportable PDF/HTML resume focused on applied-scientist roles.",
      Githublink: "https://github.com/chandraveshchaudhari/resume_website",
      localPath: "projects/personal-brand/resume_website",
      tech: ["TypeScript", "Next.js", "React"],
      role: "Owner & frontend lead",
      highlights: ["Enhanced resume export & structured project metadata for hiring signals"],
    },
    {
      title: "InstantGrade: Automated Evaluator",
      cardImage: remoteLogo,
      description: "Automated evaluation system for notebooks and Excel assignments with rubric-driven feedback generation.",
      Githublink: "https://github.com/chandraveshchaudhari/instantgrade",
      localPath: "projects/education/instantgrade",
      tech: ["Python", "nbformat", "Pandas"],
      role: "Contributor",
      highlights: ["Rubric-based scoring", "Automated feedback generation"],
    },
    {
      title: "JupyterBook + JupyterLite Template (v2)",
      cardImage: "https://raw.githubusercontent.com/chandraveshchaudhari/jupyterbook2_with_lite_template/main/media/images/banner_image.png",
      description: "Template combining JupyterBook with JupyterLite for interactive educational books with CI-ready builds and launchers.",
      Githublink: "https://github.com/chandraveshchaudhari/Jupyterbook_with_lite_template",
      localPath: "projects/tools/jupyterbook2_with_lite_template",
      tech: ["JupyterLite", "Markdown", "CI"],
      role: "Template maintainer",
      highlights: ["In-browser interactive examples", "Built-in Colab / binder launchers", "Automated build scripts"],
    },
  ],


  research: [
    {
      title: "Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review",
      authors: "Chandravesh Chaudhari, Geetanjali Purswani",
      conferences: "Congress on Intelligent Systems, Springer Nature Singapore",
      researchYr: 2022,
      image: getAsset("/images/research/review_paper.png"),
      citation: {
        vancouver:
          "Chaudhari, C., Purswani, G. (2023). Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review. In: Kumar, S., Sharma, H., Balachandran, K., Kim, J.H., Bansal, J.C. (eds) Third Congress on Intelligent Systems. CIS 2022. Lecture Notes in Networks and Systems, vol 608. Springer, Singapore. https://doi.org/10.1007/978-981-19-9225-4_17",
      },
      abstract:
        "This paper systematically reviews the literature related to stock price prediction systems...",
      link: "https://link.springer.com/chapter/10.1007/978-981-19-9225-4_17", // optional: external link if available
    },
    {
      title: "Hybrid Subset Feature Selection And Importance Framework",
      authors: "Chandravesh Chaudhari, Geetanjali Purswani",
      conferences:
        "2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023",
      researchYr: 2023,
      image: getAsset("/images/research/subset.png"),
      citation: {
        vancouver:
          "C. Chaudhari and G. Purswani, \"Hybrid Subset Feature Selection And Importance Framework,\" 2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023, pp. 1-6, doi: 10.1109/InC457730.2023.10262828.",
      },
      abstract:
        "Feature selection algorithms are used in high-dimensional data to remove noise...",
      link: "https://ieeexplore.ieee.org/abstract/document/10262828",
    },
  ],

  books: [
    {
      title: 'Programming for Machine Learning and Business',
      description: 'This interactive book is designed to help learners, researchers, and professionals bridge the gap between Python programming, machine learning fundamentals, and real-world business applications.',
      image: getAsset('images/Book_Cover_programming_for_business.png'), // Resolves to /book2.jpg
      link: 'https://chandraveshchaudhari.github.io/Programming_for_Business/',
    },
    {
      title: 'Machine Learning for Business',
      description: 'Machine Learning for Business is an interactive and practical learning hub that connects business strategy with modern machine learning techniques.',
      image: getAsset('images/book_cover_machine_learning_for_business.png'), // Resolves to /book1.jpg
      link: 'https://chandraveshchaudhari.github.io/Machine_Learning_For_Business/',
    },
  ],

  // Open-source projects and contributions
  openSource: [
    {
      title: 'brain-ai (Multimodal AutoML Framework)',
      github: 'https://github.com/chandraveshchaudhari/brain-ai',
      pip: 'pip install multi-modal-automl',
      features: [
        'Multimodal learning (text, image, tabular)',
        'Early / late / decision fusion and meta-fusion',
        'Local LLM support and agentic flows',
        'Apache Airflow + MLflow integration',
      ],
    },
    {
      title: 'LitSynth / Research Management System',
      github: 'https://github.com/chandraveshchaudhari/research-management-system',
      features: [
        'Offline local LLM inference',
        'RAG pipelines and semantic search',
        'Document summarization, literature triage, citation intelligence',
        'React web app, AWS Lambda, BeeWare native apps',
      ],
    },
    {
      title: 'InstantGrade / evaluator',
      description: 'Automated evaluation & grading system for Python notebooks and Excel assignments',
    },
  ],

  // Open-source contributions (external projects)
  openSourceContributions: [
    {
      project: 'neuralforecast',
      repo: 'https://github.com/Nixtla/neuralforecast',
      note: 'Contributed fixes/features and collaborated on forecasting tooling',
    },
  ],

  // Patents (Provisional)
  patents: [
    {
      applicationNo: '202541071889',
      title: 'An Automated Framework for Hybrid Fusion of Multi-Modal Data Using Configurable AutoML Pipelines',
      year: 2025,
    },
    {
      applicationNo: '202641026227',
      title: 'Research Management System for Provenance-enabled Retrieval-Augmented Generation and Research Workflow Automation',
      year: 2026,
    },
  ],

  // Copyright registrations
  copyrights: [
    {
      title: 'Screening Research Documents and Citations from Multiple Databases',
      diaryNo: '7645/2022-CO/L',
    },
    {
      title: 'Automation for Systematic Review',
      diaryNo: '15427/2022-CO/L',
    },
  ],
  
  researchInterests: [
    'Decision-level and meta-fusion for multimodal learning',
    'Multimodal AutoML for tabular, temporal, and text data',
    'Local LLM integration and RAG pipelines for research automation',
    'Temporal alignment and multi-scale modeling for financial time-series',
    'Representation learning for heterogeneous tabular data',
    'Information-theoretic analysis of fusion and ensembles',
    'Hybrid feature selection with LLM-guided priors',
    'Tabular foundation models and scalable structured-data models',
    'Efficiency, compression, and edge-deployable multimodal systems',
  ],

  contact: {
    email: 'chandraveshchaudhari@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chandravesh-chaudhari/',
    github: 'https://github.com/chandraveshchaudhari',
    googleScholar: 'https://scholar.google.com/citations?authuser=1&user=V78qbA8AAAAJ',
    orcid: 'https://orcid.org/0000-0003-1053-7541',
  },
};

export default siteConfig;