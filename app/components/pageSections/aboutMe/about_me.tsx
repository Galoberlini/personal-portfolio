import AboutMeSegment from "./about_me_segment";
import { segments } from "../../../utils/AboutMeSegments";
import Section from "../../section";

export default function AboutMe() {
    return (
        <Section title="About Me">
            <div className="flex flex-col gap-16">
            {segments.map((segment, index) => (
                <AboutMeSegment
                    key={index}
                    inverted={segment.inverted}
                    imageProps={segment.imageProps}
                    texts={segment.texts}
                />
            ))}
            </div>
        </Section>
    )
}