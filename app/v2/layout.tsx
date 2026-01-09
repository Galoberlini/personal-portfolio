"use client"
import { useEffect } from "react"
import { useTheme, } from "next-themes";

export default function V2Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {

    const { setTheme } = useTheme()

    useEffect(() => {
        setTheme("v2")
    }, [setTheme])

    return <>{children}</>
}
