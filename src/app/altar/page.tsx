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

    const [isAltarSuccess, setIsAltarSuccess] = React.useState<null | string>('success');

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
                setIsAltarSuccess('success');
                const payload = {
                    content: isValue,
                    uid: account?.uid,
                };
                if (account && isValue) {
                    dispatch(hanldeSendAltar(payload));
                }
            } else {
                setIsLoad(false);
                setIsAltarSuccess('error');
            }
        }, 5000);
    };

    useEffect(() => {
        if (!account) {
            router.push('/login');
        }
    }, []);

    return (
        <section className="flex justify-center items-center bg-white relative h-screen ">
            {isAltarSuccess && (
                <div className="fixed top-0 left-0 bottom-0 right-0 bg-bg-black-90 flex justify-center items-center z-40">
                    <View
                        className="bg-white shadow-sd-primary px-4 py-8 rounded-xl text-black w-full max-w-[30rem] flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={`text-2xl font-bold font-sans text-cl-yellow-dark`}>
                            {isAltarSuccess === 'success' ? 'Cầu nguyện thành công' : 'Cầu nguyện thất bại'}
                        </h1>
                        <Image
                            src={
                                isAltarSuccess === 'success'
                                    ? 'https://i.pinimg.com/originals/78/c8/c2/78c8c26e59d31f298303082074dfef59.gif'
                                    : 'https://i.pinimg.com/originals/69/1b/3b/691b3b9545c56c040e7c77ae61c040f7.gif'
                            }
                            width={1980}
                            height={1440}
                            alt=""
                            className="w-[12rem]"
                        />
                        <Button
                            className="font-sans py-2 px-8 mt-4 rounded-lg bg-cl-yellow-dark text-black font-medium"
                            onClick={() => setIsAltarSuccess(null)}
                        >
                            Đóng
                        </Button>
                    </View>
                </div>
            )}
            <Image
                src={
                    isLoad
                        ? 'https://i.pinimg.com/originals/b0/28/1d/b0281ddf324fe28d238e174059fd2b5c.gif'
                        : 'https://i.pinimg.com/originals/f5/04/0c/f5040c8d8f022cf4c957a1cd7c94f30a.jpg'
                }
                width={1980}
                height={1440}
                alt=""
                className={`absolute -z-0 top-0 left-0 w-full h-full object-cover `}
            />
            {!isLoad && (
                <Link className="absolute top-4 left-4" href={'/'}>
                    <Button className="  px-5 text-gray-800" kind="form">
                        <IonIcon name="arrow-back" className="text-xl" />
                    </Button>
                </Link>
            )}
            {isLoad && (
                <View
                    className="absolute bottom-4 flex-col flex justify-center items-center"
                    initial={{ y: 400 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <View
                        className="w-[7rem] h-[7rem] flex overflow-hidden justify-center shadow-sd-primary border-2 border-white items-center rounded-full bg-white"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 100 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
                    >
                        <Image
                            src={'https://i.pinimg.com/564x/4a/10/e3/4a10e3430ee594b447800e8348d28fe9.jpg'}
                            width={1980}
                            height={1440}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </View>
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
                        className="max-w-[30rem] w-full"
                    />
                </View>
            )}
            {!isLoad && (
                <div className="w-[90%] min-h-[90%] xl:w-[80%] 2xl:w-[50%] duration-150 z-10">
                    <div className="flex flex-col gap-8">
                        <h1 className="bg-gradient-to-r font-sans text-center text-2xl font-bold  inline-block text-white">
                            Ước nguyện <IonIcon name="sparkles" className="text-xl ml-2" />
                        </h1>
                        <div className="flex gap-8">
                            <div className="flex-1 max-w-[13rem] backdrop-blur-[2rem] border text-white border-white shadow-sd-primary p-2 rounded-xl">
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
                                    className="mt-2 text-sm flex flex-col gap-1 "
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
                            <div
                                className={`flex-1 py-2 p-2 rounded-xl ${
                                    !isLoad ? 'border border-white backdrop-blur-[2rem]' : 'bg-transparent '
                                }`}
                            >
                                <View className="flex gap-2">
                                    <View
                                        className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-cl-yellow-dark to-cl-yellow shadow-sd-primary flex justify-center border-red-500 cursor-pointer items-center p-1 ${
                                            isChooseAltar === 1 ? 'border-2' : 'border-0'
                                        }`}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsChooseAltar(1)}
                                    >
                                        <Image
                                            src={IMAGES.bantho1}
                                            width={1980}
                                            height={1440}
                                            alt=""
                                            className="w-full"
                                        />
                                    </View>
                                    <View
                                        className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-[#4158D0] to-[#FFCC70] cursor-pointer border-red-500 shadow-sd-primary  ${
                                            isChooseAltar === 2 ? 'border-2' : 'border-0'
                                        }`}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsChooseAltar(2)}
                                    >
                                        <Image
                                            src={IMAGES.bantho2}
                                            width={1980}
                                            height={1440}
                                            alt=""
                                            className="w-full"
                                        />
                                    </View>
                                    <View
                                        className={`w-[3rem] h-[3rem] rounded-xl bg-gradient-to-r from-[#0093E9] to-[#80D0C7] cursor-pointer border-red-500 shadow-sd-primary  ${
                                            isChooseAltar === 3 ? 'border-2' : 'border-0'
                                        }`}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            setIsChooseAltar(3);
                                        }}
                                    >
                                        <Image
                                            src={IMAGES.bantho3}
                                            width={1980}
                                            height={1440}
                                            alt=""
                                            className="w-full"
                                        />
                                    </View>
                                    <View
                                        className={`w-[3rem]  h-[3rem] rounded-xl bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] cursor-pointer border-red-500 shadow-sd-primary ${
                                            isChooseAltar === 4 ? 'border-2' : 'border-0'
                                        }`}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            setIsChooseAltar(4);
                                        }}
                                    >
                                        <Image
                                            src={IMAGES.bantho4}
                                            width={1980}
                                            height={1440}
                                            alt=""
                                            className="w-full"
                                        />
                                    </View>
                                    <View
                                        className={`w-[3rem]  h-[3rem] rounded-xl bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] border-red-500 cursor-pointer shadow-sd-primary ${
                                            isChooseAltar === 5 ? 'border-2' : 'border-0'
                                        }`}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            setIsChooseAltar(5);
                                        }}
                                    >
                                        <Image
                                            src={IMAGES.bantho5}
                                            width={1980}
                                            height={1440}
                                            alt=""
                                            className="w-full"
                                        />
                                    </View>
                                </View>
                                <div className="flex flex-col items-center w-full mb-8">
                                    <View
                                        className={`w-full flex justify-center items-center relative`}
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
                                        {!isLoad && (
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
            )}

            {isLoad && <audio src="music/tom.mp3" autoPlay loop />}
        </section>
    );
}
