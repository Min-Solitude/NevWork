import ButtonTheme from '@/components/shared/ButtonTheme'
import Account from '../Account'
import Link from 'next/link'
import Button from '@/components/customs/Button'

export default function NavLink() {
    return (
        <nav className='flex gap-2 md:gap-4 items-center'>
            <Link href='/'>
                <Button className='text-sm' kind='long'>
                    <span className='text-cl-text-gray dark:text-white'>Trải nghiệm</span>
                </Button>
            </Link>
            <ButtonTheme />
            <Account />
        </nav>
    )
}
