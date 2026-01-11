export type WebsiteItem = {
    title: string;
    description: string;
    image: string;
    url: string;
};

export const websites: WebsiteItem[] = [
    {
        title: "Lavalle Pádel — WIP",
        description: "A landing page for a padel complex in Rosario with three locations and a long history in the sport. They put real effort into what they do and have a genuine passion for growing padel in the city. I built this to help strengthen their online presence, showcase their services, and connect people to everything they offer.",
        image: "/images/lavallePage.jpeg",
        url: "https://lavalle-padel.vercel.app/",
    },
    {
        title: "Calixto — Concept Design",
        description: "Concept design for a local café. Useful for learning component architecture, reusable design patterns, and improving my overall development process.",
        image: "/images/calixtoPage.jpeg",
        url: "https://calixto.vercel.app/",
    },
];