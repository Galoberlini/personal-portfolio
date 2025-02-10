import { ContactData } from '../utils/ContactData';
import Image from 'next/image';
import Link from 'next/link';

export default function contactInfo({ contactData }: { contactData: ContactData }) {
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
                            <p className="ml-2">{section.text}</p>
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