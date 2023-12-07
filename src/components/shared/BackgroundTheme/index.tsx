'use client';

import { useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { useEffect, useState } from 'react';

type BackgroundThemeProps = {
    className?: string;
    Bgfor?: 'auth' | 'main';
};

export default function BackgroundTheme({ className, Bgfor = 'main' }: BackgroundThemeProps) {
    const isMode = useAppSelector((state) => state.mode.theme);
    const isNameVideo = 'room'

    if (Bgfor === 'auth')
        return (
            <div className="h-full">
                <video className={`${className}`} autoPlay muted loop>
                    <source src="/videos/auth.mp4" type="video/mp4" />
                </video>
            </div>
        );

    return <div className='h-full duration-150 bg-white'>
        <video className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`} autoPlay muted loop>
            <source src={`videos/${isNameVideo}day.mp4`} type="video/mp4" />
        </video>
        <video className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`} autoPlay muted loop>
            <source src={`videos/${isNameVideo}night.mp4`} type="video/mp4" />
        </video>
    </div>
}
