'use client'

import IonIcon from "@reacticons/ionicons"
import { useAppDispatch } from "@/hooks/useRedux"
import { managerActionAction } from "@/store/managerAllMode/slice"
// import { setBackgroundTheme } from "@/store/reducers"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ButtonTheme() {
    const Appdispath = useAppDispatch()
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
        <motion.button
            aria-label="Toggle Dark Mode"
            onClick={() => {
                Appdispath(managerActionAction.openMode(resolvedTheme))
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }}
            className=" flex justify-center items-center text-cl-yellow outline-none "
            whileTap={{ scale: 0.9 }}
        >
            {resolvedTheme === 'dark' ?
                <motion.span
                    initial={{ rotate: 300, x: 20 }}
                    animate={{ rotate: 360, x: 0 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
                    className="flex justify-center items-center"
                >
                    <IonIcon name='moon' className="text-2xl" />
                </motion.span>
                :
                <motion.div
                    initial={{ rotate: 0, y: 40 }}
                    animate={{ rotate: 360, y: 0 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
                    className="flex justify-center items-center"
                >
                    <IonIcon name='sunny' className="text-2xl" />
                </motion.div>
            }
        </motion.button>
    )
}
