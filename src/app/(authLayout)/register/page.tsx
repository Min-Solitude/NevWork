'use client'

import Form from '../components/Form'
import { toast } from 'react-toastify'
import Toast from '@/components/customs/Toast'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/configs/firebase.config'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { authSelector } from '@/store/reducers/auth/auth.reducer'
import Loading from '@/components/shared/Loading'
import { useRouter } from 'next/navigation'
import { User } from '@/store/reducers/auth/auth.type'
import { useEffect, useState } from 'react'

export default function RegisterPage() {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    async function registerAccount(d: FormData) {

        setIsLoading(true)

        if (!d.get('email') || !d.get('password')) {
            setIsLoading(false)
            return toast.error(<Toast message='Vui lòng điền đầy đủ thông tin' type='error' />)
        }

        if (String(d.get('password')).length < 6) {
            setIsLoading(false)
            return toast.error(<Toast message='Mật khẩu phải có ít nhất 6 ký tự' type='error' />)
        }

        if (d.get('password') !== d.get('re_password')) {
            setIsLoading(false)
            return toast.error(<Toast message='Mật khẩu không khớp' type='error' />)
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, String(d.get('email')), String(d.get('password')))

            const dataSave: User = {
                uid: user.user?.uid,
                email: user.user?.email,
                displayName: user.user?.displayName,
                photoURL: user.user?.photoURL,
                phoneNumber: user.user?.phoneNumber,
            }

            await dispatch(authSelector(dataSave))
            setIsLoading(false)
            router.push('/')

        } catch (error: any) {
            console.log(error);
            setIsLoading(false)
            return toast.error(<Toast message={`Đăng ký thất bại`} type='error' />)
        }

    }

    return (
        <div className='flex flex-col gap-8 items-center w-full'>
            {
                isLoading && <Loading />
            }
            <h1 className='font-bold text-4xl font-dancing '>
                Đăng ký!
            </h1>
            <Form kind='register' submit={registerAccount} />
        </div>
    )
}
