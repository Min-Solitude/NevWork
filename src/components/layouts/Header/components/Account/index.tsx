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
                        <div className='w-[36px] h-[36px] rounded-full overflow-hidden'>
                            <Image src={isAccount?.photoURL ? isAccount?.photoURL : IMAGES.avatar} alt="avatar" width={36} height={36} className='rounded-full shadow-sd-primary' />
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
