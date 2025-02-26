type ProjectData = {
    title: string,
    texts: string[],
    src:string,
    alt:string,

}

export const projectData : ProjectData[] = [
    {
        title: "Stack Migration - Banco Credicoop",
        texts:[
            `As an intern, I was fortunate to be able to participate in a real project as
            a backend developer in Equality - Cooperativa de Tecnología. The objective was to help
            one of the most well-known banks in the country to migrate their website to a more modern stack.`,
            `I contributed with various tasks using Django, mainly focused on the 
            development of a RESTful API as well as the creation of unit tests.
            I also got involved in the sprint planning meetings and the daily sync meetings.`,
            `Thanks to this experience I learnt both how to utilize tools such as Django and Docker and 
            numerous concepts including the REST architecture and unit testing. I also gained insight into 
            what it means to be in a working environment, which I consider very valuable.`
        ],
            src: "/images/equalityLogo.png",
            alt:"Equality Logo"
    },
    {
        title: "1942",
        texts:[
            `A school project that consisted of programming a simpler version of a popular old game, in this case: 1942.
            What made this task interesting was the fact that the game needed to be coded in LC-3 Assembly, a language that has
            a very limited set of instructions and only 8 memory registers to work with.`,
            `The limitations of LC-3, combined with its lack of documentation made this assignment 
            a fairly difficult one.  `,
            `Overall, it turned out to be a much more entertaining puzzle to solve than I initially thought it would be. 
            Even though I hope I never have to code in Assembly again, I have to admit that this project taught me how to 
            break down complex problems and find creative solutions despite strict limitations.`

        ],
            src: "/images/1942.png",
            alt:"1942 picture of the game"
    }, 
    {
        title: "Personal Portfolio",
        texts:[
            `After learning React.js and Next.js at home, I decided to experiment with them by creating my very first website.
            This project also allowed me to revisit some of the concepts I previously knew about HTML and CSS`,
            `Another purpose of this page was to learn how to program as efficiently as possible. Creating reusable components,
            avoiding unnecessary renders and generating code that is readable and easy to understand are some of
            the best practices I tried to implement.`,
            `I definitely learnt a lot from this project. Not only was I able to experiment with technologies I 
            was already familiar with about but I also to learnt new tools such as Framer Motion. I reckon it is likely 
            that there are numerous mistakes or areas that could be further optimized. Hopefully as time goes on I will
            improve my skills as a coder and be able to use this website to track my progress.`,
        ],
            src: "/images/AboutMe2.webp",
            alt: "Personal portfolio screenshot"
    }, 
    { 
        title: "Producer of a videogame prototype",
        texts:[
            `A school project that consisted of developing a game using Unity. As the project manager of a group of 12 students,
            my job was to efficiently distribute tasks in order to keep everyone engaged in the project. 
            Since no one was neither familiar with game development nor interested in 3D modeling, this was not an easy task.`,
            `Unfortunately, due to some setbacks, no group was able to fully develop the game. 
            However, my team and I kept improving over time and managed to make significant progress. 
            Therefore, despite missing the deadline, I still consider this a successful experience.`,
            `Thanks to this assignment, I was able to experiment with some of the project management
            concepts and tools I already knew while also learning a few new ones.`
        ],
            src: "/images/HI boss.png",
            alt: "Screenshot of the game"
    }
]