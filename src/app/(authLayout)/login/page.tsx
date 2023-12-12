'use client'

import Toast from '@/components/customs/Toast'
import Loading from '@/components/shared/Loading'
import { auth, db } from '@/configs/firebase.config'
import { useAppDispatch } from '@/hooks/useRedux'
import { authSelector } from '@/store/reducers/auth/auth.reducer'
import { User } from '@/store/reducers/auth/auth.type'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Form from '../components/Form'
import { useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default function LoginPage() {

    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (d: FormData) => {
        setLoading(true)
        try {
            const user = await signInWithEmailAndPassword(auth, `${String(d.get('email'))}@gmail.com`, String(d.get('password')))

            const userDocRef = doc(db, 'users', user.user?.uid);
            const docSnap = await getDoc(userDocRef);


            if (docSnap.exists()) {
                await dispatch(authSelector(docSnap.data()))
                setLoading(false)
                router.push('/')
            } else {
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
                        time: 0
                    }
                });
                setLoading(false)
                await dispatch(authSelector({
                    uid: user.user?.uid,
                    account: formatEmail(user.user?.email),
                    displayName: user.user?.displayName,
                    photoURL: user.user?.photoURL,
                    phoneNumber: user.user?.phoneNumber,
                    role: 'user',
                    loginBy: 'account',
                    vip: {
                        isVip: false,
                        time: 0
                    }
                }))
                router.push('/')
            }
        } catch (error: any) {
            console.log(error);
            setLoading(false)
            return toast.error(<Toast message={`Đăng nhập thất bại`} type='error' />)
        }
    }

    function formatEmail(email: any) {
        return email.replace(/\@.*/, '');
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
