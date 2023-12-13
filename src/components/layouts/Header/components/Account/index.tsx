'use client'

import { IMAGES } from '@/assets'
import Button from '@/components/customs/Button'
import { useAppSelector } from '@/hooks/useRedux'
import IonIcon from '@reacticons/ionicons'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Profile from '../Profile'
import { User } from '@/store/reducers/auth/auth.type'

export default function Account() {

    const [isShowModal, setIsShowModal] = useState(false)

    const user = useAppSelector(state => state.auth.account)
    const [isAccount, setIsAccount] = useState<User | null>(null)

    useEffect(() => {
        if (user) {
            setIsAccount(user)
        }
    }, [user])


    return <div>
        {
            isAccount ? (
                <>
                    {
                        isShowModal && <Profile user={isAccount} close={() => setIsShowModal(!isShowModal)} />
                    }
                    <Button
                        onClick={() => setIsShowModal(!isShowModal)}
                    >
                        <div className='w-[36px] h-[36px] rounded-full relative'>
                            <Image src={isAccount?.photoURL ? isAccount?.photoURL : 'https://i.pinimg.com/564x/16/3e/39/163e39beaa36d1f9a061b0f0c5669750.jpg'} alt="avatar" width={36} height={36} className='rounded-full w-full h-full object-cover shadow-sd-primary' />
                            {
                                isAccount?.vip?.isVip && (
                                    <div className='absolute -top-2 -right-2 bg-white flex justify-center items-center p-1 rounded-full'>
                                        <IonIcon name="diamond" className='text-base text-blue-500' />
                                    </div>
                                )
                            }
                        </div>
                    </Button>
                </>
            ) : <Link href="/login" className='flex justify-center items-center'>
                <Button className='text-icon' kind='square'>
                    <IonIcon name="person-circle-outline" className='text-2xl text-cl-yellow' />
                </Button>
            </Link>
        }
    </div>


}
