'use client'

import { motion } from 'framer-motion'

type ButtonProps = {
    children: React.ReactNode
    kind?: 'default' | 'cribel' | 'long'
    className?: string
}

export default function Button({ children, kind = 'default', className }: ButtonProps) {

    if (kind === 'long') return (
        <motion.button
            className={`w-auto px-4 font-medium h-[2.6rem] overflow-hidden flex justify-center items-center outline-none border-cl-btn-light-bd-primary bg-cl-btn-light-bg-primary shadow-sm border dark:bg-cl-btn-dark-bg-primary dark:border-cl-btn-dark-bd-primary rounded-full ${className}`}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )

    if (kind === 'cribel') return (
        <motion.button
            className={`w-[2.6rem] h-[2.6rem] overflow-hidden flex justify-center items-center outline-none border-cl-btn-light-bd-primary bg-cl-btn-light-bg-primary shadow-sm border dark:bg-cl-btn-dark-bg-primary dark:border-cl-btn-dark-bd-primary rounded-full ${className}`}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )

    return (
        <motion.button className={`flex justify-center items-center ${className}`}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )
}
