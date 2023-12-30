import Button from '@/components/customs/Button'
import IonIcon from '@reacticons/ionicons'
import Image from 'next/image'
import React from 'react'

type TopBarProps = {
    className?: string
}

export default function TopBar({ className }: TopBarProps) {
    return (
        <div className={`flex flex-col items-center justify-between gap-8 ${className}`}>
            <Button>
                <IonIcon name="happy" className='text-3xl text-white duration-150 dark:group-hover:text-cl-yellow' />
            </Button>
            <div className='flex flex-col gap-6'>
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div className='w-[2.6rem] h-[2.6rem] rounded-full border-2 border-cl-orange-secondary shadow-sd-primary overflow-hidden bg-white' key={index}>
                            <Image src={'https://i.pinimg.com/564x/40/44/13/4044135fc3b97d5c036caf6ddc258bac.jpg'} alt='' width={500} height={500} className='w-full h-full object-cover' />
                        </div>
                    ))
                }
            </div>
            <div>1</div>
        </div>
    )
}
