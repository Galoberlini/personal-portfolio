// Even though there not many contact sections, in case I want to easily add or modify them
// I can do so by changing the data in this file.

import { ImageProps } from "next/image";

export type ContactData = {
    title: string,
    dataSections: ContactDataSection[]
}

export type ContactDataSection = {
    imageProps: ImageProps,
    link: string,
    text: string,
    extraText?: string,
    noLink?: boolean,
    downloadable?: boolean
}

export const contactData: ContactData[] = [
    {
        title: "Find me at",
        dataSections:[
            {
                imageProps: {
                    src: "/logos/linkedin.svg",
                    alt: "LinkedIn logo",
                    width: 30,
                    height: 30
                },
                link: "https://www.linkedin.com/in/galo-berlini/",
                text: "LinkedIn"
            },
            {
                imageProps: {
                    src: "/logos/github.svg",
                    alt: "GitHub logo",
                    width: 30,
                    height: 30
                },
                link: "https://github.com/Galoberlini",
                text: "GitHub",
                extraText: "(where I posted this project!)"
            }
        ]
    },
    {
        title: "Send me a message",
        dataSections:[
            {
                imageProps: {
                    src: "/logos/gmail.svg",
                    alt: "Email logo",
                    width: 30,
                    height: 30
                },
                link: "",
                text: "galoberlini@gmail.com",
                noLink: true,
            }
        ]
    },
    {
        title: "Download my CV",
        dataSections:[
            {
                imageProps: {
                    src: "/logos/document.svg",
                    alt: "document logo",
                    width: 30,
                    height: 30
                },
                link: "/files/CVGaloBerliniEN.pdf",
                text: "English",
                downloadable: true
            },
            {
                imageProps: {
                    src: "/logos/document.svg",
                    alt: "document logo",
                    width: 30,
                    height: 30
                },
                link: "/files/CVGaloBerliniES.pdf",
                text: "Spanish",
                downloadable: true
            }
        ]
    },
]