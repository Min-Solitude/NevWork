'use client'

import { IMAGES } from '@/assets'
import Button from '@/components/customs/Button'
import { useAppSelector } from '@/hooks/useRedux'
import IonIcon from '@reacticons/ionicons'
import Image from 'next/image'
import Link from 'next/link'

export default function Account() {

    const user = useAppSelector(state => state.auth.account)

    return user ? (
        <Link href={'/profile'} className='relative'>
            <Button>
                <Image src={user?.photoURL ? user?.photoURL : IMAGES.avatar} alt="avatar" width={28} height={28} className='rounded-full' />
            </Button>
        </Link >
    ) : <Link href="/login" className='flex justify-center items-center'>
        <Button className='text-icon'>
            <IonIcon name="log-in-outline" className='text-2xl text-cl-yellow' />
        </Button>
    </Link>


}
