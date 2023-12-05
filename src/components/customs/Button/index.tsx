'use client'

import { motion } from 'framer-motion'

type ButtonProps = {
    children: React.ReactNode
    kind?: 'default' | 'cribel' | 'long' | 'form'
    className?: string
    props?: any,
    type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, kind = 'default', className, type = 'button' }: ButtonProps) {

    if (kind === 'form') return (
        <motion.button
            className={` text-base text-black bg-cl-yellow-dark duration-150 py-2 rounded-lg font-bold tracking-wider hover:brightness-90 ${className}`}
            whileTap={{ scale: 0.95 }}
            type={type}
        >
            {children}
        </motion.button>
    )

    if (kind === 'long') return (
        <motion.button
            className={` text-white  px-4 duration-150 font-medium py-[0.3rem] overflow-hidden flex justify-center items-center outline-none  bg-[#141414b6] border border-transparent dark:bg-cl-btn-light-bg-primary dark:border-cl-btn-light-bd-primary rounded-full ${className}`}
            whileTap={{ scale: 0.95 }}
            type={type}
        >
            {children}
        </motion.button>
    )

    if (kind === 'cribel') return (
        <motion.button
            className={`p-2 overflow-hidden duration-150 flex justify-center items-center outline-none  bg-[#141414b6] border border-transparent dark:bg-cl-btn-light-bg-primary dark:border-cl-btn-light-bd-primary rounded-full ${className}`}
            type={type}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )

    return (
        <motion.button className={`flex text-cl-text-gray dark:text-white justify-center items-center ${className}`}
            type={type}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )
}
