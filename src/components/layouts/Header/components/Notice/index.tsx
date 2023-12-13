import Button from '@/components/customs/Button'
import IonIcon from '@reacticons/ionicons'
import React from 'react'

export default function Notice() {
    return (
        <div className='md:flex hidden justify-center items-center min-w-[2rem]'>
            <Button kind='square'>
                <IonIcon name="notifications" className='text-2xl' />
            </Button>
        </div>
    )
}
