'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import View from '@/motions/View'
import { ModeAction } from '@/store/reducers/mode/mode.reducer'
import IonIcon from '@reacticons/ionicons'
import Close from '../Close'
import Toggle from '../Toggle'
import { useState } from 'react'
import BackgroundDefault from './BackgroundDefault'

export default function ManagerBackground() {

    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(state => state.mode.isShowPopupManagerImage)
    const [isSetKindScreen, setIsSetKindScreen] = useState(useAppSelector(state => state.mode.kindScreen));

    if (!isOpen) {
        return null
    }

    return (
        <div className='top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center fixed'>
            <View className='w-full md:max-w-[80vw] h-[80vh] text-base rounded-xl shadow-sd-primary relative backdrop-blur-[10rem]'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, type: 'tween' }}
            >
                <Close className='absolute top-6 right-6' onClick={() => dispatch(ModeAction.setShowPopupManagerImage(false))} />
                <div className='p-6 flex flex-col items-start justify-start gap-6'>
                    <h1 className='font-dancing text-white text-2xl'>
                        Quản lý ảnh nền
                    </h1>
                    <div className='bg-white py-2 px-4 rounded-lg  duration-150 flex gap-6 items-center'>
                        <h2 className='flex items-center gap-2 text-black text-base'>
                            <IonIcon name='laptop-outline' className='text-lg' />
                            <i>Loại nền : <span>{isSetKindScreen ? 'Nền động' : 'Nền tĩnh'}</span></i>
                        </h2>
                        <Toggle kind='dark' isTurnOn={isSetKindScreen} handleToggle={() => {
                            setIsSetKindScreen(!isSetKindScreen)
                            dispatch(ModeAction.setKindScreen(!isSetKindScreen))
                        }} />
                    </div>
                    <div className='text-white flex flex-col gap-4'>
                        <i className='underline'>Mặc định</i>
                        <BackgroundDefault kindScreen={isSetKindScreen} />
                    </div>
                </div>
            </View>
        </div>
    )
}
