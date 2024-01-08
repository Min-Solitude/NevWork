'use client';

import { useAppSelector } from '@/hooks/useRedux';
import Image from 'next/image';
import Link from 'next/link';

type LogoAuthProps = {
    className?: string;
};

export default function LogoAuth({ className }: LogoAuthProps) {
    const Logo = useAppSelector((state) => state.mode.header?.logo);

    if (!Logo) return null;

    return (
        <Link href="/" className={`flex justify-center items-center`}>
            <Image src={Logo} width={100} alt="sofi" height={100} className={`w-[40px] ${className}`} />
        </Link>
    );
}
