"use client"
import { useTheme, } from "next-themes";
import { useEffect } from "react";


export default function V1Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        if (theme === "v2") {
            setTheme("dark")
        }
    }, [theme, setTheme])

    return (
        <>
            {children}
        </>
    );
}
