import ButtonTheme from '@/components/shared/ButtonTheme'
import Account from '../Account'
import Link from 'next/link'
import Button from '@/components/customs/Button'

export default function NavLink() {
    return (
        <nav className='flex gap-2 duration-150 md:gap-6 items-center'>
            <Link href='/'>
                <Button className='text-base' kind='long'>
                    <span>Trải nghiệm</span>
                </Button>
            </Link>
            <div className='flex justify-center items-center min-w-[2rem]'>
                <ButtonTheme />
            </div>
            <Account />
        </nav>
    )
}
