'use client';

import { IMAGES } from '@/assets';
import Button from '@/components/customs/Button';
import Toast from '@/components/customs/Toast';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { hanldeSendAltar } from '@/store/reducers/altar/altar.reducer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function AltarPage() {
    const [isLoad, setIsLoad] = React.useState(false);
    const [isValue, setIsValue] = React.useState('');

    const [isAltar, setIsAltar] = React.useState<boolean | null>(null);
    const account = useAppSelector((state) => state.auth.account);

    const router = useRouter();

    const dispatch = useAppDispatch();

    const hanldeAltar = () => {
        if (isValue.length === 0) {
            return toast.error(<Toast message="Vui lòng nhập nội dung" type="error" />);
        }

        setIsLoad(true);
        setTimeout(() => {
            // random 50%
            setIsValue('');
            const random = Math.random() * 100;
            if (random > 50) {
                setIsAltar(true);
                setIsLoad(false);
                toast.success(<Toast message="Cầu siêu thành công" type="success" />);
                const payload = {
                    content: isValue,
                    uid: account?.uid,
                };
                if (account && isValue) {
                    dispatch(hanldeSendAltar(payload));
                }
            } else {
                setIsAltar(false);
                setIsLoad(false);
                toast.error(<Toast message="Cầu siêu thất bại" type="error" />);
            }
        }, 5000);
    };

    useEffect(() => {
        if (!account) {
            router.push('/login');
        }
    }, []);

    return (
        <section className="flex justify-center items-center bg-black relative h-screen text-white">
            <Image
                src={isAltar ? IMAGES.tom2 : IMAGES.tom}
                width={1980}
                height={1440}
                alt=""
                className="absolute left-0 top-0 w-full h-full object-cover brightness-50"
            />
            <Image
                src={IMAGES.altar}
                width={1920}
                height={1080}
                alt=""
                className="absolute left-0 top-0 w-full h-full object-cover "
            />
            <View
                className="w-full h-full min-h-screen flex justify-center relative items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <View
                    className="absolute top-8 right-8
                    text-4xl font-sans font-bold text-cl-yellow-dark
                "
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Tế đàn qua môn
                </View>
                <View className="absolute left-1/2 w-[15rem] flex-col gap-4 -translate-x-[35%] flex justify-center items-center translate-y-[-2rem]">
                    {isLoad ? (
                        <View
                            className="w-[8rem] h-[8rem] rounded-full overflow-hidden"
                            initial={{ opacity: 0, scale: 0.5, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={'https://i.pinimg.com/originals/67/7a/35/677a35fd61e601169388ef161e9f8e98.gif'}
                                width={1980}
                                height={1440}
                                alt=""
                                className="w-full object-cover h-full"
                            />
                        </View>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Nhập nội dung"
                                className="bg-white py-2 px-4 rounded-full text-center outline-none text-black w-full"
                                value={isValue}
                                onChange={(e) => setIsValue(e.target.value)}
                            />
                            <Button
                                className="bg-cl-yellow-dark text-black rounded-full py-2 w-full font-semibold text-sm"
                                onClick={() => hanldeAltar()}
                            >
                                Cầu nguyện
                            </Button>
                        </>
                    )}
                </View>
                <audio src="music/cas.mp3" autoPlay loop />
            </View>
        </section>
    );
}
