import Button from '@/components/customs/Button';
import View from '@/motions/View';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
    return (
        <section className="flex justify-center flex-col gap-4 items-center h-screen bg-[#ffd554] text-black">
            <div className="flex gap-4 items-center">
                <Image
                    src={'https://i.pinimg.com/originals/72/db/56/72db56f4e8199ffd9ea70b85de814a9c.gif'}
                    width={1980}
                    height={1440}
                    alt=""
                    className="w-[200px]"
                />
                <div className="flex flex-col gap-4 items-end">
                    <div className="flex items-center gap-4">
                        <View
                            className="text-9xl font-bold text-[#558aff]"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            4
                        </View>
                        <View
                            className="text-9xl font-bold text-[#558aff]"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            0
                        </View>
                        <View
                            className="text-9xl font-bold text-[#558aff]"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            4
                        </View>
                    </div>
                    <Link href={'/'}>
                        <Button
                            kind="square"
                            className="bg-[#558aff] px-4 gap-4 hover:bg-[#558aff] font-bold dark:hover:bg-[#558aff] text-white dark:text-white"
                        >
                            <IonIcon name="home" className="text-xl text-white " />
                            <span>Quay về trang chủ</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
