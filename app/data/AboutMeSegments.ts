import { ImageProps } from "next/image";

export type Segment = {
    imageProps: ImageProps, 
    texts: string[]
}

export const segments: Segment[] = [
    { 
        imageProps: {
            src: "/images/AboutMe1.webp",
            alt: "Images of myself",
            width: 500,
            height: 400
        },
        texts: [
            `Ever since I was a kid I've been passionate about technology. Then, at 11 years old, I 
            suddenly became obsessed with logically solving problems and puzzles and that's when
            I realised I could make the most of my strengths and interests as a programmer.`,
            `So, at that point I decided that the next step would be to attend “Instituto Politécnico Superior",
            one of the most demanding high schools in Rosario, Argentina, as it offers the most prestigious IT
            technical education in the city.`,
            `Luckily for me, that turned out to be the best decision I've ever made and
            I'm proud to have graduated from IPS in 2024 as a Professional and Personal IT Technician.`
        ],
    },
    {
        imageProps: {
            src: "/images/Poli.png",
            alt: "Image of Instituto Politécnico Superior",
            width: 215,
            height: 300
        },
        texts:[
            `Thanks to those 3 years, I currently have not only a strong understanding of programming
             in general (functional, imperative and OOP) but also web development as well as other
              concepts related to the field such as databases, data structures and algorithms.`,
            `Additionally, I've always been interested in learning new topics on my own, a few of the
            ones I've explored include finance, project management and, more recently, React.js and
            Next.js which I used to build this website!`,
        ],
    },
    {
        imageProps: {
            src: "/images/Tools.png",
            alt: "Images of tools and technologies",
            width: 350,
            height: 300
        },
        texts:[
            `Now, with strong attention to detail, I specialize in converting ideas into websites 
            that are scalable, easily modifiable and fully satisfy the needs of whom I'm working with.`,
            `I'm more than looking forward to contributing to a project either as a collaborator or 
            as a leader with the purpose of offering users the best experience possible.`,
            `These are some of the tools I'm familiar with. I would definitely add more to the list 
            if a project requires it.`
        ],
    }

]
