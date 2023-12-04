import Button from '@/components/customs/Button'
import Input from '@/components/customs/Input'
import Label from '@/components/customs/Label'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Đăng nhập | Sofi',
    description: '...',
}


export default function LoginPage() {
    return (
        <div className='flex flex-col gap-8 items-center w-full'>
            <h1 className='font-bold text-4xl font-dancing '>
                Đăng nhập!
            </h1>
            <form className='flex flex-col gap-8 w-full'>
                <div className='flex flex-col w-full gap-1'>
                    <Label htmlFor='username' className='text-[15px]'>Tên đăng nhập</Label>
                    <Input name='username' id='username' required kind='form' />
                </div>
                <div className='flex flex-col w-full gap-1'>
                    <Label htmlFor='password' className='text-[15px]'>Mật khẩu</Label>
                    <Input name='password' id='password' type='password' required kind='form' />
                    <Link href='/forgot-password' className='text-base text-cl-yellow-dark hover:underline'>
                        Quên mật khẩu?
                    </Link>
                </div>
                <Button kind='form' className='mt-4'>
                    Đăng nhập
                </Button>
                <div className='flex flex-col gap-4 items-center'>
                    <span className='text-sm text-cl-text-silver'>
                        Bạn chưa có tài khoản?
                    </span>
                    <Link href='/register' className='text-base text-cl-yellow-dark hover:underline'>
                        Đăng ký
                    </Link>
                </div>
            </form>
        </div>
    )
}
