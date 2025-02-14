import AboutMeSegment from "../about_me_segment";
import { segments } from "../../utils/AboutMeSegments";

export default function AboutMe() {
    return (
        <div id="about_me" className="flex flex-col w-5/6 mx-auto">
            <div className="w-full mx-auto my-8 h-1.5 bg-primary rounded-full"></div>
            <div className="mb-10 ml-20">
                <h1 className="text-4xl text-justify font-bold">
                    About Me
                </h1>
                <h2 className="text-justify text-lg text-primary">
                    A BIT ABOUT MYSELF
                </h2>
            </div>
            {segments.map((segment, index) => (
                <AboutMeSegment
                    key={index}
                    inverted={segment.inverted}
                    imageProps={segment.imageProps}
                    texts={segment.texts}
                />
            ))}
        </div>
    )
}