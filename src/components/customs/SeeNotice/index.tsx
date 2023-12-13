import View from '@/motions/View';
import { Notice } from '@/store/reducers/notice/notice.type'
import React from 'react'
import Button from '../Button';
import { useAppDispatch } from '@/hooks/useRedux';
import { deleteNotice } from '@/store/reducers/notice/notice.reducer';

type SeeNoticeProps = {
    notice: Notice
    close?: () => void
}

export default function SeeNotice({ notice, close }: SeeNoticeProps) {

    const dispatch = useAppDispatch()

    const handleFormatTime = (time: number) => {
        const date = new Date(time)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    const handleDeleteNotice = (id: string) => {
        dispatch(deleteNotice({ id }))
        close && close()
    }

    return (
        <div className='fixed top-0 left-0 bottom-0 bg-bg-black-90 right-0 flex justify-center items-center'>
            <View
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-lg px-4 pt-8 py-4 w-[30rem] relative overflow-y-auto'
            >
                <h1 className='font-sans font-bold text-xl'>{notice?.title}</h1>
                <p className='mt-4 text-base'><span className='text-[16px] font-semibold'>Nội dung :</span> {notice?.content}</p>
                <span className='text-xs font-bold absolute top-9 right-5 py-1 px-4 rounded-full bg-cl-yellow'>{notice?.createdAt ? handleFormatTime(notice?.createdAt) : ''}</span>
                <div className='flex gap-4 items-center mt-4'>
                    <Button className='flex-1 rounded-lg text-base font-semibold py-2 bg-cl-btn-dark-bd-primary text-white'
                        onClick={close}
                    >
                        Đóng
                    </Button>
                    <Button className='flex-1 rounded-lg text-base font-semibold py-2 bg-red-500 text-white'
                        onClick={() => {
                            notice?.id && handleDeleteNotice(notice?.id)
                        }}
                    >
                        Xóa thông báo
                    </Button>
                </div>
            </View>
        </div>
    )
}
