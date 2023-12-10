import Button from '@/components/customs/Button';
import Input from '@/components/customs/Input';
import Loading from '@/components/shared/Loading';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { updateBanner, updateProfileUser } from '@/store/reducers/auth/auth.reducer';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type ProfileInfomationProps = {
    user: any;
}

export default function ProfileInfomation({ user }: ProfileInfomationProps) {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const [isBannerUrl, setIsBannerUrl] = useState<any>(null);
    const [isAvatarUrl, setIsAvatarUrl] = useState<any>(null);
    const isLoading = useAppSelector(state => state.auth.loading);

    const [isEdit, setIsEdit] = useState(false);

    const handleUpdateBanner = async () => {
        const payload = {
            isBannerUrl,
            uid: user?.uid,
        }
        dispatch(updateBanner(payload))
    };

    const handleUpdateProfile = async (e: any) => {
        e.preventDefault();

        const data = new FormData(e.target);

        const updates = {} as any;

        if (data.get('email')) {
            updates.email = data.get('email');
        }

        if (data.get('username')) {
            updates.displayName = data.get('username');
        }

        if (data.get('phone')) {
            updates.phoneNumber = data.get('phone');
        }

        await dispatch(updateProfileUser({ data: updates, uid: user?.uid, avatar: isAvatarUrl }))

        setIsEdit(false);
    };

    return (
        <>
            {isLoading && <Loading />}
            <div className=" xs:h-[15vh] duration-150 h-[10vh] mt-4 w-full relative">
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    name="bannerProfile"
                    onChange={(e: any) => {
                        if (e.target.files[0]) {
                            setIsBannerUrl(e.target.files[0]);
                        }
                    }}
                    id="bannerProfile"
                />
                <label
                    htmlFor="bannerProfile"
                    className="absolute bottom-2 right-2 cursor-pointer p-2 rounded-full bg-bg-black-90 flex justify-center items-center"
                >
                    <IonIcon name="camera-outline" className="text-xl text-cl-yellow" />
                </label>
                {isBannerUrl && (
                    <Button
                        className="px-4 absolute right-0 bottom-[-30%] py-1 rounded-lg bg-cl-yellow-dark text-black"
                        onClick={handleUpdateBanner}
                    >
                        Cập nhật
                    </Button>
                )}
                <Image
                    src={
                        isBannerUrl
                            ? URL.createObjectURL(isBannerUrl)
                            : user?.banner
                                ? user?.banner
                                : 'https://i.pinimg.com/564x/e7/0f/4b/e70f4b77b7195c4b6081bf1530e9c046.jpg'
                    }
                    alt="avatar"
                    width={1440}
                    height={1200}
                    className=" w-full md:rounded-xl rounded-lg  h-full object-cover"
                />
                <div className=" bottom-0 left-[10%] md:w-[5rem] absolute md:h-[5rem] w-[4rem] h-[4rem] translate-y-1/2 rounded-full  shadow-sd-primary border border-cl-btn-dark-bg-primary">
                    <Image
                        src={
                            isAvatarUrl
                                ? URL.createObjectURL(isAvatarUrl)
                                : user?.photoURL
                                    ? user?.photoURL
                                    : 'https://i.pinimg.com/564x/16/3e/39/163e39beaa36d1f9a061b0f0c5669750.jpg'
                        }
                        alt="avatar"
                        width={1440}
                        height={1200}
                        className=" w-full rounded-full h-full object-cover"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        name="avatarProfile"
                        onChange={(e: any) => {
                            if (e.target.files[0]) {
                                setIsAvatarUrl(e.target.files[0]);
                            }
                        }}
                        id="avatarProfile"
                    />
                    {
                        isEdit && (
                            <label
                                htmlFor="avatarProfile"
                                className="p-1 flex justify-center items-center rounded-full bg-white absolute bottom-0 right-0"
                            >
                                <IonIcon name="pencil-outline" className="text-base text-black" />
                            </label>
                        )
                    }
                </div>
            </div>
            <form
                className="mt-16 flex flex-col gap-2"
                onSubmit={(e: any) => {
                    handleUpdateProfile(e);
                }}
            >
                {
                    user?.loginBy === 'account' && (
                        <div className="flex flex-col gap-1">
                            <label htmlFor="account" className="text-cl-yellow-dark font-semibold">
                                Tài khoản::
                            </label>
                            <Input
                                kind="form"
                                type="text"
                                id="account"
                                name="account"
                                defaultValue={user?.account ? user?.account : null}
                                placeholder='Chưa cập nhật'
                                disabled
                            />
                        </div>
                    )
                }
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-cl-yellow-dark font-semibold">
                        Tên người dùng:
                    </label>
                    <Input
                        kind="form"
                        id="username"
                        name="username"
                        type="text"
                        defaultValue={user?.displayName ? user?.displayName : null}
                        placeholder='Chưa cập nhật'
                        disabled={!isEdit}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-cl-yellow-dark font-semibold">
                        Số điện thoại:
                    </label>
                    <Input
                        kind="form"
                        type="text"
                        id="phone"
                        name="phone"
                        defaultValue={user?.phoneNumber ? user?.phoneNumber : null}
                        placeholder='Chưa cập nhật'
                        disabled={!isEdit}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-cl-yellow-dark font-semibold">
                        Email:
                    </label>
                    <Input
                        kind="form"
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={user?.email ? user?.email : null}
                        placeholder='Chưa cập nhật'
                        disabled={!isEdit}
                    />
                </div>
                <div className="w-full flex gap-4 mt-8">
                    {
                        !isEdit && (
                            <Button
                                kind="form"
                                type={'button'}
                                className="mt-4 flex-1"
                                onClick={() => {
                                    setIsEdit(true);
                                }}
                            >
                                Chỉnh sửa
                            </Button>
                        )
                    }
                    {
                        isEdit && (
                            <Button
                                kind="form"
                                type={'submit'}
                                className="mt-4 flex-1"
                            >
                                Lưu
                            </Button>
                        )
                    }
                    {isEdit && (
                        <Button
                            kind="form"
                            type="button"
                            className="mt-4 flex-1 bg-red-500 text-white"
                            onClick={() => setIsEdit(false)}
                        >
                            Hủy
                        </Button>
                    )}
                </div>
            </form>
        </>
    )
}
