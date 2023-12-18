'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import View from '@/motions/View'
import React from 'react'
import Button from '../Button'
import { dataMusic } from '@/data/music.data'
import Image from 'next/image'
import IonIcon from '@reacticons/ionicons'
import { MusicAction } from '@/store/reducers/music/music.reducer'
import Payment from '@/components/shared/Payment'

export default function ListMusic() {

    const showList = useAppSelector(state => state.music.showListMusic)
    const [isChoose, setIsChoose] = React.useState('free')
    const isOrderMusic = useAppSelector(state => state.music.order)
    const dispatch = useAppDispatch()
    const account = useAppSelector(state => state.auth.account)
    const [isShowPay, setIsShowPay] = React.useState(false)

    if (!showList) return null

    return (
        <View className='bg-bg-black-90 p-4 flex flex-col gap-4 cursor-pointer text-base w-[22rem] text-white rounded-lg shadow-sd-primary'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, type: 'tween', delay: 0.2 }}
            drag
        >
            {
                isShowPay && <Payment close={() => setIsShowPay(false)} />
            }
            <div className='w-full flex justify-between items-center'>
                <h1 className='font-sans font-semibold'>Danh sách nhạc</h1>
                <Button
                    onClick={() => dispatch(MusicAction.setShowListMusic(false))}
                >
                    <IonIcon name='close' className='text-lg text-white' />
                </Button>
            </div>
            <div className='flex gap-2 items-center'>
                <Button className={`  py-1 px-6 rounded-lg font-semibold font-sans border border-cl-yellow-dark ${isChoose === 'free' ? ' bg-cl-yellow-dark text-black ' : 'bg-transparent text-cl-yellow-dark'}`}
                    onClick={() => setIsChoose('free')}
                >Miễn phí</Button>
                <Button className={`  py-1 px-6 rounded-lg font-semibold font-sans border border-cl-yellow-dark ${isChoose === 'vip' ? ' bg-cl-yellow-dark text-black ' : 'bg-transparent text-cl-yellow-dark'}`}
                    onClick={() => setIsChoose('vip')}
                >Vip</Button>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                {
                    dataMusic.map((item, index) => {
                        if (isChoose === 'free' && item.kind === 'free') {
                            return (
                                <div key={index} className={`flex gap-2 items-center rounded-lg ${isOrderMusic === index && 'bg-cl-yellow-dark text-black'}`}
                                    onClick={() => {
                                        dispatch(MusicAction.setOrderMusic(index))
                                        dispatch(MusicAction.setStatusMusic(true))
                                    }}
                                >
                                    <div className='flex items-center rounded-lg overflow-hidden w-[2.5rem] h-[2.5rem] gap-2'>
                                        <Image src={item.thumbnail} alt={item.name} className='w-full h-full object-cover' width={500} height={500} />
                                    </div>
                                    <p className='font-sans font-semibold'>{item.name}</p>
                                </div>
                            )
                        }
                        if (isChoose === 'vip' && item.kind === 'vip') {
                            return (
                                <div key={index} className={`flex gap-2 items-center rounded-lg ${isOrderMusic === index && 'bg-cl-yellow-dark text-black'}`}
                                    onClick={() => {
                                        if (account?.vip?.isVip) {
                                            dispatch(MusicAction.setOrderMusic(index))
                                            dispatch(MusicAction.setStatusMusic(true))
                                        } else {
                                            setIsShowPay(true)
                                        }
                                    }}
                                >
                                    <div className='flex items-center rounded-lg overflow-hidden w-[2.5rem] h-[2.5rem] gap-2'
                                    >
                                        <Image src={item.thumbnail} alt={item.name} className='w-full h-full  object-cover' width={500} height={500} />
                                    </div>
                                    <p className='font-sans font-semibold'>{item.name}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </View>
    )
}
