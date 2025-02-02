import { ContactData } from '../data/ContactData';
import Image from 'next/image';
import Link from 'next/link';

export default function contactInfo({ contactData }: { contactData: ContactData }) {
    return (
        <div className='flex flex-col w-3/4 mx-auto mt-10'>
            <p>
                {contactData.title}
            </p>
            <div className="flex flex-row items-end">
                {contactData.dataSections.map((section, index) => (
                    <div key={index}>
                        <Image
                            {...section.imageProps}
                        />
                        {section.noLink ?(
                            <p className="ml-2">{section.text}</p>
                        ): 
                        (
                            <Link 
                                href={section.link}
                                className="ml-2 underline hover:no-underline transition-all duration-500 ease-in-out"
                                >{section.text}
                            </Link>
                        )}
                        {section.extraText && (
                            <p className="ml-2">{section.extraText}</p>)}
                    </div>
                ))}
            </div>
        </div>
    )
}