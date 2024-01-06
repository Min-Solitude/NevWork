'use client';

import Logo from '@/components/customs/Logo';
import NavLink from './components/NavLink';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { useEffect, useState } from 'react';
import { getHeader } from '@/store/reducers/mode/mode.reducer';
import Image from 'next/image';
import { IMAGES } from '@/assets';
import View from '@/motions/View';
import Button from '@/components/customs/Button';
import IonIcon from '@reacticons/ionicons';

export default function Header() {
    const header = useAppSelector((state) => state.mode.header);
    const dispatch = useAppDispatch();
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        dispatch(getHeader());
    }, []);

    if (!header?.status) return null;

    if (header?.layout) {
        return (
            <header
                className={`m-auto bg-bg-black-90 flex rounded-b-3xl items-center shadow-sd-primary duration-150  w-full h-[4rem] z-50 absolute top-0 ${
                    isHidden && 'translate-y-[-100%]'
                }`}
            >
                <div className="w-[90%] m-auto relative">
                    {isHidden && (
                        <View
                            className="top-8 absolute right-0 translate-y-[100%]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: '100%' }}
                            transition={{ duration: 0.5 }}
                        >
                            <Button kind="square">
                                <IonIcon
                                    name="close-outline"
                                    className="text-2xl"
                                    onClick={() => setIsHidden(!isHidden)}
                                />
                            </Button>
                        </View>
                    )}
                    {/* <Image src={IMAGES.ring} alt="" className="w-[13rem]  top-0 translate-y-[30%] -left-8 absolute" /> */}
                    <div className="m-auto duration-150 relative w-full px-2 md:px-0 flex justify-between items-center">
                        {header && <Logo kind="small" header={header} />}
                        {header?.title.length > 0 && (
                            <h1 className="absolute left-1/2 translate-x-[-50%] font-dancing bg-gradient-to-r  inline-block text-transparent bg-clip-text from-cl-yellow-dark to-cl-yellow text-3xl">
                                {header?.title}
                            </h1>
                        )}
                        {header && <NavLink header={header} btnHide={() => setIsHidden(!isHidden)} />}
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="m-auto w-full flex items-center h-[4rem] md:py-2 md:w-[90%] z-50 absolute top-0">
            <div className="m-auto duration-150 w-full px-2 md:px-0 flex justify-between items-center">
                {header && <Logo kind="small" header={header} />}
                {header && <NavLink header={header} />}
            </div>
        </header>
    );
}
