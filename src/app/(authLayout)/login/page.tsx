'use client'

import Toast from '@/components/customs/Toast'
import Loading from '@/components/shared/Loading'
import { auth } from '@/configs/firebase.config'
import { useAppDispatch } from '@/hooks/useRedux'
import { authSelector } from '@/store/reducers/auth/auth.reducer'
import { User } from '@/store/reducers/auth/auth.type'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Form from '../components/Form'
import { useState } from 'react'

export default function LoginPage() {

    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (d: FormData) => {
        setLoading(true)
        try {
            const user = await signInWithEmailAndPassword(auth, `${String(d.get('email'))}@gmail.com`, String(d.get('password')))

            const dataSave: User = {
                uid: user.user?.uid,
                email: user.user?.email,
                displayName: user.user?.displayName,
                photoURL: user.user?.photoURL,
                phoneNumber: user.user?.phoneNumber,
            }

            await dispatch(authSelector(dataSave))
            setLoading(false)
            router.push('/')

        } catch (error: any) {
            console.log(error);
            setLoading(false)
            return toast.error(<Toast message={`Đăng nhập thất bại`} type='error' />)
        }
    }

    return (
        <div className='flex flex-col gap-8 items-center w-full'>
            {
                loading && <Loading />
            }
            <h1 className='font-bold text-4xl font-dancing '>
                Đăng nhập!
            </h1>
            <Form kind='login' submit={handleLogin} />
        </div>
    )
}
