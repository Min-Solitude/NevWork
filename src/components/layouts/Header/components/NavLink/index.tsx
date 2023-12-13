"use client"
import ButtonTheme from '@/components/shared/ButtonTheme'
import Account from '../Account'
import ZoomFullScreen from '../ZoomFullScreen'
import Notice from '../Notice'


export default function NavLink() {

    return (
        <div className='flex gap-2 duration-150 md:gap-4  items-center'>
            <Notice />
            <ZoomFullScreen />
            <div className='flex justify-center items-center min-w-[2rem]'>
                <ButtonTheme />
            </div>
            <Account />
        </div>
    )
}
