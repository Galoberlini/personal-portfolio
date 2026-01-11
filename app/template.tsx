import VersionModal from "./components/versionModal";

export default function Template({ children }: { children: React.ReactNode }) {
    const versionCards = [
        { description: "My first ever website. It's rough, but it was an important learning step and shows how much I've progressed since then.", image: "/images/fotoPort1.jpeg" },
        { description: "A visual update with my latest experiences. I focused on creating a cleaner interface while keeping the information current.", image: "/images/fotoPort2.jpeg" },
    ];
    return (
        <>
            {children}
            <VersionModal cards={versionCards} />
        </>
    );
}
