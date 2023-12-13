'use client'

import Toast from '@/components/customs/Toast'
import Loading from '@/components/shared/Loading'
import { auth, db } from '@/configs/firebase.config'
import { useAppDispatch } from '@/hooks/useRedux'
import { authSelector } from '@/store/reducers/auth/auth.reducer'
import { User } from '@/store/reducers/auth/auth.type'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Form from '../components/Form'
import { doc, setDoc } from 'firebase/firestore'

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
            const user = await createUserWithEmailAndPassword(auth, `${String(d.get('email'))}@gmail.com`, String(d.get('password')))

            const dataSave: User = {
                uid: user.user?.uid,
                account: formatEmail(user.user?.email),
                displayName: user.user?.displayName,
                photoURL: user.user?.photoURL,
                phoneNumber: user.user?.phoneNumber,
                role: 'user',
                loginBy: 'account',
                vip: {
                    isVip: false,
                    createdAt: null,
                    expiredAt: null,
                    package: null,
                }
            }

            const userDocRef = doc(db, 'users', user.user?.uid);

            await setDoc(userDocRef, {
                uid: user.user?.uid,
                displayName: user.user?.displayName,
                account: formatEmail(user.user?.email),
                photoURL: user.user?.photoURL,
                phoneNumber: user.user?.phoneNumber,
                role: 'user',
                loginBy: 'account',
                vip: {
                    isVip: false,
                    createdAt: null,
                    expiredAt: null,
                    package: null,
                }
            });

            await dispatch(authSelector(dataSave))
            setIsLoading(false)
            router.push('/')

        } catch (error: any) {
            console.log(error);
            setIsLoading(false)
            return toast.error(<Toast message={`Đăng ký thất bại`} type='error' />)
        }

    }

    function formatEmail(email: any) {
        return email.replace(/\@.*/, '');
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
