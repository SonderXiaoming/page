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
  // Core language for open-source services, automation, and research workflows
  {
    id: "python",
    name: "Python",
    description:
      "Primary language for asynchronous monitoring services, chatbot plugins, automation, data analysis, and research workflows across my open-source work.",
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
    id: "data-engineering",
    name: "Data Engineering",
    description:
      "Designing structured storage, reproducible workflows, and scalable queries for heterogeneous multi-omics datasets.",
    icon: "material-symbols:database",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    color: "#0F766E",
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    description:
      "Built activity-recognition pipelines, evaluated RF sensing across modalities, and now explores multimodal data integration for healthcare research.",
    icon: "material-symbols:model-training",
    category: "other",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    color: "#7C3AED",
  },

  // Frontend Skills
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "Used to build browser extensions and interactive interfaces, including the Overleaf formatting workflow and supporting web tools.",
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
      "Used for typed web tooling and maintainable application code, including the chemistry equation generator and this site.",
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
      "Built focused user interfaces for desktop and web utilities, including PCR Login Helper and Auto Chem Joke.",
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
      "Used to organize reusable styles and maintain visual consistency across custom interfaces and personal projects.",
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
      "Supports build tooling, content pipelines, and server-side JavaScript tasks in web projects and automation workflows.",
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

  // Backend and systems skills
  {
    id: "java",
    name: "Java",
    description:
      "Used for object-oriented programming, data-structure work, and application development in academic projects.",
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
      "Exploratory experience with small concurrent services and command-line programs while learning Go's systems model.",
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
      "Powers the native layer of PCR Login Helper, where memory safety and cross-platform desktop integration matter.",
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
      "Used in computer-engineering coursework, SystemC work, sensing research, and performance-conscious application code.",
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
      "Used for low-level programming and embedded-software work where direct control over memory and hardware interfaces matters.",
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
      "Working knowledge developed through Android and JVM-oriented experiments, with a focus on concise application code.",
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
      "Introductory experience with Ruby's scripting style and productivity-oriented language design.",
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
      "Used for server-rendered web exercises and maintaining small backend features in traditional web stacks.",
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
      "Used for relational schema design, structured querying, and data-backed application workflows.",
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
      "Used for caching and fast shared state in services where repeated reads and short-lived data need low latency.",
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
      "Used for document-oriented prototypes where flexible records are more useful than a fixed relational schema.",
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
      "Embedded persistence for bot plugins and companion apps, including Kanna Note, PCR Arena Companion 2, and Misora Note.",
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
      "Daily version-control workflow for maintaining open-source repositories, reviewing changes, and evolving long-lived projects.",
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
      "Primary development environment across Python, TypeScript, Rust, Flutter, and remote research workflows.",
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
      "Used to package reproducible development and deployment environments for services and data workflows.",
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
    description:
      "Configured as a reverse proxy and static-file server for deployed web tools and long-running services.",
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
    description:
      "Used to prepare visual assets, promotional graphics, and image edits for projects and community content.",
    icon: "logos:adobe-photoshop",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 6 },
    color: "#31A8FF",
  },
  {
    id: "premiere-pro",
    name: "Premiere Pro",
    description:
      "Used to edit and assemble longer-form video content for personal and community publishing.",
    icon: "logos:adobe-premiere-pro",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 6 },
    color: "#31A8FF",
  },
  {
    id: "after-effects",
    name: "After Effects",
    description:
      "Used for motion graphics, compositing, and animated elements that complement edited video content.",
    icon: "logos:adobe-after-effects",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 6 },
    color: "#31A8FF",
  },
];
