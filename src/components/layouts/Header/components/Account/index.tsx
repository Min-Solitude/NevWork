import Button from '@/components/customs/Button'
import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'

export default function Account() {
    return (
        <Link href="/login">
            <Button kind='cribel' className='text-icon'>
                <IonIcon name="person" className='text-white' />
            </Button>
        </Link>
    )
}
