'use client'

import { useEffect, useState } from "react"

export default function CheckScreen() {

    const [isMobile, setIsMobile] = useState(false)

    const handleCheckScreen = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        handleCheckScreen()
        window.addEventListener('resize', handleCheckScreen)
        return () => window.removeEventListener('resize', handleCheckScreen)
    }, [])

    if (isMobile) {
        return (
            <div className='fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center bg-black'>
                <div className='bg-white rounded-lg p-6 text-center'>
                    <h1 className='font-dancing text-2xl text-black'>Ứng dụng đang được phát triển</h1>
                    <p className='text-black mt-4'>Vui lòng sử dụng trên máy tính để có trải nghiệm tốt nhất</p>
                </div>
            </div>
        )
    }

    return null
}
