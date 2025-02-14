'use client';

import SkillsCard from "../skillsCard";
import { FrontEndContent, BackEndContent, OtherContent } from "../skillsContent";
import { useState } from "react";

type ContentProps = {
    handleContentChange: (index: number) => void;
};

export default function Skills(){
    
    const [showContent, SetShowContent] = useState(0)

    const handleContentChange = (index : number) => {
       SetShowContent(index); 
    }
    const handler: ContentProps = {
        handleContentChange
    };
    const content = [
        <SkillsCard key="skillsCard" handler={handler} />,
        <FrontEndContent key="frontEndContent" handler={handler}/>,
        <BackEndContent key="backEndContent" handler={handler}/>,
        <OtherContent key="otherContent" handler={handler}/>
    ]
    
    return (
       <div id="skills" className="flex items-center w-3/4 mx-auto justify-center gap-8 my-20">
            {content[showContent]}
       </div>
    )
}

