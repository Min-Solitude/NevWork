'use client';

import Button from '@/components/customs/Button';
import SeeNotice from '@/components/customs/SeeNotice';
import Loading from '@/components/shared/Loading';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import View from '@/motions/View';
import { Header } from '@/store/reducers/mode/mode.type';
import { getAllNotice, readNotice } from '@/store/reducers/notice/notice.reducer';
import { Notice } from '@/store/reducers/notice/notice.type';
import IonIcon from '@reacticons/ionicons';
import React, { useEffect } from 'react';

type NoticeProps = {
    header: Header;
};

export default function Notice({ header }: NoticeProps) {
    const [show, setShow] = React.useState(false);
    const user = useAppSelector((state) => state.auth.account);
    const notice = useAppSelector((state) => state.notice.listNotice);
    const loading = useAppSelector((state) => state.notice.loading);

    const [isStatus, setIsStatus] = React.useState('all');
    const [isShowDetail, setIsShowDetail] = React.useState<Notice | null>(null);

    const [isHaveUnread, setIsHaveUnread] = React.useState(false);

    const dispatch = useAppDispatch();

    const handleGetNotifications = (uid: string) => {
        dispatch(getAllNotice({ uid, status: isStatus }));
    };

    useEffect(() => {
        if (user?.uid) {
            handleGetNotifications(user?.uid);
        }
    }, [isStatus]);

    const handleFormatTime = (time: number) => {
        const date = new Date(time);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    };

    const handleReadNotice = (id: string, status: string) => {
        setShow(false);
        if (status === 'unread') {
            dispatch(readNotice({ id, status }));
        }
    };

    const handleCheckUnread = (list: Notice[]) => {
        const check = list.find((item) => item.status === 'unread');
        if (check) {
            setIsHaveUnread(true);
        } else {
            setIsHaveUnread(false);
        }
    };

    useEffect(() => {
        if (notice) {
            handleCheckUnread(notice);
        }
    }, [notice]);

    console.log(header?.layout);

    return (
        <div className="flex justify-center relative items-center min-w-[2rem]">
            {isShowDetail && <SeeNotice notice={isShowDetail} close={() => setIsShowDetail(null)} />}
            <Button
                kind="square"
                onClick={() => setShow(!show)}
                className={`relative ${header?.layout && 'bg-transparent'}`}
            >
                {isHaveUnread ? (
                    <View
                        className="flex justify-center items-center"
                        // The effect is always to swing like a bell
                        initial={{ rotate: 20 }}
                        animate={{ rotate: -20 }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.25,
                            repeatType: 'reverse',
                        }}
                    >
                        <IonIcon name="notifications" className="text-2xl text-cl-yellow" />
                    </View>
                ) : (
                    <View className="flex justify-center items-center">
                        <IonIcon name="notifications" className="text-2xl" />
                    </View>
                )}
            </Button>
            {show && (
                <View
                    className={`absolute ${
                        header?.layout ? '-bottom-[17rem]' : '-bottom-[16rem]'
                    } h-[15rem] flex justify-center items-center right-0 bg-bg-black-90 text-white shadow-sd-primary w-[20rem] p-4 rounded-lg`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                >
                    {loading ? (
                        <Loading kind="animated" />
                    ) : (
                        <div className=" w-full h-full">
                            <div className="flex w-full gap-4">
                                <Button
                                    className={`flex-1 text-base rounded-lg py-2 font-semibold ${
                                        isStatus === 'all' ? 'bg-cl-yellow-dark ' : 'bg-cl-btn-dark-bg-primary'
                                    }`}
                                    onClick={() => setIsStatus('all')}
                                >
                                    Tất cả
                                </Button>
                                <Button
                                    className={`flex-1 text-base rounded-lg py-2 font-semibold ${
                                        isStatus === 'unread' ? 'bg-cl-yellow-dark ' : 'bg-cl-btn-dark-bg-primary'
                                    }`}
                                    onClick={() => setIsStatus('unread')}
                                >
                                    Chưa đọc
                                </Button>
                            </div>
                            <div className="text-base mt-4 w-full flex flex-col gap-4 hidden-scrollbar h-[9.5rem] overflow-y-scroll">
                                {notice && notice?.length > 0 ? (
                                    notice.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-cl-btn-dark-bg-primary flex-col w-full items-start cursor-pointer hover:brightness-75 active:scale-95 duration-150  rounded-lg px-4 py-2 relative"
                                            onClick={() => {
                                                {
                                                    item?.id && item?.status && handleReadNotice(item.id, item.status);
                                                }
                                                setIsShowDetail(item);
                                            }}
                                        >
                                            <h1 className="font-semibold text-cl-yellow-dark line-clamp-1">
                                                {item.title}
                                            </h1>
                                            <p className="line-clamp-2 text-xs">Nội dung: {item.content}</p>
                                            <div className="flex w-full justify-between  mt-2 items-center">
                                                <span className="text-xs">
                                                    {item?.createdAt ? handleFormatTime(item.createdAt) : ''}
                                                </span>
                                                <span className="text-xs font-semibold mb-1">
                                                    {item.status === 'unread' ? (
                                                        <span className=" bg-red-500 py-1 px-2 rounded-full">
                                                            Chưa đọc
                                                        </span>
                                                    ) : (
                                                        <span className=" bg-green-500 py-1 px-2 rounded-full">
                                                            Đã đọc
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center">Không có thông báo nào</div>
                                )}
                            </div>
                        </div>
                    )}
                </View>
            )}
        </div>
    );
}
