'use client'

import Button from '@/components/customs/Button'
import View from '@/motions/View'
import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'
import { useState } from 'react'

type PaymentProps = {
    close: () => void
}

export default function Payment({ close }: PaymentProps) {

    const [isChoose, setIsChoose] = useState<'month' | 'year'>('month')

    const [isError, setIsError] = useState(false)

    return (
        <div className='fixed top-0 left-0 bottom-0 flex flex-col items-center justify-center right-0  font-sans bg-bg-black-90 z-50'>
            <View className='p-4 rounded-xl flex flex-col gap-4 bg-black shadow-sd-primary w-full max-w-[28rem] min-h-[50vh] relative'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, type: 'tween' }}
            >
                <button
                    onClick={close}
                >
                    <IonIcon name='close-outline' className='absolute top-4 right-4 text-2xl' onClick={close} />
                </button>
                <div className='flex gap-2 items-center'>
                    <IonIcon name='diamond' className='text-xl' />
                    <p className=' text-lg font-semibold'>
                        Nâp cấp vip
                    </p>
                </div>
                <div className='flex gap-4'>
                    <div className={`flex-1 h-[6rem] rounded-lg p-2 border shadow-sd-secondary  bg-[#292929] ${isChoose === 'month' ? 'border-cl-yellow' : 'border-[#2c2c2c]'}`}
                        onClick={() => setIsChoose('month')}
                    >
                        <h1 className='font-semibold text-xl'>80,000đ/<span className='text-sm text-cl-yellow-dark'>tháng</span> </h1>
                        <i className='text-[12px] text-gray-400'>
                            Nâng cấp gói tháng để mở rộng thêm những tính năng mới.
                        </i>
                    </div>
                    <div className={`flex-1 h-[6rem] rounded-lg p-2 border shadow-sd-secondary  cursor-pointer bg-[#292929] ${isChoose === 'year' ? 'border-cl-yellow' : 'border-[#2c2c2c]'}`}
                        onClick={() => setIsChoose('year')}
                    >
                        <h1 className='font-semibold text-xl'>200,000đ/<span className='text-sm text-cl-yellow-dark'>năm</span> </h1>
                        <i className='text-[12px] text-gray-400'>
                            Nâng cấp gói năm để mở rộng tính năng mới và đặng quyền mới.
                        </i>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-semibold text-lg'>{isChoose === 'month' ? 'Nâng cấp gói tháng' : 'Nâng cấp gói năm'}</h1>
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            isChoose === 'month' ? (
                                <>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Mở bộ hình nền Vip
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Gói 10 bài hát
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Danh hiệu nạp card nữa vời
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Mở tính năng đăng cảm xúc
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Đồng hồ vip
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Có người yêu
                                        </p>
                                        <IonIcon name='close-outline' className='text-xl text-red-600' />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Mở bộ hình nền Vip
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Gói 20 bài hát
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Danh hiệu nạp card xịn sò
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Mở tính năng đăng cảm xúc
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Đồng hồ vip
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Bộ nền story vip
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Mở rộng cài đặt
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Chia sẻ hồ sơ
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Tạo tiêu đề hồ sơ
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Cảm xúc hồ sơ
                                        </p>
                                        <IonIcon name='checkmark-outline' className='text-xl text-cl-yellow-dark' />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-white font-medium'>
                                            Có người yêu
                                        </p>
                                        <IonIcon name='close-outline' className='text-xl text-red-600' />
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className='mt-4 flex flex-col gap-4'>
                        <Button kind='form' className='w-full'
                            onClick={() => setIsError(true)}
                        >
                            Thanh toán
                        </Button>
                        {
                            isError && (
                                <i className='text-[14px] text-red-500'>Hiện tại chức năng thanh toán trên webiste đang bảo trì. Bạn có thể liên hệ với admin qua fanpage để được hướng dẫn thanh toán.</i>
                            )
                        }
                        <Link href={'https://www.facebook.com/nefystudies'} target='_blank'>
                            <Button kind='form' className='w-full'>
                                Liên hệ
                            </Button>
                        </Link>
                    </div>
                </div>
            </View >
        </div >
    )
}
