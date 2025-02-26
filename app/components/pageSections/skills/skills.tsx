'use client';

import SkillsCard from "./skillsCard";
import { FrontEndContent, BackEndContent, OtherContent } from "../../../utils/skillsContentParams";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Section from "../../section";

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
        <Section title="Skills">
            <AnimatePresence mode="wait">
                {content[showContent]}
            </AnimatePresence>
        </Section>
    )
}

