import Image, { ImageProps } from "next/image";
import clsx from "clsx";
import { Segment } from "../data/AboutMeSegments";

export default function AboutMeSegment(segment : Segment) {
    return (
        <>
            <div className={clsx("flex justify-around items-center mt-12", segment.inverted && "flex-row-reverse")}>
                <div className={clsx(`w-[${segment.textWidth}]`, `text-pretty`, `text-md`, `mx-5`)}>
                    {segment.texts.map((text, index) => (
                        <p key={index} className="mt-3">{text}</p>
                    ))}
                </div>
                <Image
                    {...segment.imageProps}
                    className="rounded-xl">
                </Image>
            </div>
        </> 
    )

}