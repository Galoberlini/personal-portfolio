export type ExperienceItem = {
    imageUrl: string;
    company: string;
    charge: string;
    description: string;
    stack: string[];
    ubicacion: string;
    date: string;
};

export const experienceItems: ExperienceItem[] = [
    {
        imageUrl: "/images/deenex_logo.jpeg",
        company: "Deenex",
        charge: "Fullstack Developer",
        description:
            "Built features for a production PWA used by restaurant chains, handling real workflows for end users and admins. Redesigned the onboarding experience to reduce friction and simplify initial navigation. Streamlined multi-location operations, cutting the setup process for new branches significantly.",
        stack: ["React", "Node.js", "Express.js", "MongoDB"],
        ubicacion: "Remote",
        date: "Sep 2025 — Nov 2025",
    },
    {
        imageUrl: "/images/equalityLogo.png",
        company: "Equality",
        charge: "Backend Developer",
        description:
            "Developed backend features for a real banking project, building REST APIs with emphasis on clean, testable code.",
        stack: ["Django", "Postgres"],
        ubicacion: "Rosario, Santa Fe, AR",
        date: "Jun 2024 — Oct 2024",
    },
];
