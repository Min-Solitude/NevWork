'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import View from "@/motions/View"
import Button from "../Button"
import IonIcon from "@reacticons/ionicons"
import { ModeAction } from "@/store/reducers/mode/mode.reducer"
import { useEffect, useState } from "react"
import { useDebounce } from "@/hooks/useDebounce"

const dataTab = [
    {
        label: 'Trang 1',
        value: 1,
        kind: 'default'
    },
    {
        label: 'Trang 2',
        value: 2,
        kind: 'default'
    }
    ,
    {
        label: 'Trang 3',
        value: 3,
        kind: 'default'
    },
    {
        label: 'Trang 4',
        value: 4,
        kind: 'vip'
    },
    {
        label: 'Trang 5',
        value: 5,
        kind: 'vip'
    }
]

const defaultData = [
    {
        value: 1,
        content: ""
    },
    {
        value: 2,
        content: ""
    },
    {
        value: 3,
        content: ""
    },
    {
        value: 4,
        content: ""
    },
    {
        value: 5,
        content: ""
    }
];


export default function Note() {

    const data = JSON.parse(
        localStorage.getItem("note") ?? '[]'
    );

    const isNote = useAppSelector(state => state.mode.isNote)
    const dispatch = useAppDispatch()
    const account = useAppSelector(state => state.auth.account)
    const [isLockDrag, setIsLockDrag] = useState<boolean>(false)

    const [isChooseTab, setIsChooseTab] = useState<number>(1)

    const [value, setValue] = useState("");

    const { searchValue } = useDebounce(value, 500); // delay 500ms

    useEffect(() => {

        if (!data) return;

        const newData = [...data];
        newData[isChooseTab - 1].content = searchValue;

        localStorage.setItem('note', JSON.stringify(newData));
    }, [searchValue]);


    useEffect(() => {
        if (data?.[0]) {
            setValue(data[0].content)
        }
    }, [])

    useEffect(() => {

        const tabData = data.find((item: any) => item.value === isChooseTab);

        if (tabData) {
            setValue(tabData.content);
        }

    }, [isChooseTab]);

    if (!isNote) return null


    return (
        <View className="fixed cursor-pointer p-4 flex flex-col gap-4 rounded-lg w-[40rem]   bg-bg-black-90 text-white text-base shadow-sd-primary"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            drag={!isLockDrag}
        >
            {
                account?.vip?.isVip && (
                    <div className="flex justify-center items-center absolute bg-white top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-full p-2">
                        <IonIcon name="diamond" className="text-xl text-blue-500" />
                    </div>
                )
            }
            <div className="w-full flex justify-between items-center">
                <h1 className="font-semibold text-2xl font-dancing">Note</h1>
                <Button
                    onClick={() => setIsLockDrag(!isLockDrag)}
                >
                    {
                        isLockDrag ? (
                            <IonIcon name='lock-closed' className='text-xl text-cl-btn-light-bg-primary' />
                        ) : (
                            <IonIcon name='lock-open' className='text-xl text-cl-btn-light-bg-primary' />
                        )
                    }
                </Button>
                <Button
                    onClick={() => dispatch(ModeAction.setNote(false))}
                >
                    <IonIcon name='close' className='text-xl text-cl-btn-light-bg-primary' />
                </Button>
            </div>
            <div className="w-full flex gap-2">
                {
                    dataTab.map((item, index) => {
                        if (!account?.vip?.isVip && index > 2) return null
                        return (
                            <Button
                                key={index}
                                className={`w-full relative text-left gap-2  border  ${item.kind === 'vip' ? 'hover:border-blue-500  hover:bg-blue-500' : 'hover:border-cl-yellow-dark  hover:bg-cl-yellow-dark'} duration-150 ${isChooseTab === item.value ? (
                                    item.kind === 'vip' ? 'bg-blue-500 border-blue-500' : 'bg-cl-yellow-dark border-cl-yellow-dark'
                                ) : 'bg-transparent border-white'}`}
                                kind='square'
                                onClick={() => setIsChooseTab(item.value)}
                            >
                                <span className="text-white font-semibold ">{item.label}</span>
                                {
                                    item.kind === 'vip' && (
                                        <IonIcon name="diamond" className="text-lg text-white" />
                                    )
                                }
                            </Button>
                        )
                    })
                }
            </div>
            <textarea className="w-full p-2 rounded-lg text-black bg-[#ffffff] outline-none h-[10rem]"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <i>
                <p className="text-sm text-gray-400">* Lưu ý: Hỗ trợ bạn ghi chú nội dung làm việc của bạn. Nội dung ở trang 1 không lưu lại.</p>
            </i>
        </View>
    )
}
