'use client'

import Button from '@/components/customs/Button'
import CDMusic from '@/components/customs/CDMusic'
import View from '@/motions/View'
import IonIcon from '@reacticons/ionicons'
import dynamic from 'next/dynamic'

type NavigationProps = {
    className?: string
}

const Time = dynamic(() => import('./components/Time'), { ssr: false })
const Music = dynamic(() => import('./components/Music'), { ssr: false })

export default function Navigation({ className }: NavigationProps) {

    return (
        <div className={`absolute z-30 bottom-0 md:py-4 left-0 flex flex-col gap-4 w-full ${className}`}>
            <div className='md:w-[90%] w-full flex justify-between items-center m-auto px-4 md:px-0'>
                <Time />
                <CDMusic />
            </div>
            <div className={`m-auto bg-bg-black-90 text-white relative duration-300 shadow-sd-primary text-base md:rounded-lg w-full flex  items-center md:w-[90%] p-2 justify-between`}>
                <View className='flex gap-2 items-center justify-between w-full'
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2, type: 'tween', delay: 0.2 }}
                >
                    <div className='flex gap-2 items-center'>
                        <Button className='bg-transparent hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow' kind='square'>
                            <IonIcon name="home" className='text-xl text-white dark:text-cl-yellow' />
                        </Button>
                        <Button className='bg-transparent hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow' kind='square'>
                            <IonIcon name="calendar" className='text-xl text-white dark:text-cl-yellow' />
                        </Button>
                        <Button className='bg-transparent hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow' kind='square'>
                            <IonIcon name="logo-youtube" className='text-xl text-white dark:text-cl-yellow' />
                        </Button>
                    </div>
                    <div className='flex gap-2 items-center absolute left-1/2 -translate-x-1/2'>
                        <Music />
                    </div>
                    <div className='flex gap-2 items-center'>
                        1
                    </div>
                </View>
            </div>
        </div>
    )
}
