'use client';

import Button from '@/components/customs/Button';
import Toast from '@/components/customs/Toast';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { ModeAction } from '@/store/reducers/mode/mode.reducer';
import IonIcon from '@reacticons/ionicons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

export default function Tool() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const isShowFile = useAppSelector((state) => state.mode.isShowFile);
    const account = useAppSelector((state) => state.auth.account);

    return (
        <div className="px-2 flex gap-2 items-center">
            <Button
                className={` bg-transparent group hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow`}
                kind="square"
                onClick={() => {
                    if (account) {
                        router.push('/altar');
                    } else {
                        toast.error(<Toast message="Vui lòng đăng nhập" type="error" />);
                        router.push('/login');
                    }
                }}
            >
                <IonIcon
                    name="albums-outline"
                    className="text-xl text-white duration-150 dark:group-hover:text-cl-yellow"
                />
            </Button>
            <Button
                className={`${
                    isShowFile
                        ? 'bg-cl-yellow-dark text-white group border border-transparent'
                        : 'bg-transparent group hover:bg-cl-yellow-dark dark:hover:bg-transparent border border-transparent dark:hover:border-cl-yellow '
                }`}
                kind="square"
                onClick={() => dispatch(ModeAction.setShowFile(!isShowFile))}
            >
                <IonIcon name="file-tray" className="text-xl text-white duration-150 dark:group-hover:text-cl-yellow" />
            </Button>
        </div>
    );
}
