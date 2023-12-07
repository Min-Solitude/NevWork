'use client'

import Button from '@/components/customs/Button'
import IonIcon from '@reacticons/ionicons'
import React, { useEffect } from 'react'
import View from '@/motions/View'
import dynamic from 'next/dynamic'

type NavigationProps = {
    className?: string
}

const Time = dynamic(() => import('./components/Time'), { ssr: false })

export default function Navigation({ className }: NavigationProps) {

    const [isHidden, setIsHidden] = React.useState(true)

    const checkWidth = () => {
        if (window.innerWidth < 768) {
            setIsHidden(true)
        }
    }

    useEffect(() => {
        checkWidth()
        window.addEventListener('resize', checkWidth)
        return () => {
            window.removeEventListener('resize', checkWidth)
        }
    }, [])

    return (
        <div className={`absolute z-30 bottom-0 md:py-4 left-0 flex flex-col gap-4 w-full ${className}`}>
            <div className='md:w-[90%] w-full flex justify-start m-auto px-4 md:px-0'>
                <Time />
            </div>
            <div className={`m-auto bg-bg-black-90 h-[2.8rem] text-white relative duration-300 shadow-sd-primary text-base md:rounded-lg w-full flex  items-center ${!isHidden ? 'w-[2.8rem] justify-center' : ' md:w-[90%] px-4 justify-between'}`}>
                <Button className={` hidden md:flex ${isHidden && 'absolute right-4 '}`}
                    onClick={() => setIsHidden(!isHidden)}
                >
                    <IonIcon name="caret-back-circle-outline" className={`text-2xl ${!isHidden && 'rotate-90'}`} />
                </Button>
                {
                    isHidden && (
                        <View className='flex gap-2 items-center'
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2, type: 'tween', delay: 0.2 }}
                        >
                            <Button className=''>
                                <IonIcon name="home-outline" className='text-2xl text-cl-yellow' />
                            </Button>
                        </View>
                    )
                }
            </div>
        </div>
    )
}
