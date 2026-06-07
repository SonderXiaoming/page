// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string; // Iconify icon name
  category: "frontend" | "backend" | "database" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  experience: {
    years: number;
    months: number;
  };
  projects?: string[]; // Related project IDs
  certifications?: string[];
  color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
  // Frontend Skills
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
    icon: "logos:javascript",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["overleaf_latex_format"],
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "A type-safe superset of JavaScript that enhances code quality and development efficiency.",
    icon: "logos:typescript-icon",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["auto_chem_joke"],
    color: "#3178C6",
  },
  {
    id: "vue",
    name: "Vue.js",
    description:
      "A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
    icon: "logos:vue",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["auto_chem_joke", "pcr_login_helper"],
    color: "#4FC08D",
  },
  {
    id: "sass",
    name: "Sass/SCSS",
    description:
      "A CSS preprocessor providing advanced features like variables, nesting, and mixins.",
    icon: "logos:sass",
    category: "frontend",
    level: "intermediate",
    experience: { years: 2, months: 3 },
    color: "#CF649A",
  },
  // Backend Skills
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
    icon: "logos:nodejs-icon",
    category: "backend",
    level: "intermediate",
    experience: { years: 2, months: 3 },
    color: "#339933",
  },
  {
    id: "html-css",
    name: "HTML/CSS",
    description:
      "Markup and styling for bot help pages, plugin UIs, and lightweight web interfaces.",
    icon: "logos:html-5",
    category: "frontend",
    level: "intermediate",
    experience: { years: 3, months: 0 },
    projects: ["autohelp"],
    color: "#E34F26",
  },

  // Backend Skills
  {
    id: "python",
    name: "Python",
    description:
      "A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
    icon: "logos:python",
    category: "backend",
    level: "expert",
    experience: { years: 4, months: 0 },
    projects: [
      "kanna_note",
      "youzi_voice",
      "kanna_connection_redive",
      "kanna_connection_redive_2",
      "autohelp",
      "login_bonus",
      "dailywife",
      "pcrjjc_huannai",
      "pcrjjc_huannai2",
    ],
    color: "#3776AB",
  },
  {
    id: "java",
    name: "Java",
    description:
      "A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
    icon: "logos:java",
    category: "backend",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    color: "#ED8B00",
  },
  {
    id: "go",
    name: "Go",
    description:
      "An efficient programming language developed by Google, suitable for cloud-native and microservices development.",
    icon: "logos:go",
    category: "backend",
    level: "beginner",
    experience: { years: 0, months: 8 },
    color: "#00ADD8",
  },
  {
    id: "rust",
    name: "Rust",
    description:
      "A systems programming language focusing on safety, speed, and concurrency, with no garbage collector.",
    icon: "logos:rust",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["pcr_login_helper"],
    color: "#CE422B",
  },
  {
    id: "cpp",
    name: "C++",
    description:
      "A high-performance systems programming language widely used in game development, system software, and embedded development.",
    icon: "logos:c-plusplus",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 4 },
    color: "#00599C",
  },
  {
    id: "c",
    name: "C",
    description:
      "A low-level systems programming language, the foundation for operating systems and embedded systems development.",
    icon: "logos:c",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    color: "#A8B9CC",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    description:
      "A modern programming language developed by JetBrains, fully compatible with Java, the preferred choice for Android development.",
    icon: "logos:kotlin-icon",
    category: "backend",
    level: "beginner",
    experience: { years: 0, months: 8 },
    color: "#7F52FF",
  },
  {
    id: "ruby",
    name: "Ruby",
    description:
      "A dynamic, open-source programming language focusing on simplicity and productivity, the foundation of the Rails framework.",
    icon: "logos:ruby",
    category: "backend",
    level: "beginner",
    experience: { years: 0, months: 4 },
    color: "#CC342D",
  },
  {
    id: "php",
    name: "PHP",
    description:
      "A widely-used server-side scripting language, particularly suitable for web development.",
    icon: "logos:php",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 6 },
    color: "#777BB4",
  },

  // Database Skills
  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "A powerful open-source relational database management system.",
    icon: "logos:postgresql",
    category: "database",
    level: "intermediate",
    experience: { years: 1, months: 5 },
    color: "#336791",
  },
  {
    id: "redis",
    name: "Redis",
    description:
      "A high-performance in-memory data structure store, used as a database, cache, and message broker.",
    icon: "logos:redis",
    category: "database",
    level: "intermediate",
    experience: { years: 1, months: 3 },
    color: "#DC382D",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description:
      "A document-oriented NoSQL database with a flexible data model.",
    icon: "logos:mongodb-icon",
    category: "database",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    color: "#47A248",
  },
  {
    id: "sqlite",
    name: "SQLite",
    description:
      "A lightweight embedded relational database, suitable for mobile applications and small projects.",
    icon: "simple-icons:sqlite",
    category: "database",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    projects: ["kanna_note", "pcrjjc_huannai2", "misora_note"],
    color: "#003B57",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    description:
      "A distributed version control system, an essential tool for code management and team collaboration.",
    icon: "logos:git-icon",
    category: "tools",
    level: "advanced",
    experience: { years: 3, months: 0 },
    color: "#F05032",
  },
  {
    id: "vscode",
    name: "VS Code",
    description:
      "A lightweight but powerful code editor with a rich plugin ecosystem.",
    icon: "logos:visual-studio-code",
    category: "tools",
    level: "expert",
    experience: { years: 3, months: 6 },
    color: "#007ACC",
  },
  {
    id: "linux",
    name: "Linux",
    description:
      "Server and deployment environment for long-running bot services and automation jobs.",
    icon: "logos:linux-tux",
    category: "tools",
    level: "intermediate",
    experience: { years: 3, months: 0 },
    color: "#FCC624",
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "A containerization platform that simplifies application deployment and environment management.",
    icon: "logos:docker-icon",
    category: "tools",
    level: "beginner",
    experience: { years: 0, months: 8 },
    color: "#2496ED",
  },

  // Other Skills
  {
    id: "nginx",
    name: "Nginx",
    description: "A high-performance web server and reverse proxy server.",
    icon: "logos:nginx",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    color: "#009639",
  },
  {
    id: "latex",
    name: "LaTeX",
    description:
      "Academic and technical document writing, plus tooling around Overleaf formatting workflows.",
    icon: "simple-icons:latex",
    category: "other",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    projects: ["overleaf_latex_format"],
    color: "#008080",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    description: "Professional image editing and design software.",
    icon: "logos:adobe-photoshop",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 6 },
    color: "#31A8FF",
  },
  {
    id: "premiere-pro",
    name: "Premiere Pro",
    description: "Professional video editing and compositing software.",
    icon: "logos:adobe-premiere-pro",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 6 },
    color: "#31A8FF",
  },
  {
    id: "after-effects",
    name: "After Effects",
    description: "Professional video editing and compositing software.",
    icon: "logos:adobe-after-effects",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 6 },
    color: "#31A8FF",
  },
];
