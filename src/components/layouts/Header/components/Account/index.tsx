import Button from '@/components/customs/Button'
import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'

export default function Account() {
    return (
        <Link href="/login">
            <Button kind='cribel' className='text-xl'>
                <IonIcon name="person" className='text-cl-text-gray dark:text-white' />
            </Button>
        </Link>
    )
}
