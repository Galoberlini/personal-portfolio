'use client';

import { ContactData } from '../../../utils/ContactData';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
        <div className='flex-col mt-10'>
            <p className='text-4xl'>
                {contactData.title}
            </p>
                {contactData.dataSections.map((section, index) => (
                    <div className="flex flex-row items-end ml-5 mt-5" key={index}>
                        <Image
                            {...section.imageProps}
                            alt={section.imageProps.alt}
                        />
                        {section.noLink ?(
                            <>
                                <p className="ml-2">{section.text}</p>
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
                            section.downloadable ? (
                                <a href={section.link} download className='ml-2 underline hover:no-underline transition-all duration-500 ease-in-out'>
                                    {section.text}
                                </a>
                            ):(
                            <Link 
                                href={section.link}
                                className="ml-2 underline hover:no-underline transition-all duration-500 ease-in-out"
                                >
                                {section.text}
                            </Link>
                        ))}
                        {section.extraText && (
                            <p className="ml-1">{section.extraText}</p>)}
                    </div>
                ))}
        </div>
    )
}