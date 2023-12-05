import { Metadata } from 'next'
import Form from '../components/Form'

export const metadata: Metadata = {
    title: 'Đăng ký | Sofi',
    description: '...',
}

export default function RegisterPage() {
    return (
        <div className='flex flex-col gap-8 items-center w-full'>
            <h1 className='font-bold text-4xl font-dancing '>
                Đăng ký!
            </h1>
            <Form kind='register' />
        </div>
    )
}
