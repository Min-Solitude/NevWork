'use client'

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

type DarkModeProviderProps = {
    children: React.ReactNode
}

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return <>{children}</>

    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}
