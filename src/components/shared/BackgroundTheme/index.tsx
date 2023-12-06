'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { setThemeVideo } from '@/store/reducers/mode/mode.reducer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

type BackgroundThemeProps = {
    className?: string;
    Bgfor?: 'auth' | 'main';
};

export default function BackgroundTheme({ className, Bgfor = 'main' }: BackgroundThemeProps) {
    const isMode = useAppSelector((state) => state.mode.theme);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isMode === 'default') {
            dispatch(setThemeVideo('day'));
        }
    }, [isMode]);

    if (Bgfor === 'auth')
        return (
            <View className="h-full">
                <video className={`${className}`} autoPlay muted loop>
                    <source src="/videos/auth.mp4" type="video/mp4" />
                </video>
            </View>
        );
    if (isMode === 'day') {
        return (
            <View className="h-full">
                <video className={`${className}`} autoPlay muted loop>
                    <source src={`videos/day.mp4`} type="video/mp4" />
                </video>
            </View>
        );
    }
    if (isMode === 'night') {
        return (
            <div className="h-full">
                <video className={`${className}`} autoPlay muted loop>
                    <source src={`videos/night.mp4`} type="video/mp4" />
                </video>
            </div>
        );
    }
    return null
}
