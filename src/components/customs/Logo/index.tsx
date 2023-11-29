import { IMAGES } from "@/assets"
import Image from "next/image"
import Link from "next/link"

type LogoProps = {
    className?: string
    kind?: 'default' | 'small'
    color?: 'default' | 'white'
}

export default function Logo({ className, kind = 'default', color = 'default' }: LogoProps) {
    return (
        <Link href="/" className={`flex justify-center items-center`}>
            <Image src={IMAGES.sofi} alt="sofi" className={`${kind === 'small' ? 'w-[60px]' : 'w-[70px]'} ${className}`} />
        </Link>
    )
}
