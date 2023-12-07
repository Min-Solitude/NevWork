'use client'

import Button from '@/components/customs/Button'
import IonIcon from '@reacticons/ionicons'
import React from 'react'

export default function ZoomFullScreen() {


    const handleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            document.documentElement.requestFullscreen()
        }
    }

    return (
        <div className='flex justify-center items-center min-w-[2rem]'>
            <Button kind='square'>
                <IonIcon name="expand-outline" className='text-2xl' onClick={handleFullScreen} />
            </Button>
        </div>
    )
}
