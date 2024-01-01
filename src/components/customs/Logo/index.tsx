import { Header } from '@/store/reducers/mode/mode.type';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
    className?: string;
    kind?: 'default' | 'small' | 'big' | 'large';
    color?: 'default' | 'white';
    header: Header;
};

export default function Logo({ className, kind = 'default', color = 'default', header }: LogoProps) {
    return (
        <Link href="/" className={`flex justify-center items-center`}>
            <Image
                src={header?.logo}
                width={100}
                alt="sofi"
                height={100}
                className={`${
                    kind === 'small'
                        ? 'w-[40px]'
                        : kind === 'big'
                        ? 'w-[60px]'
                        : kind === 'large'
                        ? 'w-[70px]'
                        : 'w-[50px]'
                } ${className}`}
            />
        </Link>
    );
}
