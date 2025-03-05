'use client';

/* 
    This component is the main component for the skills section. It initially shows the SkillsCard component,
    and when a user clicks on a card, it will show it after updating de ShowContent state. Once the user closes
    the card, the SkillsCard component will be shown again. The ShowContent state the is
    the index of an array of components, being the initial set of cards the first element of the array.
*/

import SkillsCard from "./skillsCard";
import { CardParams } from "../../../data/skillsContentParams";
import {  FrontEndContent, BackEndContent, OtherContent} from "./skillsContent"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Section from "../../section";

export default function Skills(){
    
    const [showContent, SetShowContent] = useState(0)

    const handleContentChange = (index : number) => {
       SetShowContent(index); 
    }
    
    const content = [
        <SkillsCard key="skillsCard" handler={handleContentChange} Cards={CardParams}/>,
        <FrontEndContent key="frontEndContent" handler={handleContentChange}/>,
        <BackEndContent key="backEndContent" handler={handleContentChange}/>,
        <OtherContent key="otherContent" handler={handleContentChange}/>
    ]
    
    return (
        <Section title="Skills">
            <AnimatePresence mode="wait">
                {content[showContent]}
            </AnimatePresence>
        </Section>
    )
}

