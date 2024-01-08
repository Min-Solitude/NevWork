'use client';

import Button from '@/components/customs/Button';
import { useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { Navigation } from '@/store/reducers/mode/mode.type';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';
import React from 'react';

type TimeProps = {
    data: Navigation;
};

export default function Time({ data }: TimeProps) {
    const isClock = useAppSelector((state) => state.mode.isClock);

    const [time, setTime] = React.useState(new Date());
    const [isShowDetail, setIsShowDetail] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!isClock) return <div></div>;

    if (!time) return null;

    if (data?.clock) {
        return (
            <div className="w-[12rem] h-[6rem] relative rounded-xl overflow-hidden border-2 border-cl-yellow-dark shadow-sd-primary">
                <Image src={data?.image} width={1980} height={1440} alt="" className="w-full h-full object-cover" />
                <span className="text-sm py-1 px-2 rounded-lg absolute bottom-2 left-1/2 -translate-x-1/2 bg-cl-yellow-dark font-bold font-sans ">
                    {time.toLocaleTimeString()}
                </span>
            </div>
        );
    }

    return (
        <Button
            className=" gap-2  h-[2rem] px-2 pr-3 bg-bg-black-90 duration-150 w-auto rounded-full shadow-sd-primary"
            onClick={() => setIsShowDetail(!isShowDetail)}
        >
            <div className="text-center text-white font-semibold flex gap-2 items-center">
                <IonIcon name="time-outline" className="text-lg -translate-y-[0.05rem]" />
                <span className="text-base">{time.toLocaleTimeString()}</span>
            </div>
            {isShowDetail && (
                <View
                    className="flex gap-2 items-center"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                >
                    <span className="text-white">-</span>
                    <div className="text-center text-cl-yellow-dark text-base font-semibold">
                        {time.toLocaleDateString()}
                    </div>
                </View>
            )}
        </Button>
    );
}
