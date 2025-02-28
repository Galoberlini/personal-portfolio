'use client';

import { usePresence, useAnimate, stagger } from "framer-motion"
import { SkillsContent, FrontEndContentParams, BackEndContentParams, PersonalSKillsContentParams } from "../../../utils/skillsContentParams";
import { useEffect, useCallback } from "react";

/* 
    This component is the one I use for generating the content of each card. It receives the content
    as a prop and a handler function to set the Showcontent state back to the SkillsCard component.
    Each content section consists of: First a row with the title and a button that uses the handler function.
    Then a list of items with a square svg icon and the text content. Finally, a svg icon at the 
    bottom right cornet of the card.    
*/

export function ContentGen ({content, handler}: {content:SkillsContent, handler:(index: number) => void;}) {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    const enterAnimation = useCallback(async () => {
        await animate(scope.current, { opacity: 0 }, { duration: 0 });
        await animate("li", { opacity: 0, y: -20 }, { duration: 0 });
        await animate("#Top", { opacity: 0 }, { duration: 0 });
        await animate("#svg", { opacity: 0 }, { duration: 0 });
        await animate(scope.current, { opacity: 1, x: 0 });
        await animate("#Top", { opacity: 1 });
        await animate("li", { opacity: 1, y: 0 }, { delay: stagger(0.1) });
        await animate("#svg", { opacity: 1 });
        await animate("#squares", { rotate: 45 }, { delay: stagger(0.1) });
      }, [animate, scope]);
      
      const exitAnimation = useCallback(async () => {
        await animate("#squares", { rotate: 0 }, { delay: stagger(0.1) });
        await animate("#svg", { opacity: 0 });
        await animate("li", { opacity: 0, y: -20 }, { delay: stagger(0.1) });
        await animate("#Top", { opacity: 0 });
        await animate(scope.current, { opacity: 0 });
        if(safeToRemove){
            safeToRemove()
        }
      }, [animate, safeToRemove, scope]);
      
      useEffect(() => {
        if (isPresent) {
          enterAnimation();
        } else {
          exitAnimation();
        }
      }, [isPresent, enterAnimation, exitAnimation]);
    return (
        <div key={content.title} ref={scope} className="relative flex flex-col self-center w-3/4 bg-third rounded-3xl p-3">
                <div id="Top" className="flex flex-row justify-between">
                    <h3 className="text-3xl text-primary ml-20 mb-8">{content.title}</h3>
                    <button onClick={() => handler(0)} className="flex items-center justify-center bg-third size-7 rounded-full hover:bg-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <ol key="List" className="flex flex-col gap-4 w-4/5">
                        {content.texts.map(text =>
                        <div key={text.id}>
                            <li className="flex items-baseline gap-6 text-pretty">
                            <svg id="squares"className="w-2 h-2 text-primary shrink-0"
                             viewBox="0 0 2 2"
                             xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="currentColor"/>
                            </svg>
                                <p className="flex items-start text-lg"><span>{text.content}</span></p>
                            </li>
                        </div>
                        )}
                </ol>
                <div id="svg" className="absolute bottom-3 right-3">
                    {content.svgIcon}
                </div>
        </div>
    )
}

/* 
    Here is where I use the ContentGen component to generate the components for each card.
*/


export const FrontEndContent = ({handler}:{handler:(index: number) => void}) => (
    <ContentGen content={FrontEndContentParams} handler={handler}/>
)

export const BackEndContent = ({handler}:{handler:(index: number) => void}) => (
    <ContentGen content={BackEndContentParams} handler={handler}/>
)

export const OtherContent = ({handler}:{handler:(index: number) => void}) => (
    <ContentGen content={PersonalSKillsContentParams} handler={handler}/>
)
