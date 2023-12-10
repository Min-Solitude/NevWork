'use client'

import { dataMusic } from '@/data/music.data'
import { useAppSelector } from '@/hooks/useRedux'
import View from '@/motions/View';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

export default function CDMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const statusMusic = useAppSelector(state => state.music.status)
    // const orderMusic = useAppSelector(state => state.music.order)

    useEffect(() => {
        if (statusMusic && audioRef.current) {
            audioRef.current.play();
        } else if (audioRef.current) {
            audioRef.current.pause();
        }
    }, [statusMusic]);

    return (
        <div className='flex items-center gap-12'>
            <div className='flex flex-col items-end'>
                <p>{dataMusic[0].name}</p>
                <i className='text-sm'>By - minSinger</i>
            </div>
            <div className='w-[30vw] h-[30vw] max-w-[4rem] max-h-[4rem] flex justify-center relative items-center shadow-sd-primary'>
                <div className='w-full h-full flex justify-center items-center rounded-lg overflow-hidden z-10'>
                    <Image src={dataMusic[0].thumbnail} width={800} height={800} className=' w-full h-full object-cover' alt={dataMusic[0].name} />
                </div>
                <View className='w-[90%] h-[90%] rounded-full  absolute  overflow-hidden translate-x-1/2'
                    animate={{
                        translateX: ['-60%', '-60%'],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    <div className='w-full h-full flex relative justify-center items-center'>
                        <div className='absolute w-[1rem] h-[1rem]  flex justify-center items-center rounded-full bg-white'></div>
                        <Image src={dataMusic[0].thumbnail} width={800} height={800} className=' w-full h-full object-cover' alt={dataMusic[0].name} />
                    </div>
                </View>
            </div>
            <audio
                className='hidden'
                src={dataMusic[0].url}
                ref={audioRef}
                autoPlay={statusMusic}
            />
        </div>
    )
}