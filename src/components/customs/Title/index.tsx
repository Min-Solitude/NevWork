import IonIcon from '@reacticons/ionicons';
import React from 'react'

type TitleProps = {
    title: string;
    className?: string;
    icon?: any;
}

export default function Title({ title, className, icon }: TitleProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {
                icon && <span className='flex justify-center items-center'><IonIcon name={icon} className='text-white text-[18px]' /></span>
            }
            <h1 className={`font-semibold text-[18px] text-white`}>
                {title}
            </h1>
        </div>
    )
}
