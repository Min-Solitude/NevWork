'use client'

import Form from '../components/Form'
import { toast } from 'react-toastify'
import Toast from '@/components/customs/Toast'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/configs/firebase.config'

export default function RegisterPage() {

    async function registerAccount(d: FormData) {

        if (!d.get('email') || !d.get('password')) {
            return toast.error(<Toast message='Vui lòng điền đầy đủ thông tin' type='error' />)
        }

        if (String(d.get('password')).length < 6) {
            return toast.error(<Toast message='Mật khẩu phải có ít nhất 6 ký tự' type='error' />)
        }

        if (d.get('password') !== d.get('re_password')) {
            return toast.error(<Toast message='Mật khẩu không khớp' type='error' />)
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, String(d.get('email')), String(d.get('password')))

            console.log(user);

        } catch (error: any) {
            console.log(error);
            return toast.error(<Toast message={error?.response?.data?.message} type='error' />)
        }

    }

    return (
        <div className='flex flex-col gap-8 items-center w-full'>
            <h1 className='font-bold text-4xl font-dancing '>
                Đăng ký!
            </h1>
            <Form kind='register' submit={registerAccount} />
        </div>
    )
}
