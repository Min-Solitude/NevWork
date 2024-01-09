'use client';

import { dataMusic } from '@/data/music.data';
import { useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import Image from 'next/image';
import { useEffect } from 'react';

export default function CDMusic() {
    const isTurnOnMusic = useAppSelector((state) => state.music.status);
    const isOrderMusic = useAppSelector((state) => state.music.order);
    const isVolumeMusic = useAppSelector((state) => state.music.volume);

    const changeMusic = useAppSelector((state) => state.music.changeFrameMusic);

    useEffect(() => {
        const audio = document.querySelector('audio');
        if (audio) {
            audio.volume = isVolumeMusic / 100;
        }
    }, [isVolumeMusic]);

    return (
        <div className="flex items-center  gap-12">
            {isTurnOnMusic && <audio src={dataMusic[isOrderMusic].url} autoPlay loop />}
            {changeMusic ? (
                <View
                    className=" bg-yellow-200  relative"
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    exit={{ x: 100 }}
                    transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                >
                    <div className="p-2 rounded-lg  backdrop-blur-[2rem] shadow-sd-primary border border-cl-btn-light-bg-primary absolute bottom-0 w-[12rem] right-0">
                        <div className="h-[10rem] rounded-lg overflow-hidden border border-cl-btn-light-bg-primary">
                            <Image
                                src={dataMusic[isOrderMusic].thumbnail}
                                width={800}
                                height={800}
                                className=" w-full h-full object-cover"
                                alt={dataMusic[isOrderMusic].name}
                            />
                        </div>
                        <div className="flex flex-col my-2 items-end text-white">
                            <p className="font-sans font-semibold">{dataMusic[isOrderMusic].name}</p>
                            <i className="text-sm">By - {dataMusic[isOrderMusic].orderBy}</i>
                        </div>
                    </div>
                </View>
            ) : (
                <>
                    <div className="flex flex-col items-end text-white">
                        <p>{dataMusic[isOrderMusic].name}</p>
                        <i className="text-sm">By - {dataMusic[isOrderMusic].orderBy}</i>
                    </div>
                    <div className="w-[30vw] h-[30vw] max-w-[4rem] max-h-[4rem] flex justify-center relative items-center shadow-sd-primary">
                        <div className="w-full h-full flex justify-center items-center rounded-lg overflow-hidden z-10">
                            <Image
                                src={dataMusic[isOrderMusic].thumbnail}
                                width={800}
                                height={800}
                                className=" w-full h-full object-cover"
                                alt={dataMusic[isOrderMusic].name}
                            />
                        </div>
                        <View
                            className="w-[90%] h-[90%] rounded-full  absolute  overflow-hidden translate-x-1/2"
                            animate={{
                                translateX: ['-60%', '-60%'],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <div className="w-full h-full flex relative justify-center items-center bg-gradient-to-r from-cl-btn-dark-bd-primary to-cl-btn-dark-bg-primary">
                                <div className="absolute w-[1rem] h-[1rem]  flex justify-center items-center rounded-full bg-white"></div>
                            </div>
                        </View>
                    </div>
                </>
            )}
        </div>
    );
}
