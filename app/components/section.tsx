import { ReactNode } from "react";

export default function Section({title, children}: {title: string, children: ReactNode}){
    return (
        <section id={title} className="section">
            <div>
                <div className="flex items-center">
                    <div className="w-1/12 mx-auto my-8 h-1 bg-primary rounded-full"></div>                   
                    <h1 className="text-4xl text-justify font-bold mx-2">
                        {title}
                    </h1>
                    <div className="w-9/12 mx-auto my-8 h-1 bg-primary rounded-full"></div>
                </div>
            </div>
            {children}
        </section>

    )
}