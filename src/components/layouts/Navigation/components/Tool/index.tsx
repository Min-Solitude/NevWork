'use client'

import Button from '@/components/customs/Button'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { ModeAction } from '@/store/reducers/mode/mode.reducer'
import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'
import React from 'react'

export default function Tool() {

    const dispatch = useAppDispatch()

    const isShowFile = useAppSelector(state => state.mode.isShowFile)


    return (
        <div className='px-2 flex gap-2 items-center'>
            <Link href='/forum'>
                <Button className={` bg-transparent group hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow`} kind='square'
                >
                    <IonIcon name="chatbox-ellipses" className='text-xl text-white duration-150 dark:group-hover:text-cl-yellow' />
                </Button>
            </Link>
            <Button className={`${isShowFile ? 'bg-cl-yellow-dark text-white group border border-transparent' : 'bg-transparent group hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow '}`} kind='square'
                onClick={() => dispatch(ModeAction.setShowFile(!isShowFile))}
            >
                <IonIcon name="file-tray" className='text-xl text-white duration-150 dark:group-hover:text-cl-yellow' />
            </Button>
        </div>
    )
}
