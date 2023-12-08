'use client'

import Button from '@/components/customs/Button'
import Input from '@/components/customs/Input'
import Label from '@/components/customs/Label'
import Toast from '@/components/customs/Toast'
import Loading from '@/components/shared/Loading'
import { auth, provider } from '@/configs/firebase.config'
import { useAppDispatch } from '@/hooks/useRedux'
import View from '@/motions/View'
import { authSelector } from '@/store/reducers/auth/auth.reducer'
import { User } from '@/store/reducers/auth/auth.type'
import IonIcon from '@reacticons/ionicons'
import { signInWithPopup } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

type FormProps = {
    kind?: 'login' | 'register'
    submit?: (d: FormData) => void
}

export default function Form({ kind, submit }: FormProps) {

    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const handleLoginGoogle = async () => {
        setLoading(true)
        try {
            const user = await signInWithPopup(auth, provider)
            console.log(user);
            
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

        } catch (error) {
            console.log(error);
            setLoading(false)
            return toast.error(<Toast message={`Đăng nhập thất bại`} type='error' />)
        }
    }

    return (
        <div className='w-full flex flex-col items-center'>
            {
                loading && <Loading />
            }
            {
                kind === 'login' && (
                    <View className='flex flex-col items-center w-full gap-8'
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
                        <Button type='button' kind='form' className='w-full gap-2 '
                            onClick={handleLoginGoogle}
                        >
                            <IonIcon name='logo-google' className='text-xl' />
                            <span>
                                Đăng nhập với Google
                            </span>
                        </Button>
                        <span className='text-sm text-cl-yellow-dark '>
                            hoặc
                        </span>
                    </View>
                )
            }
            <form className='flex flex-col gap-8 w-full' onSubmit={(e) => {
                e.preventDefault()
                submit?.(new FormData(e.target as HTMLFormElement))
            }}>
                <div className='flex flex-col w-full gap-1'>
                    <Label htmlFor='email' className='text-[15px]'>Tài khoản</Label>
                    <Input name='email' id='email' type='text' required kind='form' />
                </div>
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
        </div>
    )
}
