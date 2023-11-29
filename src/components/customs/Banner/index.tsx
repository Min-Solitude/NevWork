import React from 'react'

type BannerProps = {
    className?: string
}

export default function Banner({ className }: BannerProps) {
    return (
        <section className={`p-2 ${className}`}>
            <div className='bg-white shadow-sd-primary rounded-xl duration-150 h-[20vh] md:h-[30vh] md:rounded-2xl xl:h-[40vh]'></div>
        </section>
    )
}
