'use client'

import Button from "@/components/customs/Button"
import View from "@/motions/View"
import IonIcon from "@reacticons/ionicons"
import React from "react"

export default function Time() {

    const [time, setTime] = React.useState(new Date())
    const [isShowDetail, setIsShowDetail] = React.useState(false)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!time) return null

    return (
        <Button className=" gap-2  h-[2rem] px-2 pr-3 bg-bg-black-90 duration-150 w-auto rounded-full shadow-sd-primary"
            onClick={() => setIsShowDetail(!isShowDetail)}
        >
            <div className='text-center text-white font-semibold flex gap-2 items-center'>
                <IonIcon name="time-outline" className='text-lg -translate-y-[0.05rem]' />
                <span className="text-base">{time.toLocaleTimeString()}</span>
            </div>
            {
                isShowDetail && (
                    <View className="flex gap-2 items-center"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                    >
                        <span className="text-white">-</span>
                        <div className='text-center text-cl-yellow-dark text-base font-semibold'>{time.toLocaleDateString()}</div>
                    </View>
                )
            }
        </Button>
    )
}
