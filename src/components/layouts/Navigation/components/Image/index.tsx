import Button from '@/components/customs/Button'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { ModeAction } from '@/store/reducers/mode/mode.reducer'
import IonIcon from '@reacticons/ionicons'
import React from 'react'

export default function Image() {

    const dispatch = useAppDispatch()
    const isShowPopupMusic = useAppSelector(state => state.mode.isShowPopupManagerImage)

    return (
        <div>
            <Button
                kind='square'
                className={` hover:bg-cl-yellow-dark dark:hover:border-cl-yellow border border-transparent dark:hover:bg-transparent bg-transparent`}
                onClick={() => {
                    dispatch(ModeAction.setShowPopupManagerImage(!isShowPopupMusic))
                }}
            >
                <IonIcon name="image" className='text-xl text-white dark:text-cl-yellow' />
            </Button>
        </div>
    )
}
