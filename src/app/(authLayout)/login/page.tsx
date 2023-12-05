import { Metadata } from 'next'
import Form from '../components/Form'

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
            <Form kind='login' />
        </div>
    )
}
