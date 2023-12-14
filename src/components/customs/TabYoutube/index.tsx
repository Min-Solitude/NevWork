'use client'

import View from '@/motions/View'
import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import IonIcon from '@reacticons/ionicons'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { ModeAction } from '@/store/reducers/mode/mode.reducer'

export default function TabYoutube() {

    const [url, setUrl] = React.useState('');
    const isTabYoutube = useAppSelector(state => state.mode.isTabYoutube);
    const dispacth = useAppDispatch();
    const [error, setError] = useState<string | null>(null);

    function isValidYoutubeUrl(url: string) {
        // Kiểm tra URL có chứa "youtube.com" và bắt đầu bằng "https://www.youtube.com/watch" không
        return url.includes("youtube.com") && url.startsWith("https://www.youtube.com/watch");
    }

    const getVideoId = (url: string) => {

        if (!isValidYoutubeUrl(url)) {
            return null;
        }

        return url.split('v=')[1].split('&')[0];

    }

    const handleSearch = () => {

        const videoId = getVideoId(url);

        if (!videoId) {
            setError('Không tìm thấy');
            return;
        }

        // Rest logic
        setError(null);
        setUrl('');
    }

    if (!isTabYoutube) return null

    return (
        <View className="fixed top-[6rem] right-[16rem] flex flex-col cursor-pointer gap-3 p-3 text-white rounded-lg bg-bg-black-90 shadow-sd-primary"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            drag
        >
            <div className='w-full flex justify-end'>
                <Button
                    onClick={() => dispacth(ModeAction.setTabYoutube(false))}
                >
                    <IonIcon name='close' className='text-xl text-cl-btn-light-bg-primary' />
                </Button>
            </div>
            <div className='flex gap-2 w-[20rem] bg-cl-btn-dark-bg-primary py-2 pr-2 pl-4 rounded-lg'>

                <Input
                    className='flex-1 text-white bg-transparent text-base outline-none'
                    placeholder='Link youtube'
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <Button
                    onClick={() => handleSearch}
                >
                    <IonIcon name='search' className='text-xl text-cl-btn-light-bg-primary' />
                </Button>

            </div>
            {error && <div>{error}</div>}
            {
                url && (
                    <div className='w-[20rem] h-[10rem] overflow-hidden rounded-lg'>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${getVideoId(url)}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>

                    </div>
                )
            }

        </View>
    )
}