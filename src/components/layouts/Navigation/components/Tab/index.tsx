'use client'

import Button from '@/components/customs/Button'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { ModeAction } from '@/store/reducers/mode/mode.reducer'
import IonIcon from '@reacticons/ionicons'
import React from 'react'

export default function Tab() {

    const dispatch = useAppDispatch()

    const tabYoutube = useAppSelector(state => state.mode.isTabYoutube)
    const isNote = useAppSelector(state => state.mode.isNote)
    const isTabLink = useAppSelector(state => state.mode.isLink)

    return (
        <div className='flex gap-2 items-center'>
            <Button className='bg-transparent hover:bg-cl-yellow-dark dark:hover:bg-transparent group border border-transparent dark:hover:border-cl-yellow' kind='square'>
                <IonIcon name="home" className='text-xl duration-150 text-white dark:group-hover:text-cl-yellow' />
            </Button>
            <Button className='bg-transparent hover:bg-cl-yellow-dark group dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow' kind='square'>
                <IonIcon name="calendar" className='text-xl duration-150 text-white dark:group-hover:text-cl-yellow' />
            </Button>
            <Button className={`${isNote ? 'bg-cl-yellow-dark text-white group border border-transparent' : 'bg-transparent group hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow '}`} kind='square'
                onClick={() => dispatch(ModeAction.setNote(!isNote))}
            >
                <IonIcon name="book" className='text-xl text-white duration-150 dark:group-hover:text-cl-yellow' />
            </Button>
            <Button className={`${tabYoutube ? 'bg-cl-yellow-dark text-white group border border-transparent' : 'bg-transparent group hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow '}`} kind='square'
                onClick={() => dispatch(ModeAction.setTabYoutube(!tabYoutube))}
            >
                <IonIcon name="logo-youtube" className='text-xl text-white duration-150 dark:group-hover:text-cl-yellow' />
            </Button>
            <Button className={`${isTabLink ? 'bg-cl-yellow-dark text-white group border border-transparent' : 'bg-transparent group hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow '}`} kind='square'
                onClick={() => dispatch(ModeAction.setLink(!isTabLink))}
            >
                <IonIcon name="link" className='text-xl text-white duration-150 dark:group-hover:text-cl-yellow' />
            </Button>
        </div>
    )
}
