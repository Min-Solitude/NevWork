'use client'

import Button from '@/components/customs/Button'
import Close from '@/components/customs/Close'
import View from '@/motions/View'
import IonIcon from '@reacticons/ionicons'
import React from 'react'

export default function ListMusic() {

    const [isShowListMusic, setIsShowListMusic] = React.useState(false)

    return (
        <>
            {
                isShowListMusic && (
                    <View
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}
                        className='fixed left-0 right-0 flex justify-center items-center'
                    >
                        <div className='bg-bg-black-90 h-[60vh] w-full max-w-[60vw] shadow-sd-primary rounded-2xl p-4 relative'>
                            <Close onClick={() => setIsShowListMusic(false)} className='absolute top-8 right-8' />
                        </div>
                    </View>
                )
            }
            <Button kind='square'
                onClick={() => setIsShowListMusic(true)}
                className={`${isShowListMusic && 'opacity-0'}`}
            >
                <IonIcon name='musical-note' className='text-2xl' />
            </Button>
        </>
    )
}
