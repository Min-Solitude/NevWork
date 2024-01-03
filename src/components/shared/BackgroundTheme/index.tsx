'use client';

import { IMAGES } from '@/assets';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getBackground } from '@/store/reducers/mode/mode.reducer';
import { Background } from '@/store/reducers/mode/mode.type';
import Image from 'next/image';
import { useEffect } from 'react';

type BackgroundThemeProps = {
    className?: string;
    Bgfor?: 'auth' | 'main';
};

export default function BackgroundTheme({ className, Bgfor = 'main' }: BackgroundThemeProps) {
    const isMode = useAppSelector((state) => state.mode.theme);
    const isKindScreen = useAppSelector((state) => state.mode.kindScreen);
    const isNameVideo = useAppSelector((state) => state.mode.nameScreen);
    const dispatch = useAppDispatch();

    const account = useAppSelector((state) => state.auth.account);

    const background = useAppSelector((state) => state.mode.background) as any;

    useEffect(() => {
        dispatch(getBackground());
    }, []);

    if (!isKindScreen) {
        if (Bgfor === 'main') {
            return (
                <div className="h-full duration-150 bg-white">
                    {isNameVideo === 'room' && (
                        <Image
                            key={isNameVideo}
                            src={isMode === 'day' ? IMAGES.roomday : IMAGES.roomnight}
                            width={1980}
                            height={1440}
                            className="w-full h-full object-cover"
                            alt="sofi"
                        />
                    )}
                    {background ? (
                        background.map(
                            (item: Background, index: number) =>
                                item.name === isNameVideo && (
                                    <Image
                                        key={index}
                                        src={isMode === 'day' ? item.backgroundDay : item.backgroundNight}
                                        width={1980}
                                        height={1440}
                                        className="w-full h-full object-cover"
                                        alt="sofi"
                                    />
                                ),
                        )
                    ) : (
                        <Image
                            src={isMode === 'day' ? IMAGES.roomday : IMAGES.roomnight}
                            width={1980}
                            height={1440}
                            className="w-full h-full object-cover"
                            alt="sofi"
                        />
                    )}

                    {/* {isNameVideo === 'room' ? (
                        <Image
                            src={isMode === 'day' ? IMAGES.roomday : IMAGES.roomnight}
                            width={1980}
                            height={1440}
                            className="w-full h-full object-cover"
                            alt="sofi"
                        />
                    ) : isNameVideo === 'house' ? (
                        <Image
                            src={isMode === 'day' ? IMAGES.houseday : IMAGES.housenight}
                            width={1980}
                            height={1440}
                            className="w-full h-full object-cover"
                            alt="sofi"
                        />
                    ) : account?.vip?.isVip ? (
                        isNameVideo === 'cac' ? (
                            <Image
                                src={isMode === 'day' ? IMAGES.cacday : IMAGES.cacnight}
                                width={1980}
                                height={1440}
                                className="w-full h-full object-cover"
                                alt="sofi"
                            />
                        ) : isNameVideo === 'japan' ? (
                            <Image
                                src={isMode === 'day' ? IMAGES.japanday : IMAGES.japannight}
                                width={1980}
                                height={1440}
                                className="w-full h-full object-cover"
                                alt="sofi"
                            />
                        ) : isNameVideo === 'sky' ? (
                            <Image
                                src={isMode === 'day' ? IMAGES.skyday : IMAGES.skynight}
                                width={1980}
                                height={1440}
                                className="w-full h-full object-cover"
                                alt="sofi"
                            />
                        ) : isNameVideo === 'fox' ? (
                            <Image
                                src={isMode === 'day' ? IMAGES.foxday : IMAGES.foxnight}
                                width={1980}
                                height={1440}
                                className="w-full h-full object-cover"
                                alt="sofi"
                            />
                        ) : (
                            <Image
                                src={isMode === 'day' ? IMAGES.roomday : IMAGES.roomnight}
                                width={1980}
                                height={1440}
                                className="w-full h-full object-cover"
                                alt="sofi"
                            />
                        )
                    ) : (
                        <Image
                            src={isMode === 'day' ? IMAGES.roomday : IMAGES.roomnight}
                            width={1980}
                            height={1440}
                            className="w-full h-full object-cover"
                            alt="sofi"
                        />
                    )} */}
                </div>
            );
        } else {
            return (
                <div className="h-full">
                    <video className={`${className}`} autoPlay muted loop>
                        <source src="/videos/auth.mp4" type="video/mp4" />
                    </video>
                </div>
            );
        }
    }

    return (
        <div className="h-full duration-150 bg-white">
            {Bgfor === 'main' ? (
                <>
                    {isNameVideo === 'room' && (
                        <>
                            <video
                                key={isNameVideo}
                                className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`}
                                autoPlay
                                muted
                                loop
                            >
                                <source src={`videos/roomday.mp4`} type="video/mp4" />
                            </video>
                            <video
                                className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`}
                                autoPlay
                                muted
                                loop
                            >
                                <source src={`videos/roomnight.mp4`} type="video/mp4" />
                            </video>
                        </>
                    )}
                    {isNameVideo === 'house' && (
                        <>
                            <video
                                key={isNameVideo}
                                className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`}
                                autoPlay
                                muted
                                loop
                            >
                                <source src={`videos/houseday.mp4`} type="video/mp4" />
                            </video>
                            <video
                                className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`}
                                autoPlay
                                muted
                                loop
                            >
                                <source src={`videos/housenight.mp4`} type="video/mp4" />
                            </video>
                        </>
                    )}
                    {account?.vip?.isVip ? (
                        <>
                            {isNameVideo === 'cac' && (
                                <>
                                    <video
                                        key={isNameVideo}
                                        className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/cacday.mp4`} type="video/mp4" />
                                    </video>
                                    <video
                                        className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/cacnight.mp4`} type="video/mp4" />
                                    </video>
                                </>
                            )}
                            {isNameVideo === 'fox' && (
                                <>
                                    <video
                                        key={isNameVideo}
                                        className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/foxday.mp4`} type="video/mp4" />
                                    </video>
                                    <video
                                        className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/foxnight.mp4`} type="video/mp4" />
                                    </video>
                                </>
                            )}
                            {isNameVideo === 'japan' && (
                                <>
                                    <video
                                        key={isNameVideo}
                                        className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/japanday.mp4`} type="video/mp4" />
                                    </video>
                                    <video
                                        className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/japannight.mp4`} type="video/mp4" />
                                    </video>
                                </>
                            )}
                            {isNameVideo === 'sky' && (
                                <>
                                    <video
                                        key={isNameVideo}
                                        className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/skyday.mp4`} type="video/mp4" />
                                    </video>
                                    <video
                                        className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`}
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={`videos/skynight.mp4`} type="video/mp4" />
                                    </video>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <video
                                key={isNameVideo}
                                className={`${isMode === 'night' && 'hidden'} duration-150 ${className}`}
                                autoPlay
                                muted
                                loop
                            >
                                <source src={`videos/roomday.mp4`} type="video/mp4" />
                            </video>
                            <video
                                className={`${isMode === 'day' && 'hidden'} duration-150 ${className}`}
                                autoPlay
                                muted
                                loop
                            >
                                <source src={`videos/roomnight.mp4`} type="video/mp4" />
                            </video>
                        </>
                    )}
                </>
            ) : (
                <div className="h-full">
                    <video className={`${className}`} autoPlay muted loop>
                        <source src="/videos/auth.mp4" type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
}
