'use client';

import Button from '@/components/customs/Button';
import Close from '@/components/customs/Close';
import Toast from '@/components/customs/Toast';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { handleRegisterMemberAccount } from '@/store/reducers/auth/auth.reducer';
import { getGeneralAnnouncement } from '@/store/reducers/notice/notice.reducer';
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Loading';

export default function NoticeGeneralAnnouncement() {
    const dispatch = useAppDispatch();
    const generalAnnouncement = useAppSelector((state) => state.notice.GeneralAnnouncement);
    const [notice, setNotice] = useState(false);
    const loading = useAppSelector((state) => state.auth.loading);
    const account = useAppSelector((state) => state.auth.account);

    const [isEmail, setIsEmail] = useState('');

    useEffect(() => {
        dispatch(getGeneralAnnouncement());

        if (sessionStorage.getItem('notice')) {
            setNotice(true);
        }
    }, []);

    const handleCloseNotice = () => {
        sessionStorage.setItem('notice', 'true');
        setNotice(true);
    };

    if (!generalAnnouncement?.status || notice) return null;

    const handleRegisterMember = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!account?.uid) return toast.error(<Toast message="Vui lòng đăng nhập" type="error" />);

        dispatch(handleRegisterMemberAccount({ email: isEmail, uid: account?.uid }));

        setIsEmail('');
    };

    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-40 bg-[#000000bb] flex justify-center items-center">
            {loading && <Loading />}
            <View
                className="flex-1 overflow-hidden max-w-[30rem] bg-black text-white rounded-xl shadow-sd-primary"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25 }}
            >
                <div className="h-[12rem] rounded-b-xl overflow-hidden relative">
                    <Image
                        src={generalAnnouncement?.banner}
                        alt="sofi"
                        className="w-full h-full object-cover"
                        width={1440}
                        height={1020}
                    />
                    <div className="absolute flex justify-end p-4 items-start top-0 left-0 w-full h-full">
                        <Close className="w-6 h-6 cursor-pointer" onClick={handleCloseNotice} />
                    </div>
                </div>
                <div className="px-8 flex flex-col gap-4 py-4 font-sans">
                    <h1 className="font-bold mt-4 text-2xl ">{generalAnnouncement?.title}</h1>
                    <p className="font-medium text-sm">{generalAnnouncement?.content}</p>
                    {generalAnnouncement?.email && (
                        <form
                            className="w-full flex items-center justify-between bg-[#222222] p-2 my-4 text-sm font-medium rounded-xl"
                            onSubmit={handleRegisterMember}
                        >
                            <input
                                type="email"
                                className="flex-1 pl-2 text-[16px] text-cl-yellow bg-transparent outline-none"
                                value={isEmail}
                                onChange={(e) => setIsEmail(e.target.value)}
                                placeholder="Nhập email của bạn"
                                required
                            />
                            <Button
                                className="py-2 duration-150 hover:bg-cl-yellow-dark hover:text-white px-5 rounded-lg border-2 border-cl-yellow-dark"
                                type="submit"
                            >
                                <span className="font-medium">Đăng ký</span>
                            </Button>
                        </form>
                    )}
                    <div className="w-full text-center mb-2">
                        <p className="text-sm font-medium">{generalAnnouncement?.note} 🚀</p>
                    </div>
                </div>
            </View>
        </div>
    );
}
