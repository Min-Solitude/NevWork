'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import View from '@/motions/View'
import { getGreetings } from '@/store/reducers/mode/mode.reducer'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Greeting() {

    const dispatch = useAppDispatch()
    const isShowGreeting = useAppSelector(state => state.mode.isGreetings)
    const greeting = useAppSelector(state => state.mode.greetings)

    const [isDayOrNight, setIsDayOrNight] = React.useState(true)

    const handleDayOrNight = () => {
        const hours = new Date().getHours()
        if (hours > 6 && hours < 18) {
            setIsDayOrNight(true)
        } else {
            setIsDayOrNight(false)
        }
    }

    useEffect(() => {
        dispatch(getGreetings())
        handleDayOrNight()
    }, [])

    if (!isShowGreeting) return null

    return (
        <View className='fixed z-40 bottom-[16rem] cursor-pointer left-[8rem] max-w-[30rem]'
            drag
        >
            {
                greeting?.status ? (
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white font-dancing font-medium text-4xl flex gap-2 items-center'>
                            <span>{isDayOrNight ? 'Chào buối sáng' : 'Buổi tối vui vẻ'}</span>
                            <span>-</span>
                            <div className='w-[2rem] h-[2rem] rounded-full overflow-hidden'>
                                <Image src={'https://i.pinimg.com/564x/68/87/23/688723a19a837a3dd3f63ad8577c5171.jpg'} className='w-full h-full object-cover' alt='' width={500} height={500} />
                            </div>
                        </h1>
                        <i className='text-white text-base'>&quot;{greeting?.content}&quot;</i>
                    </div>
                ) : null
            }
        </View>
    )
}
