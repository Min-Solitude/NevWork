'use client'

import Button from '@/components/customs/Button'
import Input from '@/components/customs/Input'
import Label from '@/components/customs/Label'
import Title from '@/components/customs/Title'
import Toast from '@/components/customs/Toast'
import Loading from '@/components/shared/Loading'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { handleAuthUpdatePassword } from '@/store/reducers/auth/auth.reducer'
import React from 'react'
import { toast } from 'react-toastify'

export default function ProfileChangePassword(user: any) {

    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.auth.loading);

    const handleUpdatePassword = (e: any) => {
        e.preventDefault();

        const data = new FormData(e.target);

        if (String(data.get('new-password')).length < 6) {
            toast.error(<Toast message={`Mật khẩu ít nhất phải 6 ký tự`} type='error' />)
            return;
        }

        const payload = {
            newPassword: String(data.get('new-password')),
            oldPassword: String(data.get('password')),
        }

        dispatch(handleAuthUpdatePassword(payload));

        e.target.reset();
    }

    if (user.user.loginBy === 'google') {
        return (
            <div className='py-4'>
                <i className='text-center'>
                    <span className='text-white text-sm'>Bạn đang đăng nhập bằng tài khoản google, vui lòng đăng nhập lại bằng tài khoản khác để thay đổi mật khẩu</span>
                </i>
            </div>
        )
    }

    return (
        <div className='py-4'>
            {
                loading && <Loading />
            }
            <Title title="Đổi mật khẩu" icon={'lock-closed'} className='-translate-y-1' />
            <form className='mt-4 flex flex-col gap-4' onSubmit={(e: any) => handleUpdatePassword(e)}>
                <div className='w-full flex flex-col gap-1'>
                    <Label htmlFor="password">
                        <span className='text-white text-sm'>Mật khẩu cũ</span>
                    </Label>
                    <Input
                        kind="form"
                        id="password"
                        name="password"
                        type="password"
                        required
                    />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <Label htmlFor="new-password">
                        <span className='text-white text-sm'>Mật khẩu mới</span>
                    </Label>
                    <Input
                        kind="form"
                        id="new-password"
                        name="new-password"
                        type="password"
                        required
                    />
                </div>
                <Button kind='form' className='mt-4' type='submit'>
                    <span className='text-white text-sm'>Lưu</span>
                </Button>
            </form>
        </div>
    )
}
