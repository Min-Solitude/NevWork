'use client'

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ButtonTheme() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <motion.button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="w-[2.6rem] h-[2.6rem] text-xl overflow-hidden flex justify-center items-center outline-none border-cl-btn-light-bd-primary bg-cl-btn-light-bg-primary shadow-sm border dark:bg-cl-btn-dark-bg-primary dark:border-cl-btn-dark-bd-primary rounded-full "
            whileTap={{ scale: 0.9 }}
        >
            {resolvedTheme === 'dark' ?
                <motion.span
                    initial={{ rotate: 300, x: 20 }}
                    animate={{ rotate: 360, x: 0 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
                >🌙</motion.span>
                :
                <motion.div
                    initial={{ rotate: 0, y: 40 }}
                    animate={{ rotate: 360, y: 0 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
                >☀️</motion.div>
            }
        </motion.button>
    )
}
