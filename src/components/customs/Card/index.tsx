import Image from 'next/image'
import React from 'react'

type CardProps = {
    kind?: 'default' | 'dark'
    image: any
    className?: string
}

export default function Card({ kind = 'default', image, className }: CardProps) {
    return (
        <div className={`h-[8rem] bg-gray-200  w-[14rem] shadow-sd-primary rounded-xl overflow-hidden ${className}`}>
            <Image src={image} width={1440} height={1280} className='w-full h-full object-cover' alt='sofi' />
        </div>
    )
}
