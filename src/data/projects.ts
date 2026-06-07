// Project data configuration file
// Used to manage data for the project display page

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "app" | "other" | "python";
  techStack: string[];
  status: "completed" | "in-progress" | "planned";
  liveDemo?: string;
  sourceCode?: string;
  visitUrl?: string;
  startDate: string;
  endDate?: string;
  featured?: boolean;
  tags?: string[];
  showImage?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "kanna_note",
    title: "Kanna Note",
    description:
      "A Python plugin for Princess Connect Re:Dive that gives players quick access to game info and automatic updates. Integrates easily with chatbot frameworks like Hoshino.",
    image: "",
    category: "python",
    techStack: ["Python", "SQL"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/kanna_note",
    startDate: "2025-07-18",
    featured: true,
    tags: ["Open Source", "Python", "Game", "Bot Plugin"],
  },
  {
    id: "youzi_voice",
    title: "Youzi Voice",
    description:
      "A Python bot plugin that sends Princess Connect character voice clips in group chats. Built for HoshinoBot and similar CQHTTP-based frameworks.",
    image: "",
    category: "python",
    techStack: ["Python"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/youzi_voice",
    startDate: "2022-08-12",
    featured: true,
    tags: ["Open Source", "Python", "Game", "Bot Plugin"],
  },
  {
    id: "kanna_connection_redive",
    title: "Kanna Connection Re:Dive",
    description:
      "Reverse-engineered Princess Connect game APIs to automatically fetch boss spawn updates and push them to designated channels. Supports 100+ concurrent monitors for timely, accurate notifications.",
    image: "",
    category: "python",
    techStack: ["Python", "API Integration", "Async"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/kanna_connection_redive",
    startDate: "2023-07-21",
    endDate: "2026-03-28",
    tags: ["Open Source", "Python", "Game", "Automation"],
  },
  {
    id: "kanna_connection_redive_2",
    title: "Kanna Connection Re:Dive 2",
    description:
      "Successor to Kanna Connection Re:Dive with improved boss monitoring and notification delivery for Princess Connect Re:Dive.",
    image: "",
    category: "python",
    techStack: ["Python", "API Integration", "Async"],
    status: "in-progress",
    sourceCode: "https://github.com/SonderXiaoming/kanna_connection_redive_2",
    startDate: "2026-03-28",
    featured: true,
    tags: ["Open Source", "Python", "Game", "Automation"],
  },
  {
    id: "autohelp",
    title: "AutoHelp",
    description:
      "Automatically generates interactive help pages for HoshinoBot modules, replacing hand-written help docs with a maintainable web-based help system.",
    image: "",
    category: "python",
    techStack: ["Python", "CSS", "HTML", "Flask"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/autohelp",
    startDate: "2022-05-01",
    tags: ["Open Source", "Python", "Bot Plugin", "Tool"],
  },
  {
    id: "login_bonus",
    title: "Login Bonus",
    description:
      "A HoshinoBot plugin that reminds players to collect daily login rewards in Princess Connect Re:Dive, helping guilds reduce missed bonus claims.",
    image: "",
    category: "python",
    techStack: ["Python"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/login_bonus",
    startDate: "2022-07-22",
    tags: ["Open Source", "Python", "Game", "Bot Plugin"],
  },
  {
    id: "pcr_login_helper",
    title: "PCR Login Helper",
    description:
      "Desktop tool to extract Princess Connect uid and access_key. Supports Bilibili, channel, and Taiwan servers. Available for Windows and macOS via releases.",
    image: "",
    category: "app",
    techStack: ["Rust", "Tauri", "ADB", "Vue"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/pcr_login_helper",
    startDate: "2025-05-19",
    tags: ["Open Source", "Rust", "Game", "Tool"],
  },
  {
    id: "dailywife",
    title: "Daily Wife",
    description:
      "HoshinoBot plugin that randomly assigns a group member as your daily 'wife'. Each day picks one partner per user with fixed daily results and fun easter eggs.",
    image: "",
    category: "python",
    techStack: ["Python"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/dailywife",
    startDate: "2022-06-07",
    tags: ["Open Source", "Python", "Bot Plugin", "Fun"],
  },
  {
    id: "pcrjjc_huannai",
    title: "PCR Arena Companion",
    description:
      "Arena (JJC) companion plugin for Princess Connect Re:Dive bots, providing arena-related queries and utilities for HoshinoBot users.",
    image: "",
    category: "python",
    techStack: ["Python", "API Integration", "Async"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/pcrjjc_huannai",
    startDate: "2022-10-16",
    endDate: "2023-06-18",
    tags: ["Open Source", "Python", "Game", "Bot Plugin"],
  },
  {
    id: "pcrjjc_huannai2",
    title: "PCR Arena Companion 2",
    description:
      "Successor to PCR Arena Companion with improved arena tools and queries for Princess Connect Re:Dive. Built for HoshinoBot and actively maintained.",
    image: "",
    category: "python",
    techStack: ["Python", "API Integration", "Async", "SQL"],
    status: "in-progress",
    sourceCode: "https://github.com/SonderXiaoming/pcrjjc_huannai2",
    startDate: "2023-06-18",
    tags: ["Open Source", "Python", "Game", "Bot Plugin"],
  },
  {
    id: "auto_chem_joke",
    title: "Auto Chem Joke",
    description:
      "Automatically enumerates chemical substances and generates balanced equations for a target product, following letter conservation. Inspired by jokes like 2Na + Ba → Banana.",
    image: "",
    category: "web",
    techStack: ["TypeScript", "Vue"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/auto_chem_joke",
    startDate: "2025-08-18",
    tags: ["Open Source", "TypeScript", "Chemistry", "Tool"],
  },
  {
    id: "overleaf_latex_format",
    title: "Overleaf LaTeX Format",
    description:
      "Chrome extension that formats and tidies LaTeX code inside Overleaf using Prettier. Supports one-click formatting via right-click menu, extension icon, or keyboard shortcut.",
    image: "",
    category: "web",
    techStack: ["JavaScript", "Chrome Extension", "LaTeX", "Prettier"],
    status: "completed",
    sourceCode: "https://github.com/SonderXiaoming/overleaf_latex_format",
    startDate: "2025-08-30",
    tags: ["Open Source", "Browser Extension", "LaTeX", "Tool"],
  },
  {
    id: "misora_note",
    title: "Misora Note",
    description:
      "Cross-platform app for Princess Connect Re:Dive with quick info lookup and auto updates — a mobile app counterpart to Kanna Note.",
    image: "",
    category: "app",
    techStack: ["Flutter", "Dart", "SQL"],
    status: "in-progress",
    sourceCode: "https://github.com/SonderXiaoming/MisoraNote",
    startDate: "2025-09-03",
    featured: true,
    tags: ["Open Source", "App", "Flutter", "Game"],
  },
];

// Get project statistics
export const getProjectStats = () => {
  const total = projectsData.length;
  const completed = projectsData.filter((p) => p.status === "completed").length;
  const inProgress = projectsData.filter(
    (p) => p.status === "in-progress",
  ).length;
  const planned = projectsData.filter((p) => p.status === "planned").length;

  return {
    total,
    byStatus: {
      completed,
      inProgress,
      planned,
    },
  };
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
  if (!category || category === "all") {
    return projectsData;
  }
  return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
  const techSet = new Set<string>();
  projectsData.forEach((project) => {
    project.techStack.forEach((tech) => {
      techSet.add(tech);
    });
  });
  return Array.from(techSet).sort();
};
