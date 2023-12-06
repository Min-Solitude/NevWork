import Button from '@/components/customs/Button'
import { useAppDispatch } from '@/hooks/useRedux'
import View from '@/motions/View'
import { AuthAction } from '@/store/reducers/auth/auth.reducer'
import { User } from '@/store/reducers/auth/auth.type'
import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type ProfileProps = {
    user: User
    close: () => void
}

export default function Profile({ user, close }: ProfileProps) {

    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleLogout = () => {
        dispatch(AuthAction.logout())
        router.push('/login')
    }

    return (
        <View className='absolute border flex flex-col gap-2 border-cl-btn-dark-bd-primary bg-bg-black-90 w-[12rem] text-base top-full right-0 translate-y-1/2 shadow-sd-primary p-2 rounded-lg'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}
        >
            <Link href='/profile'>
                <Button className='gap-2 text-white py-1 px-2 rounded-md hover:text-cl-yellow-dark font-medium'
                    onClick={close}
                >
                    <IonIcon name='person' className='text-lg -translate-y-[0.1rem]' />
                    <span className='font-semibold tracking-wide'>Thông tin cá nhân</span>
                </Button>
            </Link>
            <div>
                <Button className='gap-2 text-white py-1 px-2 rounded-md hover:text-cl-yellow-dark font-medium'
                    onClick={handleLogout}
                >
                    <IonIcon name='log-out' className='text-lg -translate-y-[0.1rem]' />
                    <span className='font-semibold tracking-wide'>
                        Đăng xuất
                    </span>
                </Button>
            </div>
        </View>
    )
}
