import Button from '@/components/customs/Button'
import Input from '@/components/customs/Input'
import Label from '@/components/customs/Label'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
    return (
        <div className='flex flex-col gap-8 items-center w-full'>
            <h1 className='font-bold text-4xl font-dancing '>
                Đăng ký!
            </h1>
            <form className='flex flex-col gap-8 w-full'>
                <div className='flex flex-col w-full gap-1'>
                    <Label htmlFor='username' className='text-[15px]'>Tên đăng nhập</Label>
                    <Input name='username' id='username' required kind='form' />
                </div>
                <div className='flex flex-col w-full gap-1'>
                    <Label htmlFor='password' className='text-[15px]'>Mật khẩu</Label>
                    <Input name='password' id='password' type='password' required kind='form' />
                </div>
                <div className='flex flex-col w-full gap-1'>
                    <Label htmlFor='re_password' className='text-[15px]'>Nhập lại mật khẩu</Label>
                    <Input name='re_password' id='re_password' type='password' required kind='form' />
                </div>
                <Button kind='form' className='mt-4'>
                    Đăng ký
                </Button>
                <div className='flex flex-col gap-4 items-center'>
                    <span className='text-sm text-cl-text-silver'>
                        Bạn đã có tài khoản?
                    </span>
                    <Link href='/login' className='text-base text-cl-yellow-dark hover:underline'>
                        Đăng nhập
                    </Link>
                </div>
            </form>
        </div>
    )
}
