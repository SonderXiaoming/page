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
      "Turns frequently requested Princess Connect information into fast chatbot lookups, with Python and SQL powering automatic data updates for Hoshino-based communities.",
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
      "Adds character voice replies to group chats through a lightweight Python plugin designed for HoshinoBot and other CQHTTP-compatible frameworks.",
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
      "Turned reverse-engineered game APIs into an asynchronous notification service used across roughly 100 group chats—an estimated community audience of about 3,000 people.",
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
      "Rebuilds the community service for higher concurrency with a WebUI, permission controls, arena tools, and support for multiple regional game environments.",
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
      "Replaces hand-written bot documentation with automatically generated, interactive help pages that stay easier to update as HoshinoBot modules evolve.",
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
      "Automates daily reward reminders in group chats, helping Princess Connect communities turn a repetitive coordination task into a dependable bot workflow.",
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
      "Packages Rust, Tauri, Vue, and ADB into a cross-platform desktop workflow for extracting uid and access_key data across multiple regional servers.",
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
      "A playful HoshinoBot social plugin with deterministic daily pairings, one result per user per day, and community-oriented easter eggs.",
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
      "Brought arena lookups and practical JJC utilities into HoshinoBot, letting Princess Connect players get matchup information without leaving group chat.",
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
      "Expanded the arena companion with multi-UID binding, per-account alerts, multiple regions, private or group delivery, and automatic CAPTCHA with a manual fallback.",
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
      "Turns chemistry wordplay into a search problem by enumerating substances and generating letter-balanced equations such as 2Na + Ba → Banana.",
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
      "Brings Prettier-powered LaTeX formatting directly into Overleaf through a context menu, toolbar action, and keyboard shortcut.",
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
      "Extends the quick lookup and automatic-update ideas behind Kanna Note into a cross-platform Flutter companion app for mobile users.",
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
