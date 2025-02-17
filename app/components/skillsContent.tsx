'use client';

import { motion } from "framer-motion"
import { SkillsContent } from "../utils/skillsCardData";

type ContentProps = {
    handleContentChange: (index: number) => void;
  };


export function ContentGen ({content, handler}: {content:SkillsContent, handler:ContentProps}) {
    return (
        <motion.div key="expanded" className="relative flex flex-col w-full h-auto bg-third z-10 rounded-3xl p-3">
            <div className="flex flex-row justify-between">
                <p className="text-3xl text-primary ml-20 mb-8">{content.title}</p>
                <button onClick={() => handler.handleContentChange(0)} className="flex items-center justify-center bg-third size-7 rounded-full hover:bg-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
                <ol className="flex flex-col gap-2">
                    {content.texts.map(text =>
                        <li key={text.id} className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                            <p>{text.content}</p>
                        </li>
                    )}
                </ol>
            <div className="absolute bottom-3 right-3">
                {content.svgIcon}
            </div>
        </motion.div>

    )
}

const frontEndContentParams : SkillsContent = {
    title: "Front End",
    texts: [{id:1, content:"xample text"}, {id:2, content:"second example"}],
    svgIcon:(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg> ),
}

export const FrontEndContent = ({handler}:{handler:ContentProps}) => (
    <ContentGen content={frontEndContentParams} handler={handler}/>
)

const backEndContentParams : SkillsContent = {
    title: "Back End",
    texts: [{id:1, content:"xample text"}, {id:2, content:"second example"}],
    svgIcon:(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg> ),
}

export const BackEndContent = ({handler}:{handler:ContentProps}) => (
    <ContentGen content={backEndContentParams} handler={handler}/>
)

const OtherContentParams : SkillsContent = {
    title: "Other",
    texts: [{id:1, content:"xample text"}, {id:2, content:"second example"}],
    svgIcon:(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg> ),
}

export const OtherContent = ({handler}:{handler:ContentProps}) => (
    <ContentGen content={OtherContentParams} handler={handler}/>
)


