'use client'

import { IMAGES } from '@/assets'
import Button from '@/components/customs/Button'
import { useAppSelector } from '@/hooks/useRedux'
import IonIcon from '@reacticons/ionicons'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Profile from '../Profile'

export default function Account() {

    const [isShowModal, setIsShowModal] = useState(false)

    const user = useAppSelector(state => state.auth.account)

    // console.log(user);


    return user ? (
        <div className='relative'>
            {
                isShowModal && <Profile user={user} close={() => setIsShowModal(!isShowModal)} />
            }
            <Button
                onClick={() => setIsShowModal(!isShowModal)}
            >
                <Image src={user?.photoURL ? user?.photoURL : IMAGES.avatar} alt="avatar" width={36} height={36} className='rounded-full' />
            </Button>
        </div>
    ) : <Link href="/login" className='flex justify-center items-center'>
        <Button className='text-icon' kind='square'>
            <IonIcon name="person-circle-outline" className='text-2xl text-cl-yellow' />
        </Button>
    </Link>


}
