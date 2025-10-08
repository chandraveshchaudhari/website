const siteConfig = {
  personal: {
    name: "Chandravesh Chaudhari",
    title: "Assistant Professor | Multimodal AI",
    image: "profile.jpg", // place in /public/profile.jpg
    email: "hello@example.com",
    location: "India",
  },

  seo: {
    title: "Chandravesh Chaudhari",
    description: "Official website showcasing education, research, projects and experience.",
  },

  animatedText: ["AI Researcher", "Educator", "Speaker", "Builder"],

  navigation: [
    { name: "Home", url: "/" },
    { name: "Education", url: "/education" },
    { name: "Experience", url: "/experience" },
    { name: "Projects", url: "/projects" },
    { name: "Research", url: "/research" },
    { name: "Contact", url: "/contact" },
  ],

  education: [
    {
      degree: "Ph.D. in AI",
      institution: "XYZ University",
      year: "2025",
    },
    {
      degree: "M.Tech in Computer Science",
      institution: "ABC Institute",
      year: "2020",
    },
  ],

  experience: [
    {
      role: "Assistant Professor",
      company: "ABC University",
      duration: "2020 - Present",
    },
  ],

  projects: [
    {
      title: "AI Dashboard",
      description: "A visualization tool for business intelligence.",
      link: "https://github.com/yourproject",
    },
  ],

  research: [
    {
      title: "Multimodal Learning Techniques",
      journal: "IJCAI 2025",
      link: "#",
    },
  ],

  contact: {
    email: "hello@example.com",
    linkedin: "https://linkedin.com/in/username",
    github: "https://github.com/username",
  },
};

export default siteConfig;
