'use client'

import Button from '@/components/customs/Button'
import View from '@/motions/View'
import { AuthContext } from '@/providers/AuthProvider'
import IonIcon from '@reacticons/ionicons'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'

export default function Account() {

    const { user } = useContext(AuthContext);

    return user ? (
        <Link href={'/profile'} className='relative'>
            <Button className='w-[2rem] h-[2rem] rounded-full'>
                {
                    user?.photoURL ? (
                        <Image src={user?.photoURL} alt="avatar" width={24} height={24} className='rounded-full' />
                    ) : (
                        <IonIcon name="person-circle-outline" className='text-cl-yellow text-3xl' />
                    )
                }
            </Button>
        </Link >
    ) : <Link href="/login">
        <Button className='text-icon'>
            <IonIcon name="log-in-outline" className='text-2xl' />
        </Button>
    </Link>


}
