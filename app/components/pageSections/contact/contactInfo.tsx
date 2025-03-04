'use client';

import { ContactData } from '../../../utils/ContactData';
import { useState} from 'react';

/*
    This component is used to display the contact information. It receives the contactData object
    as a prop which contains the title and the dataSections array, which contains the information itself.
    A dataSection object consists of a svg, a text and optionally a link, and extraText and a downloadable flag.
    Even though, I'd like to make the logic simpler, I don't think it is convenient to move the logic 
    to a different component. Therefore, what I can do is to explain it here.
    First, the title is written in a big font. Then, for each datasection, a div is created with a flex
    so as to display everything in a row. First, the svg is displayed, then, if the section does not
    have a link, the text is displayed with an option to copy it. This option is implemented with a button 
    which changes logo for a few seconds after the text is copied and then it goes back to normal. This is done
    by using an state which checks if the text was copied, depending on this state, the button displays a 
    different logo. If the section has a link, the text is displayed as a link in a 'a' tag. In case this link
    is downloadable, the download attribute is added to the 'a' tag. In case the section
    has an extraText property, it is displayed after the text, this applies for both 'a' and 'p' tags. 
    Thought about making the logic behind copying the text a hook, but since I'm not planning on using it 
    anywhere else, I decided to keep it here
*/

export default function ContactInfo({ contactData }: { contactData: ContactData }) {

    const [copied, setCopied] = useState(false);

    const handleCopy = async (text:string) => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1000); 
        } catch (err) {
          console.error("Error al copiar:", err);
        }
      };
    

    return (
        <div className='mt-10'>
            <p className='text-4xl'>
                {contactData.title}
            </p>
            {contactData.dataSections.map((section, index) => (
            <div className="flex flex-row ml-5 mt-3" key={index}>
                {section.svg}
                {!section.link ?(
                <>
                    <span className="ml-2">
                        {section.text}
                        {section.extraText && (
                            <span>{section.extraText}</span>
                        )}
                    </span>
                    <button onClick={() => handleCopy(section.text)}>
                        {copied ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            
                        ) : 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>

                        )}
                    </button>
                </>
                ): 
                ( 
                <span>
                    <a 
                        href={section.link}
                        download={section.downloadable ? "" : undefined}
                        className="ml-2 underline hover:no-underline transition-all duration-500 ease-in-out"
                        >
                        {section.text}
                    </a>
                    {section.extraText && (
                    <span> {section.extraText}</span>
                    )}
                </span>
                )}
            </div>
            ))}
        </div>
    )
}

