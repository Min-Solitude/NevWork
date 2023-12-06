import { IMAGES } from '@/assets'
import { motion } from 'framer-motion'
import Image from 'next/image'

type CloseProps = {
    className?: string
    onClick?: () => void
}

export default function Close({ className, onClick }: CloseProps) {
    return (
        <motion.button
            className={`duration-150 hover:brightness-75 ${className}`}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            <Image src={IMAGES.close} alt='close' width={20} height={20} />
        </motion.button>
    )
}
