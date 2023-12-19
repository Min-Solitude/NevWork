'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import View from "@/motions/View"
import { ModeAction } from "@/store/reducers/mode/mode.reducer"
import IonIcon from "@reacticons/ionicons"
import Link from "next/link"
import { useState } from "react"
import Button from "../Button"
import Input from "../Input"

export default function Links() {

    const isLink = useAppSelector(state => state.mode.isLink)
    const [isError, setIsError] = useState(false)
    const dispatch = useAppDispatch()

    const isListLink = useAppSelector(state => state.mode.isListLink)

    // save link to localstorage
    const handleSaveLink = (link: string) => {
        // check link
        const check = link.includes('http')
        if (!check) {
            setIsError(true)
            return
        } else {
            setIsError(false)
        }

        // save link
        dispatch(ModeAction.setListLink(link))
    }

    if (!isLink) return null

    return (
        <View className="p-4 fixed rounded-lg w-[22rem] top-[6rem] left-[8rem] shadow-sd-primary text-base bg-bg-black-90 text-white cursor-pointer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            drag
        >
            <div className="w-full flex justify-between items-center">
                <h1 className="font-sans font-semibold text-base">Lưu đường dẫn</h1>
                <Button
                    onClick={() => dispatch(ModeAction.setLink(false))}
                >
                    <IonIcon name='close' className='text-xl text-cl-btn-light-bg-primary' />
                </Button>
            </div>
            <div className="flex flex-col mt-2 gap-2 w-full">
                <form className='flex gap-2 bg-cl-btn-dark-bg-primary py-2 pr-2 pl-4 rounded-lg'
                    onSubmit={(e: any) => {
                        e.preventDefault()
                        handleSaveLink(e.target[0].value)
                        e.target[0].value = ''
                    }}
                >

                    <Input
                        className='flex-1 text-white bg-transparent text-base outline-none'
                        placeholder='Link'
                        required
                    />
                    {
                        isError && <p className='text-red-500 text-sm'>Link không hợp lệ</p>
                    }
                    <Button
                        type='submit'
                    >
                        <IonIcon name='add' className='text-xl text-cl-btn-light-bg-primary' />
                    </Button>
                </form>
            </div>
            {
                isListLink.length > 0 && (
                    <div className="mt-4">
                        <h1 className='font-sans font-semibold text-base mt-2'>Danh sách</h1>
                        <div className='flex flex-col gap-3 mt-2 max-h-[10rem] overflow-y-scroll'>
                            {
                                isListLink.map((item: string, index: number) => (
                                    <div key={index} className="w-full flex justify-between items-start">
                                        <Link href={item} target='_blank' className='text-sm flex-1 line-clamp-1 hover:underline'>{item}</Link>
                                        <Button
                                            onClick={() => dispatch(ModeAction.deleteListLink(item))}
                                        >
                                            <IonIcon name='trash' className='text-xl text-cl-btn-light-bg-primary' />
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </View >
    )
}
