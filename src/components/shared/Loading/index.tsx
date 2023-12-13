import View from '@/motions/View'
import React from 'react'

type LoadingProps = {
    kind?: 'default' | 'animated'
    className?: string
}

export default function Loading({ kind = 'default', className }: LoadingProps) {

    if (kind === 'animated') return (
        <div className={`flex justify-center items-center ${className}`}>
            <div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        </div>
    )

    return (
        <View className='fixed top-0 left-0 z-50 bottom-0 right-0 bg-[#000000e5] flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </View>
    )
}
