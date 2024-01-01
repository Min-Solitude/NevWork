'use client';

import Logo from '@/components/customs/Logo';
import NavLink from './components/NavLink';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { useEffect } from 'react';
import { getHeader } from '@/store/reducers/mode/mode.reducer';

export default function Header() {
    const header = useAppSelector((state) => state.mode.header);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getHeader());
    }, []);

    if (!header) return null;

    return (
        <header className="m-auto w-full md:py-2 md:w-[90%] z-50 absolute top-0 ">
            <div className="m-auto duration-150 w-full px-2 md:px-0 flex justify-between items-center">
                {/* <Logo kind="big" header={header} /> */}
                <NavLink />
            </div>
        </header>
    );
}
