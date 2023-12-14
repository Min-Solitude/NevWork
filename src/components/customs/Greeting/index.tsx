'use client'

import { useAppSelector } from '@/hooks/useRedux'
import React from 'react'

export default function Greeting() {

    const isGreetings = useAppSelector(state => state.mode.isGreetings)

    if (!isGreetings) return null

    return (
        <div className='bg-yellow-300'>Greeting</div>
    )
}
