'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { ModeAction, getGreetings } from '@/store/reducers/mode/mode.reducer';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Close from '../Close';

export default function Greeting() {
    const dispatch = useAppDispatch();
    const isShowGreeting = useAppSelector((state) => state.mode.isGreetings);
    const greeting = useAppSelector((state) => state.mode.greetings);

    const [isDayOrNight, setIsDayOrNight] = React.useState(true);

    const handleDayOrNight = () => {
        const hours = new Date().getHours();
        if (hours > 6 && hours < 18) {
            setIsDayOrNight(true);
        } else {
            setIsDayOrNight(false);
        }
    };

    useEffect(() => {
        dispatch(getGreetings());
        handleDayOrNight();
    }, []);

    if (!isShowGreeting || !greeting?.status) return null;

    return (
        <View
            className="fixed z-40 bottom-[16rem] cursor-pointer left-[8rem] max-w-[30rem]"
            drag
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
        >
            {greeting?.layout ? (
                <div className="flex gap-2 p-2 relative bg-bg-black-90 rounded-xl shadow-sd-primary">
                    <div className="absolute top-0 left-0 z-20 w-full h-full">
                        <Close
                            className="absolute -top-6 -right-6 z-20"
                            onClick={() => dispatch(ModeAction.setGreetings(false))}
                        />
                    </div>
                    <div className="h-[8rem]">
                        <Image
                            src={greeting?.image}
                            className="w-full h-full rounded-lg object-cover"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex flex-col items-center p-2 text-white text-sm gap-2">
                        <h1 className="font-bold">-- {greeting?.title} --</h1>
                        <i className="text-xs">&quot;{greeting?.content}&quot;</i>
                        <div className="w-full justify-end flex">
                            <span className="font-dancing text-[16px]">
                                {isDayOrNight ? 'Chào buối sáng' : 'Buổi tối vui vẻ'}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="rounded-xl relative w-[20rem] overflow-hidden shadow-sd-primary">
                    <div className="absolute top-0 left-0 z-20 w-full h-full">
                        <Close
                            className="absolute top-4 right-4 z-20"
                            onClick={() => dispatch(ModeAction.setGreetings(false))}
                        />
                    </div>
                    <div className=" h-[16vh] relative">
                        <Image
                            src={greeting?.image}
                            className="w-full h-full object-cover"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="px-2 bg-bg-black-90 py-4 flex flex-col gap-2 text-white text-sm">
                        <h1 className="font-bold">-- {greeting?.title} --</h1>
                        <i className="text-xs">&quot;{greeting?.content}&quot;</i>
                        <div className="w-full justify-end flex">
                            <span className="font-dancing text-[16px]">
                                {isDayOrNight ? 'Chào buối sáng' : 'Buổi tối vui vẻ'}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </View>
    );
}
