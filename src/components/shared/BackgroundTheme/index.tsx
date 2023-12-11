'use client';

import { IMAGES } from '@/assets';
import { useAppSelector } from '@/hooks/useRedux';
import Image from 'next/image';

type BackgroundThemeProps = {
    className?: string;
    Bgfor?: 'auth' | 'main';
};

export default function BackgroundTheme({ className, Bgfor = 'main' }: BackgroundThemeProps) {
    const isMode = useAppSelector((state) => state.mode.theme);
    const isKindScreen = useAppSelector((state) => state.mode.kindScreen);
    const isNameVideo = useAppSelector((state) => state.mode.nameScreen);

    console.log(isNameVideo);


    if (!isKindScreen) {
        if (Bgfor === 'main') {
            return (
                <div className='h-full duration-150 bg-white'>
                    {
                        isNameVideo === 'room' ? (
                            <Image src={isMode === 'day' ? IMAGES.roomday : IMAGES.roomnight} width={1980} height={1440} className='w-full h-full object-cover' alt='sofi' />
                        ) : isNameVideo === 'house' ? (
                            <Image src={isMode === 'day' ? IMAGES.houseday : IMAGES.housenight} width={1980} height={1440} className='w-full h-full object-cover' alt='sofi' />
                        ) : null
                    }
                </div>
            )
        } else {
            return (
                <div className="h-full">
                    <video className={`${className}`} autoPlay muted loop>
                        <source src="/videos/auth.mp4" type="video/mp4" />
                    </video>
                </div>
            )
        }
    }


    return <div className='h-full duration-150 bg-white'>
        {
            Bgfor === 'main' ? (
                <>
                    <video className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`} autoPlay muted loop>
                        <source src={`videos/${isNameVideo}day.mp4`} type="video/mp4" />
                    </video>
                    <video className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`} autoPlay muted loop>
                        <source src={`videos/${isNameVideo}night.mp4`} type="video/mp4" />
                    </video>
                </>
            ) : (
                <div className="h-full">
                    <video className={`${className}`} autoPlay muted loop>
                        <source src="/videos/auth.mp4" type="video/mp4" />
                    </video>
                </div>
            )
        }
    </div >
}
