import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
  {
    id: "dong-lab-master-student",
    title: "Master Student · Dong Lab",
    description:
      "Working on machine learning, multimodal data integration, and reproducible systems for healthcare and biological datasets.",
    type: "work",
    startDate: "2025-09-15",
    location: "Remote",
    organization: "Yale University",
    skills: ["Python", "Data Analysis", "Machine Learning", "Multi-omics"],
    achievements: [
      "Engineered a centralized platform for RNA-seq, ATAC-seq, WGS, and spatial datasets.",
      "Designed storage schemas and reproducible workflows for heterogeneous biological data.",
      "Explored machine learning and multimodal data integration for healthcare and human activity recognition.",
    ],
    links: [
      {
        name: "Dong Lab Profile",
        url: "https://donglab.org/team/",
        type: "website",
      },
    ],
    icon: "material-symbols:work",
    color: "#DC2626",
    featured: true,
  },
  {
    id: "master-student",
    title: "M.S. in Computer Engineering",
    description:
      "Graduate study focused on computer systems, software, and the technical foundations behind my research and engineering work.",
    type: "education",
    startDate: "2025-09-01",
    location: "New York",
    organization: "Columbia University",
    skills: ["C++", "SystemC", "Python", "TypeScript"],
    achievements: ["Current GPA: 3.79"],
    icon: "material-symbols:school",
    color: "#059669",
    featured: true,
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    description:
      "Studied RF sensing and machine learning for human activity recognition, from data preparation through cross-modality evaluation.",
    type: "work",
    startDate: "2024-05-30",
    endDate: "2025-03-08",
    location: "Auburn",
    organization: "Auburn University",
    skills: [
      "Python",
      "MATLAB",
      "Data Analysis",
      "Machine Learning",
      "RF Sensing",
    ],
    achievements: [
      "Developed end-to-end machine-learning pipelines for RFID-based activity recognition.",
      "Benchmarked generalization across WiFi, FMCW radar, and 5G sensing modalities.",
      "Integrated synthetic data into training workflows under limited real-world data conditions.",
    ],
    icon: "material-symbols:work",
    color: "#DC2626",
  },
  {
    id: "software-engineering-intern",
    title: "Software Engineering Intern",
    description:
      "Built embedded and application-layer software for smart-home systems and supported integration across hardware and product teams.",
    type: "work",
    startDate: "2023-05-26",
    endDate: "2023-08-08",
    location: "Kunshan",
    organization: "Kunshan Daier Electronic Technology Co., Ltd.",
    skills: ["C/C++", "System Integration"],
    achievements: [
      "Built embedded and application-layer software for smart home systems using C/C++ and Python.",
      "Collaborated with hardware and product teams on system integration and feature delivery.",
    ],
    icon: "material-symbols:work",
    color: "#DC2626",
  },
  {
    id: "bachelor-student",
    title: "B.S. in Computer Science",
    description:
      "Built a foundation in software engineering, algorithms, databases, and systems while developing research and open-source projects.",
    type: "education",
    startDate: "2022-09-01",
    endDate: "2025-06-01",
    location: "Auburn",
    organization: "Auburn University",
    skills: ["C++", "Python", "Java", "SQL"],
    achievements: ["Final GPA: 3.89"],
    icon: "material-symbols:school",
    color: "#059669",
  },
  /**
	{
		id: "web-development-course",
		title: "Completed Web Development Online Course",
		description:
			"Completed a full-stack web development online course, systematically learning frontend and backend development technologies.",
		type: "achievement",
		startDate: "2024-01-15",
		endDate: "2024-05-30",
		organization: "Mooc Website",
		skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
		achievements: [
			"Received course completion certificate",
			"Completed 5 practical projects",
			"Mastered full-stack development fundamentals",
		],
		links: [
			{
				name: "Course Certificate",
				url: "https://certificates.example.com/web-dev",
				type: "certificate",
			},
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
	{
		id: "student-management-system",
		title: "Student Management System Course Project",
		description:
			"Final project for the database course, developed a complete student information management system.",
		type: "project",
		startDate: "2023-11-01",
		endDate: "2023-12-15",
		skills: ["Java", "MySQL", "Swing", "JDBC"],
		achievements: [
			"Received excellent course project grade",
			"Implemented complete CRUD functionality",
			"Learned database design and optimization",
		],
		icon: "material-symbols:database",
		color: "#EA580C",
	},
	*/
];
