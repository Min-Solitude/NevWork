'use client'

import Button from '@/components/customs/Button'
// import { useGetUserByIdQuery } from '@/store/services/api'
import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'

export default function Account() {

    const idUser = localStorage.getItem('idUserSofi')
    // const { data, isLoading } = useGetUserByIdQuery(idUser)
    
    // console.log(data);






    return (
        <Link href="/login">
            <Button kind='cribel' className='text-icon'>
                <IonIcon name="person" className='text-white' />
            </Button>
        </Link>
    )
}
