'use client'

import Button from '@/components/customs/Button'
import Input from '@/components/customs/Input'
import Label from '@/components/customs/Label'
import Toast from '@/components/customs/Toast'
import Loading from '@/components/shared/Loading'
import http from '@/configs/http.config'
import { useAppDispatch } from '@/hooks/useRedux'
import View from '@/motions/View'
import { setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

type FormProps = {
    kind?: 'login' | 'register'
}

export default function Form({ kind }: FormProps) {

    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const dataForm = new FormData(e.currentTarget);

        return kind === 'login'
            ? loginAccount(String(dataForm.get('email')), String(dataForm.get('password')))
            : registerAccount(dataForm)
    }

    async function loginAccount(email: string, password: string) {
        setIsLoading(true)
        try {
            const dataLogin = {
                email: email,
                password: password
            }

            const res = await http.post('/auth/login', dataLogin)

            if (res.status === 200) {
                setIsLoading(false)
                setCookie('accessToken', res?.data?.accessToken, {
                    maxAge: 60 * 60 * 24 * 7,
                    path: '/'
                })
                localStorage.setItem('idUserSofi', res?.data?.id)
                router.push('/')
            }
        } catch (error: any) {
            console.log(error);
            setIsLoading(false)
            return toast.error(<Toast message={error?.response?.data?.message} type='error' />)
        }
    }

    async function registerAccount(d: FormData) {

        if (!d.get('email') || !d.get('password') || !d.get('username')) {
            return toast.error(<Toast message='Vui lòng điền đầy đủ thông tin' type='error' />)
        }

        if (String(d.get('password')).length < 8) {
            return toast.error(<Toast message='Mật khẩu phải có ít nhất 8 ký tự' type='error' />)
        }

        if (d.get('password') !== d.get('re_password')) {
            return toast.error(<Toast message='Mật khẩu không khớp' type='error' />)
        }

        try {
            const dataRegister = {
                email: d.get('email'),
                password: d.get('password'),
                username: d.get('username')
            }

            const res = await http.post('/auth/register', dataRegister)

            console.log(res);

            if (res.status === 200) {
                return toast.success(<Toast message='Đăng ký thành công' type='success' />)
            }

        } catch (error: any) {
            console.log(error);
            return toast.error(<Toast message={error?.response?.data?.message} type='error' />)
        }

    }

    return (
        <form className='flex flex-col gap-8 w-full' onSubmit={onSubmit}>
            {
                isLoading && <Loading />
            }
            <div className='flex flex-col w-full gap-1'>
                <Label htmlFor='email' className='text-[15px]'>Email</Label>
                <Input name='email' id='email' type='email' required kind='form' />
            </div>
            {
                kind === 'register' && (
                    <View className='flex flex-col w-full gap-1'
                        variants={{
                            hidden: {
                                opacity: 0,
                                height: 0,
                                overflow: 'hidden',
                                transition: {
                                    duration: 0.2
                                }
                            },
                            visible: {
                                opacity: 1,
                                height: 'auto',
                                overflow: 'visible',
                                transition: {
                                    duration: 0.2
                                }
                            }
                        }}
                        initial='hidden'
                        animate='visible'
                    >
                        <Label htmlFor='username' className='text-[15px]'>
                            Tên tài khoản
                        </Label>
                        <Input name='username' id='username' type='text' required kind='form' />
                    </View>
                )
            }
            <div className='flex flex-col w-full gap-1'>
                <Label htmlFor='password' className='text-[15px]'>Mật khẩu</Label>
                <Input name='password' id='password' type='password' required kind='form' />
            </div>
            {
                kind === 'register' && (
                    <View className='flex flex-col w-full gap-1'
                        variants={{
                            hidden: {
                                opacity: 0,
                                height: 0,
                                overflow: 'hidden',
                                transition: {
                                    duration: 0.2
                                }
                            },
                            visible: {
                                opacity: 1,
                                height: 'auto',
                                overflow: 'visible',
                                transition: {
                                    duration: 0.2
                                }
                            }
                        }}
                        initial='hidden'
                        animate='visible'
                    >
                        <Label htmlFor='re_password' className='text-[15px]'>Nhập lại mật khẩu</Label>
                        <Input name='re_password' id='re_password' type='password' required kind='form' />
                    </View>
                )
            }
            <Button kind='form' type='submit' className='mt-4' >
                {
                    kind === 'login' ? 'Đăng nhập' : 'Đăng ký'
                }
            </Button>
            <div className='flex flex-col gap-4 items-center'>
                <span className='text-sm text-cl-text-silver'>
                    {
                        kind === 'login' ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'
                    }
                </span>
                {
                    kind === 'login' ? (
                        <Link href='/register' className='text-base text-cl-yellow-dark hover:underline'>
                            Đăng ký
                        </Link>
                    ) : (
                        <Link href='/login' className='text-base text-cl-yellow-dark hover:underline'>
                            Đăng nhập
                        </Link>
                    )
                }
            </div>
        </form>
    )
}
