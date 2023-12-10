import Toggle from '@/components/customs/Toggle'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { setClock } from '@/store/reducers/mode/mode.reducer';
import React from 'react'

export default function ProfileSetting(user: any) {

    const dispatch = useAppDispatch();

    const [isTurnOnClock, setIsTurnOnClock] = React.useState(useAppSelector(state => state.mode.isClock));
    const [isTurnOnNotice, setIsTurnOnNotice] = React.useState(false);

    return (
        <div className='flex flex-col gap-6 py-4'>
            <div className='w-full flex items-start justify-between'>
                <div className='flex-1'>
                    <h2 className='text-white text-base font-semibold'>Thông báo</h2>
                    <p className='text-sm text-[#999999]'>Nhận thông báo từ các hoạt động của bạn và thông báo từ hệ thống</p>
                </div>
                <Toggle isTurnOn={isTurnOnNotice} handleToggle={() => setIsTurnOnNotice(!isTurnOnNotice)} />
            </div>
            <div className='w-full flex items-start justify-between'>
                <div className='flex-1'>
                    <h2 className='text-white text-base font-semibold'>Đồng hồ</h2>
                </div>
                <Toggle isTurnOn={isTurnOnClock} handleToggle={() => {
                    setIsTurnOnClock(!isTurnOnClock)
                    dispatch(setClock(!isTurnOnClock))
                }} />
            </div>
        </div>
    )
}
