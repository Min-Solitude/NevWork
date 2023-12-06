'use client'

import Button from '@/components/customs/Button'
import Input from '@/components/customs/Input'
import Label from '@/components/customs/Label'
import View from '@/motions/View'
import Link from 'next/link'

type FormProps = {
    kind?: 'login' | 'register'
    submit?: (d: FormData) => void
}

export default function Form({ kind, submit }: FormProps) {

    return (
        <form className='flex flex-col gap-8 w-full' onSubmit={(e) => {
            e.preventDefault()
            submit?.(new FormData(e.target as HTMLFormElement))
        }}>
            <div className='flex flex-col w-full gap-1'>
                <Label htmlFor='email' className='text-[15px]'>Email</Label>
                <Input name='email' id='email' type='email' required kind='form' />
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
    )
}
