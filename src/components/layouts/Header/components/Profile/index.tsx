import Button from '@/components/customs/Button';
import Close from '@/components/customs/Close';
import { useAppDispatch } from '@/hooks/useRedux';
import View from '@/motions/View';
import { AuthAction } from '@/store/reducers/auth/auth.reducer';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ProfileInfomation from '../ProfileInfomation';
import ProfileSetting from '../ProfileSetting';
import ProfileChangePassword from '../ProfileChangePassword';

type ProfileProps = {
    user: any;
    close: () => void;
};

export default function Profile({ user, close }: ProfileProps) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [isTab, setIsTab] = useState<'profile' | 'setting' | 'logout' | 'changePass'>('profile');

    const handleLogout = async () => {
        await dispatch(AuthAction.logout());
        router.push('/login');
    };

    return (
        <View className="fixed top-0 left-0 bottom-0 right-0 px-4 text-base bg-bg-black-90 flex justify-center items-center">
            <View
                className="relative shadow-sd-primary overflow-hidden min-h-[76vh] duration-150 backdrop-blur-[20rem] md:px-8 px-4 py-16 rounded-xl w-full max-w-[36rem]"
                initial={{ opacity: 0, y: 20, rotateX: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, rotateX: 50, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            >
                <Close onClick={close} className="top-8 md:right-8 right-4 absolute" />
                <div className="w-full md:gap-8 gap-8 flex">
                    <div className="py-4 flex flex-col gap-6 border-r pr-8 border-[#ffffff17]">
                        <div className="w-full  flex justify-start">
                            <Button
                                className={` duration-150 font-semibold text-[16px] text-xs md:text-base cursor-pointer ${
                                    isTab === 'profile'
                                        ? 'text-cl-yellow-dark '
                                        : 'text-white hover:text-cl-yellow-dark'
                                }`}
                                onClick={() => setIsTab('profile')}
                            >
                                Hồ sơ
                            </Button>
                        </div>
                        <div className="w-full  flex justify-start">
                            <Button
                                className={` duration-150 font-semibold text-[16px] text-xs md:text-base  cursor-pointer ${
                                    isTab === 'changePass'
                                        ? 'text-cl-yellow-dark '
                                        : 'text-white hover:text-cl-yellow-dark'
                                }`}
                                onClick={() => setIsTab('changePass')}
                            >
                                Đổi mật khẩu
                            </Button>
                        </div>
                        <div className="w-full  flex justify-start">
                            <Button
                                className={` duration-150 font-semibold text-[16px] text-xs md:text-base  cursor-pointer ${
                                    isTab === 'setting'
                                        ? 'text-cl-yellow-dark '
                                        : 'text-white hover:text-cl-yellow-dark'
                                }`}
                                onClick={() => setIsTab('setting')}
                            >
                                Cài đặt
                            </Button>
                        </div>
                        <div className="w-full  flex justify-start">
                            <Button
                                className={` duration-150 font-semibold text-[16px] text-xs md:text-base  cursor-pointer ${
                                    isTab === 'logout' ? 'text-cl-yellow-dark ' : 'text-white hover:text-cl-yellow-dark'
                                }`}
                                onClick={() => handleLogout()}
                            >
                                Đăng xuất
                            </Button>
                        </div>
                    </div>
                    <div className=" flex-1 ">
                        {isTab === 'profile' && <ProfileInfomation user={user} />}
                        {isTab === 'setting' && <ProfileSetting user={user} />}
                        {isTab === 'changePass' && <ProfileChangePassword user={user} />}
                        {isTab === 'logout' && <div>Logout</div>}
                    </div>
                </div>
            </View>
        </View>
    );
}
