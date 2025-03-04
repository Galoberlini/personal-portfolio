import AboutMeSegment from "./aboutMeSegment";
import { segments } from "../../../utils/AboutMeSegments";
import Section from "../../section";

/* 
    This component is used to create the about me section in the page. It has a list of segments
    and renders them in a column. The order of the segments is inverted every segment.
*/

export default function AboutMe() {
    return (
        <Section title="About Me">
            <div className="flex flex-col gap-8 md:gap-16">
            {segments.map((segment, index) => (
                <AboutMeSegment
                    key={index}
                    segment={segment} 
                    inverted= {index % 2 === 1}
                />
            ))}
            </div>
        </Section>
    )
}
