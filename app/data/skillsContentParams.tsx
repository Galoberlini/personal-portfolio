export type SkillsCards = {
    title: string, 
    svgIcon : React.ReactElement;
} 

export type SkillsContent = {
    title : string,
    texts : {
        id: number,
        content: string
    }[]
    svgIcon : React.ReactElement;
}


export const CardParams : SkillsCards[] = [
    {
        title: "Front End",
        svgIcon:(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>)
    },
    {
        title: "Back End",
        svgIcon:(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
        )
    },
    {
        title: "Personal Skills",
        svgIcon:(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
        )
    }
]



export const FrontEndContentParams : SkillsContent = {
    title: "Front End",
    texts: [{
        id:1,
        content:"Proficient in Next.js and React.js for building modern web applications."
    }, {
        id:2,
        content:"Experienced in creating interactive pages with engaging animations."
    }, {
        id:3,
        content:"Develop reusable and adaptable components and hooks for various environments."
    }, {
        id:4,
        content:"Knowledgeable in SEO to improve website visibility."
    },
],
    svgIcon:(
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-3 right-3 size-16 md:size-28 opacity-70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg> ),
}

export const BackEndContentParams : SkillsContent = {
    title: "Back End",
    texts: [
        {
            id:1,
            content:"Experienced with Django and Node.js (Express) for backend development."
        }, {
            id:2,
            content:"Focus on optimizing server load to enhance performance"
        }, {
            id:3,
            content:"Proficient in SQL and capable of performing complex database queries."
        }, {
            id:4,
            content:"Design and manage databases using MySQL."
        }, {
            id:5,
            content:"Familiar with Docker for containerized applications."
        },

    ],
    svgIcon:(
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-3 right-3 size-16 md:size-28 opacity-70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg> ),
}

export const PersonalSKillsContentParams : SkillsContent = {
    title: "Personal skills",
    texts: [
        {
            id:1,
            content:"Ability to identify, analyze, and solve problems efficiently."
        }, {
            id:2,
            content:"Comfortable working in teams or independently."
        }, {
            id:3,
            content:"Able to adjust to new technologies and environments."
        }, {
            id:4,
            content:"Strong attention to detail, focused on minimizing errors and ensuring consistency."
        }, {
            id:5,
            content:`Project management: Knowledgeable in Agile methodologies (Scrum, Kanban), 
            project management tools (ClickUp, Jira) and key concepts including, risk management, WBS and cost management.`
        },
    ],
    svgIcon:(
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-3 right-3 size-16 sm:size-28 opacity-70 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg> ),
}

