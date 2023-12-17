'use client'

import Button from '@/components/customs/Button'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import View from '@/motions/View'
import { MusicAction } from '@/store/reducers/music/music.reducer'
import IonIcon from '@reacticons/ionicons'
import React from 'react'

export default function Music() {

    const [isValueVolume, setIsValueVolume] = React.useState(70)
    const [isHidenVolume, setIsHidenVolume] = React.useState(false)

    const statusMusic = useAppSelector(state => state.music.status)
    const dispatch = useAppDispatch()

    return (
        <div className='flex items-center gap-4'>
            <div className='flex gap-4 items-center py-[0.3rem] px-4 rounded-full shadow-sd-primary backdrop-blur-2xl  border-white border dark:border-cl-yellow'>
                <Button
                    onClick={() => dispatch(MusicAction.setPrevOrderMusic())}
                >
                    <IonIcon name="play-skip-back" className='text-lg text-white dark:text-cl-yellow' />
                </Button>
                <Button
                    onClick={() => dispatch(MusicAction.setStatusMusic(!statusMusic))}
                >
                    {
                        statusMusic ? <IonIcon name="pause" className='text-lg text-white dark:text-cl-yellow' /> : <IonIcon name="play" className='text-lg dark:text-cl-yellow text-white' />
                    }
                </Button>
                <Button
                    onClick={() => dispatch(MusicAction.setNextOrderMusic())}
                >
                    <IonIcon name="play-skip-forward" className='text-lg text-white dark:text-cl-yellow' />
                </Button>
            </div>
            <div className='flex gap-2 items-center duration-150'>
                <Button
                    onClick={() => setIsHidenVolume(!isHidenVolume)}
                    kind='square'
                    className={` hover:bg-cl-yellow-dark dark:hover:border-cl-yellow border border-transparent dark:hover:bg-transparent ${isHidenVolume ? 'bg-cl-yellow-dark' : 'bg-transparent'}`}
                >
                    <IonIcon name={
                        isValueVolume > 70 ? 'volume-high' :
                            isValueVolume > 30 ? 'volume-medium' :
                                isValueVolume > 0 ? 'volume-low' : 'volume-mute'
                    } className={`text-xl text-white ${isHidenVolume ? 'dark:text-white ' : 'dark:text-cl-yellow '}`} />
                </Button>
                {
                    isHidenVolume && (
                        <View
                            className='flex items-center gap-2'
                        >
                            <input type="range" className='w-20 range h-1 slider' value={isValueVolume} onChange={(e) => setIsValueVolume(Number(e.target.value))} max={100} min={0} />
                        </View>
                    )
                }
            </div>
        </div>
    )
}
