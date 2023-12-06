'use client'

import { motion } from 'framer-motion'

type ButtonProps = {
    children: React.ReactNode
    kind?: 'default' | 'cribel' | 'long' | 'form' | 'square'
    className?: string
    props?: any,
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}

export default function Button({ children, kind = 'default', className, type = 'button', onClick }: ButtonProps) {

    if (kind === 'square') return (
        <motion.button
            className={`p-2 overflow-hidden  duration-150 flex justify-center items-center outline-none text-white bg-bg-black-90 border border-transparent dark:bg-cl-btn-light-bg-primary dark:border-cl-btn-light-bd-primary rounded-lg ${className}`}
            type={type}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )

    if (kind === 'form') return (
        <motion.button
            className={` text-base text-black bg-cl-yellow-dark duration-150 py-2 rounded-lg font-bold tracking-wider hover:brightness-90 ${className}`}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            type={type}
        >
            {children}
        </motion.button>
    )

    if (kind === 'long') return (
        <motion.button
            className={` text-white  px-2 duration-150 font-medium py-1 overflow-hidden flex justify-center items-center outline-none  bg-[#141414b6] border border-transparent dark:bg-cl-btn-light-bg-primary dark:border-cl-btn-light-bd-primary rounded-lg ${className}`}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            type={type}
        >
            {children}
        </motion.button>
    )

    if (kind === 'cribel') return (
        <motion.button
            className={`p-2 overflow-hidden duration-150 flex justify-center items-center outline-none  bg-[#141414b6] border border-transparent dark:bg-cl-btn-light-bg-primary dark:border-cl-btn-light-bd-primary rounded-full ${className}`}
            type={type}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )

    return (
        <motion.button className={`flex duration-150  justify-center items-center ${className}`}
            type={type}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )
}
