import { ReactNode } from "react";

/* 
    This component is used to create a section in the page. It has a title and a children prop.
*/

export default function Section({title, children}: {title: string, children: ReactNode}){
    return (
        <section className="section lg:mb-0">
            <div id={title} className="flex items-center pb-20 pt-5">
                <svg className="w-1/12 mx-auto h-1 bg-primary rounded-full">
                    <rect width="100%" height="1" className="fill-primary"/>
                </svg>                   
                <h2 className="text-4xl text-center font-bold mx-2">
                    {title}
                </h2>
                <svg className="w-9/12 mx-auto h-1 bg-primary rounded-full">
                    <rect width="100%" height="1" className="fill-primary"/>
                </svg>
            </div>
            {children}
        </section>

    )
}