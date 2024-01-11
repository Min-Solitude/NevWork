'use client';

import { useEffect, useState } from 'react';

export default function CheckScreen() {
    const [isMobile, setIsMobile] = useState(false);

    const handleCheckScreen = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleCheckScreen();
        window.addEventListener('resize', handleCheckScreen);
        return () => window.removeEventListener('resize', handleCheckScreen);
    }, []);

    if (isMobile) {
        return (
            <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center bg-black">
                <h1 className="bg-gradient-to-r font-bold font-sans uppercase text-4xl text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Vui lòng sử dụng Website
                </h1>
            </div>
        );
    }

    return null;
}
