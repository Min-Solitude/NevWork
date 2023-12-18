'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import View from '@/motions/View'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Button from '../Button'
import IonIcon from '@reacticons/ionicons'
import { ModeAction, getFileTray } from '@/store/reducers/mode/mode.reducer'

export default function FileTray() {

    const isShowFileTray = useAppSelector(state => state.mode.isShowFile)
    const dispatch = useAppDispatch()
    const fileTray = useAppSelector(state => state.mode.fileTray)

    const [isSend, setIsSend] = React.useState(false)
    const [isValue, setIsValue] = React.useState('')

    useEffect(() => {
        dispatch(getFileTray())
    }, [])

    if (!isShowFileTray) return null

    return (
        <div className='fixed bg-bg-black-90 top-0 left-0 bottom-0 px-4 right-0 z-50 flex justify-center items-center w-full'>

            <View className='bg-black w-full overflow-hidden rounded-xl relative flex justify-center items-center lg:max-w-[60vw] h-[60vh] shadow-sd-primary'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
            >
                {
                    fileTray?.status && (
                        <Image src={`${fileTray?.background}`} width={1980} height={1440} alt='' className='w-full h-full object-cover' />
                    )
                }
                <div className='absolute top-4 left-4 flex items-start gap-2 max-w-[30rem] z-10'>
                    <IonIcon name='information-circle-outline' className='text-xl text-white text-cl-black' />
                    <i className='text-white text-base flex-1'>
                        {fileTray?.title}
                    </i>
                </div>
                <Button className='absolute top-4 cursor-pointer right-4 bg-white p-2 rounded-lg text-cl-text-gray z-10'
                    onClick={() => dispatch(ModeAction.setShowFile(false))}
                >
                    <IonIcon name='close-outline' className='text-xl' />
                </Button>
                <div className='absolute top-0 left-0 bottom-0 flex-col gap-8 right-0 flex justify-center items-center'>
                    {
                        isSend && (
                            <View className='flex flex-col justify-center bg-white overflow-hidden w-[80%] rounded-xl text-base items-center gap-4'
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <textarea className='w-full outline-none min-h-[25vh] p-4'
                                    value={isValue}
                                    onChange={(e) => setIsValue(e.target.value)}
                                    placeholder='Nhập nội dung thư...'
                                />
                            </View>
                        )
                    }
                    {
                        fileTray?.status ? (
                            <div className='flex gap-4 items-center'>
                                <Button className='py-2 px-4 rounded-full shadow-sd-primary bg-cl-yellow-dark text-white font-sans border border-cl-yellow-dark font-semibold text-base w-[8rem]'
                                    onClick={() => setIsSend(true)}
                                >
                                    {
                                        isSend ? (
                                            <IonIcon name='paper-plane' className='text-xl' />
                                        ) : (
                                            <>Gửi thư</>
                                        )
                                    }
                                </Button>
                                {
                                    isSend && (
                                        <Button className='py-2 px-4 rounded-full shadow-sd-primary bg-cl-yellow-dark text-white font-sans border border-cl-yellow-dark font-semibold text-base w-[8rem]'
                                            onClick={() => setIsSend(false)}
                                        >
                                            Hủy
                                        </Button>
                                    )
                                }
                            </div>
                        ) : (
                            <div className='py-2 px-4 rounded-full shadow-sd-primary bg-cl-yellow-dark text-white font-sans border border-cl-yellow-dark font-semibold text-base'>
                                {fileTray?.noticeErr}
                            </div>
                        )
                    }
                </div>
            </View>
        </div>
    )
}
