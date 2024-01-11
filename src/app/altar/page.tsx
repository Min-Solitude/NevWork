'use client';

import { IMAGES } from '@/assets';
import Button from '@/components/customs/Button';
import Toast from '@/components/customs/Toast';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { hanldeSendAltar } from '@/store/reducers/altar/altar.reducer';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function AltarPage() {
    const [isLoad, setIsLoad] = React.useState(false);
    const [isValue, setIsValue] = React.useState('');
    const [isChooseAltar, setIsChooseAltar] = React.useState(1);

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
                setIsLoad(false);
                toast.success(<Toast message="Cầu nguyện thành công" type="success" />);
                const payload = {
                    content: isValue,
                    uid: account?.uid,
                };
                if (account && isValue) {
                    dispatch(hanldeSendAltar(payload));
                }
            } else {
                setIsLoad(false);
                toast.error(<Toast message="Cầu nguyện thất bại" type="error" />);
            }
        }, 5000);
    };

    useEffect(() => {
        if (!account) {
            router.push('/login');
        }
    }, []);

    console.log(account);

    return (
        <section className="flex justify-center items-center bg-white relative h-screen text-black">
            <Link className="absolute top-4 left-4" href={'/'}>
                <Button className="  px-5 text-gray-800" kind="form">
                    <IonIcon name="arrow-back" className="text-xl" />
                </Button>
            </Link>
            <div className="w-[90%] min-h-[90%] xl:w-[80%] 2xl:w-[50%] duration-150">
                <div className="flex flex-col gap-8">
                    <h1 className="bg-gradient-to-r font-sans text-2xl font-bold from-cl-yellow-dark to-cl-yellow inline-block text-transparent bg-clip-text">
                        Ước nguyện
                    </h1>
                    <div className="flex gap-8">
                        <div className="flex-1 max-w-[13rem] bg-white">
                            <View
                                className="rounded-xl shadow-sd-primary border border-gray-100 overflow-hidden p-1 bg-gradient-to-r from-cl-yellow-dark to-cl-yellow h-[12rem]"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={account?.photoURL || IMAGES.tom2}
                                    width={1980}
                                    height={1440}
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </View>
                            <View
                                className="mt-2 text-sm flex flex-col gap-1 text-gray-600"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="font-sans font-semibold  text-xl">
                                    {account?.displayName || '---'}{' '}
                                    <span className="font-medium text-sm">({account?.account || '---'})</span>
                                </p>
                                <p>Email: {account?.email || '---'}</p>
                                <p>SDT: {account?.phoneNumber || '---'}</p>
                            </View>
                        </div>
                        <div className="flex-1 bg-white border-l border-gray-200 pl-8">
                            <View className="flex gap-4">
                                <View
                                    className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-cl-yellow-dark to-cl-yellow shadow-sd-primary flex justify-center border-red-500 cursor-pointer items-center p-1 ${
                                        isChooseAltar === 1 ? 'border-2' : 'border-0'
                                    }`}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsChooseAltar(1)}
                                >
                                    <Image src={IMAGES.bantho1} width={1980} height={1440} alt="" className="w-full" />
                                </View>
                                <View
                                    className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-[#4158D0] to-[#FFCC70] cursor-pointer border-red-500 shadow-sd-primary  ${
                                        isChooseAltar === 2 ? 'border-2' : 'border-0'
                                    }`}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsChooseAltar(2)}
                                >
                                    <Image src={IMAGES.bantho2} width={1980} height={1440} alt="" className="w-full" />
                                </View>
                                <View
                                    className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-[#0093E9] to-[#80D0C7] cursor-pointer border-red-500 shadow-sd-primary  ${
                                        isChooseAltar === 3 ? 'border-2' : 'border-0'
                                    }`}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsChooseAltar(3)}
                                >
                                    <Image src={IMAGES.bantho3} width={1980} height={1440} alt="" className="w-full" />
                                </View>
                                <View
                                    className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] cursor-pointer border-red-500 shadow-sd-primary ${
                                        isChooseAltar === 4 ? 'border-2' : 'border-0'
                                    }`}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsChooseAltar(4)}
                                >
                                    <Image src={IMAGES.bantho4} width={1980} height={1440} alt="" className="w-full" />
                                </View>
                                <View
                                    className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] border-red-500 cursor-pointer shadow-sd-primary ${
                                        isChooseAltar === 5 ? 'border-2' : 'border-0'
                                    }`}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsChooseAltar(5)}
                                >
                                    <Image src={IMAGES.bantho5} width={1980} height={1440} alt="" className="w-full" />
                                </View>
                            </View>
                            <div className="flex flex-col items-center w-full mt-8">
                                <View
                                    className="w-full flex justify-center items-center relative"
                                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 2, type: 'spring', bounce: 0.5 }}
                                >
                                    <Image
                                        src={
                                            isChooseAltar === 1
                                                ? IMAGES.bantho1
                                                : isChooseAltar === 2
                                                ? IMAGES.bantho2
                                                : isChooseAltar === 3
                                                ? IMAGES.bantho3
                                                : isChooseAltar === 4
                                                ? IMAGES.bantho4
                                                : IMAGES.bantho5
                                        }
                                        width={1980}
                                        height={1440}
                                        alt=""
                                        className="w-[70%]"
                                    />
                                </View>
                                <View className="flex flex-col items-center gap-4 mt-4 w-[40%]">
                                    {isLoad ? (
                                        <View
                                            className="w-[6rem] h-[6rem] rounded-full overflow-hidden"
                                            initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: -10 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Image
                                                src={
                                                    'https://i.pinimg.com/originals/67/7a/35/677a35fd61e601169388ef161e9f8e98.gif'
                                                }
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
                                                className="bg-white py-2 px-4 shadow-sd-primary rounded-full border border-gray-100 outline-none text-black w-full"
                                                value={isValue}
                                                onChange={(e) => setIsValue(e.target.value)}
                                            />
                                            <Button
                                                className="bg-gradient-to-r from-cl-yellow-dark to-cl-yellow text-gray-800 shadow-sd-primary rounded-full py-2 w-full font-semibold text-sm"
                                                onClick={() => hanldeAltar()}
                                            >
                                                Cầu nguyện
                                            </Button>
                                        </>
                                    )}
                                </View>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <audio src="music/cas.mp3" autoPlay loop /> */}
        </section>
    );
}
