import VersionModal from "./components/versionModal";

export default function Template({ children }: { children: React.ReactNode }) {
    const versionCards = [
        { description: "Primera iteración del portfolio con secciones base y animaciones iniciales.", image: "/images/PortfolioTools.png" },
        { description: "Refactor de componentes, mejoras de accesibilidad y soporte de tema oscuro.", image: "/images/fotoPort2.png" },
    ];
    return (
        <>
            {children}
            <VersionModal cards={versionCards} />
        </>
    );
}
