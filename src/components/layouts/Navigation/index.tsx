'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { getNavigation } from '@/store/reducers/mode/mode.reducer';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

type NavigationProps = {
    className?: string;
};

const Time = dynamic(() => import('./components/Time'), { ssr: false });
const Music = dynamic(() => import('./components/Music'), { ssr: false });
const CDMusic = dynamic(() => import('@/components/customs/CDMusic'), { ssr: false });
const Image = dynamic(() => import('./components/Image'), { ssr: false });
const Tab = dynamic(() => import('./components/Tab'), { ssr: false });
const Tool = dynamic(() => import('./components/Tool'), { ssr: false });

export default function Navigation({ className }: NavigationProps) {
    const navigation = useAppSelector((state) => state.mode.navigation);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNavigation());
    }, []);

    return (
        <div className={`absolute z-30 bottom-0 md:py-4 left-0 flex flex-col gap-4 w-full ${className}`}>
            <div className="md:w-[90%] w-full flex justify-between items-center m-auto px-4 md:px-0">
                {navigation && <Time data={navigation} />}
                <CDMusic />
            </div>
            <div
                className={`m-auto bg-bg-black-90 text-white relative duration-300 shadow-sd-primary text-base md:rounded-lg w-full flex  items-center md:w-[90%] p-2 justify-between`}
            >
                <View
                    className="flex gap-2 items-center justify-between w-full"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2, type: 'tween', delay: 0.2 }}
                >
                    <Tab />
                    <div className="flex gap-4 items-center absolute left-1/2 -translate-x-1/2">
                        <Image />
                        <Music />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Tool />
                    </div>
                </View>
            </div>
        </div>
    );
}
