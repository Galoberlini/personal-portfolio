import { ImageProps } from "next/image";

export type Segment = {
    inverted? : boolean,
    imageProps: ImageProps, 
    texts: string[], 
    textWidth: string
}

export const segments: Segment[] = [
    { 
        inverted: false,
        imageProps: {
            src: "/images/AboutMe1.webp",
            alt: "Images of myself",
            width: 500,
            height: 400
        },
        texts: [
            `Ever since I was a kid I've been passionate about technology. At 11 years old I 
            suddenly became obsessed with logically solving problems and puzzles and that's when
            I realised I could make the most of my strengths and interests as a programmer.`,
            `So, at that point I decided that the next step would be to attend “Instituto Politécnico Superior",
            one of the most demanding high schools in Rosario, Argentina, as it offers
            the best foundation in IT with its three-year specialization.`,
            `Luckily for me, that turned out to be the best decision I've ever made and
            I'm proud to have graduated from IPS in 2024 as a Professional and Personal IT Technician.`
        ],
        textWidth: "700px"
    },
    {
        inverted: true,
        imageProps: {
            src: "/images/AboutMe2.webp",
            alt: "Images of tools and technologies",
            width: 300,
            height: 200
        },
        texts:[
            `Thanks to those 3 years, I currently have not only a strong understanding of programming
             in general (functional, imperative and OOP) but also web development as well as other
              concepts related to the field such as databases, AI and algorithms.`,
            `Additionally, I've always been interested in learning new topics on my own, a few of the
            ones I've explored include finance, project management and, more recently, React.js and
            Next.js which I used to build this website!`,
            `All things considered, here are some of the tools I'm familiar with.`
        ],
        textWidth: "700px"
    },
    {
        imageProps: {
            src: "/images/AboutMe2.webp",
            alt: "Still deciding what to put here",
            width: 500,
            height: 400
        },
        texts:[
            `Now, with strong attention to detail, I specialize on converting ideas into websites 
            that are scalable, easily modifiable and fully satisfy the needs of who I’m working with.`,
            `I'm more than looking forward to contribute to a project either as a collaborator or 
            as a leader with the purpose of offering your users the best experience posible.`
        ],
        textWidth: "700px"


    }

]
