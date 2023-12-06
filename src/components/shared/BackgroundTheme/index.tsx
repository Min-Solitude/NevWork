'use client';

import { RootState } from '@/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'swr';

type BackgroundThemeProps = {
    className?: string;
    Bgfor?: 'auth' | 'main';
};

export default function BackgroundTheme({ className, Bgfor = 'main' }: BackgroundThemeProps) {
    const isDarkMode = useSelector((state: RootState) => state.managerAction.openMode);
    console.log();
    let textMode: string = '';
    console.log(textMode);
    if (Bgfor === 'auth')
        return (
            <video className={`${className}`} autoPlay muted loop>
                <source src="/videos/auth.mp4" type="video/mp4" />
            </video>
        );

    if (isDarkMode === 'dark') {
        return (
            <span>
                <video className={`${className}`} autoPlay muted loop>
                    <source src="/videos/night.mp4" type="video/mp4" />
                </video>
            </span>
        );
    }
    return (
        <div>
            <video className={`${className}`} autoPlay muted loop>
                <source src="videos/day.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
