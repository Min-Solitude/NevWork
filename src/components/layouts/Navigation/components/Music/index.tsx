'use client'

import Button from '@/components/customs/Button'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import View from '@/motions/View'
import { MusicAction } from '@/store/reducers/music/music.reducer'
import IonIcon from '@reacticons/ionicons'
import React, { useEffect } from 'react'

export default function Music() {

    const [isValueVolume, setIsValueVolume] = React.useState(70)
    const [isHidenVolume, setIsHidenVolume] = React.useState(false)
    const isChangeFrame = useAppSelector(state => state.music.changeFrameMusic)
    const showListMusic = useAppSelector(state => state.music.showListMusic)

    const statusMusic = useAppSelector(state => state.music.status)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(MusicAction.setStatusMusic(false))
    }, [])

    return (
        <div className='flex items-center gap-4'>
            <div className='flex gap-4 items-center py-[0.3rem] px-4 rounded-full shadow-sd-primary backdrop-blur-2xl  border-white border '>
                <Button
                    onClick={() => dispatch(MusicAction.setPrevOrderMusic())}
                >
                    <IonIcon name="play-skip-back" className='text-lg text-white ' />
                </Button>
                <Button
                    onClick={() => dispatch(MusicAction.setStatusMusic(!statusMusic))}
                >
                    {
                        statusMusic ? <IonIcon name="pause" className='text-lg text-white ' /> : <IonIcon name="play" className='text-lg  text-white' />
                    }
                </Button>
                <Button
                    onClick={() => dispatch(MusicAction.setNextOrderMusic())}
                >
                    <IonIcon name="play-skip-forward" className='text-lg text-white ' />
                </Button>
            </div >
            <div className='flex gap-2 items-center duration-150'>
                <Button
                    onClick={() => setIsHidenVolume(!isHidenVolume)}
                    kind='square'
                    className={` hover:bg-cl-yellow-dark dark:hover:text-cl-yellow dark:hover:border-cl-yellow border border-transparent dark:hover:bg-transparent ${isHidenVolume ? 'bg-cl-yellow-dark' : 'bg-transparent'}`}
                >
                    <IonIcon name={
                        isValueVolume > 70 ? 'volume-high' :
                            isValueVolume > 30 ? 'volume-medium' :
                                isValueVolume > 0 ? 'volume-low' : 'volume-mute'
                    } className={`text-xl ${isHidenVolume ? ' ' : ' '}`} />
                </Button>
                {
                    isHidenVolume && (
                        <View
                            className='flex items-center gap-2'
                        >
                            <input type="range" className='w-20 range h-1 slider' value={isValueVolume} onChange={(e) => {
                                setIsValueVolume(Number(e.target.value))
                                dispatch(MusicAction.setVolumeMusic(Number(e.target.value)))
                            }} max={100} min={0} />
                        </View>
                    )
                }
                <Button
                    onClick={() => dispatch(MusicAction.setChangeFrameMusic(!isChangeFrame))}
                    kind='square'
                    className={` hover:bg-cl-yellow-dark dark:hover:text-cl-yellow dark:hover:border-cl-yellow border border-transparent dark:hover:bg-transparent ${isChangeFrame ? 'bg-cl-yellow-dark' : 'bg-transparent'}`}
                >
                    <IonIcon name='repeat' className={`text-xl`} />
                </Button>
                <Button
                    kind='square'
                    onClick={() => dispatch(MusicAction.setShowListMusic(!showListMusic))}
                    className={` hover:bg-cl-yellow-dark dark:hover:text-cl-yellow dark:hover:border-cl-yellow border border-transparent dark:hover:bg-transparent ${showListMusic ? 'bg-cl-yellow-dark' : 'bg-transparent'}`}
                >
                    <IonIcon name='musical-note' className={`text-xl`} />
                </Button>
            </div>
        </div >
    )
}
