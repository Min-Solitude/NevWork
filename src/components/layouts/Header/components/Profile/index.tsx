import Button from '@/components/customs/Button'
import Close from '@/components/customs/Close'
import Input from '@/components/customs/Input'
import Toast from '@/components/customs/Toast'
import Loading from '@/components/shared/Loading'
import { db, storage } from '@/configs/firebase.config'
import { useAppDispatch } from '@/hooks/useRedux'
import View from '@/motions/View'
import { AuthAction, updateBanner } from '@/store/reducers/auth/auth.reducer'
import { User } from '@/store/reducers/auth/auth.type'
import IonIcon from '@reacticons/ionicons'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

type ProfileProps = {
    user: User
    close: () => void
}

export default function Profile({ user, close }: ProfileProps) {

    const dispatch = useAppDispatch()
    const router = useRouter()

    const [isBannerUrl, setIsBannerUrl] = useState<any>(null)
    const [isAvatarUrl, setIsAvatarUrl] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdateBanner = async () => {
        setIsLoading(true)
        try {
            const storageRef = ref(
                storage,
                `banners/${user.uid}/${isBannerUrl.name}`
            );
            await uploadBytes(storageRef, isBannerUrl, {});
            const downloadURL = await getDownloadURL(storageRef);

            const userDocRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(userDocRef);

            if (docSnap.exists()) {
                const { imageUrlBanner } = docSnap.data().image;

                const deleteRef = ref(storage, imageUrlBanner);
                await deleteObject(deleteRef);

                await updateDoc(userDocRef, {
                    banner: downloadURL,
                    uid: user.uid,
                });
            } else {
                await updateDoc(userDocRef, {
                    banner: downloadURL,
                    uid: user.uid,
                });
            }

            await dispatch(updateBanner(downloadURL))
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            return toast.error(<Toast message='Cập nhật thất bại' type='error' />)
        }
    }

    const handleLogout = () => {
        dispatch(AuthAction.logout())
        router.push('/login')
    }

    return (
        <View className='fixed top-0 left-0 bottom-0 right-0 px-4 text-base bg-bg-black-90 flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {
                isLoading && <Loading />
            }
            <div className='relative shadow-sd-primary duration-150 bg-black md:px-8 px-4 py-16 rounded-xl w-full max-w-[36rem]'>
                <Close onClick={close} className='top-8 md:right-8 right-4 absolute' />
                <div className='md:h-[20vh] xs:h-[15vh] duration-150 h-[10vh] mt-4 w-full relative'>
                    <input type="file" accept="image/*" hidden name="bannerProfile" onChange={(e: any) => {
                        if (e.target.files[0]) {
                            setIsBannerUrl(e.target.files[0])
                        }
                    }}
                        id='bannerProfile'
                    />
                    <label htmlFor="bannerProfile" className='absolute bottom-2 right-2 cursor-pointer p-2 rounded-full bg-bg-black-90 flex justify-center items-center'>
                        <IonIcon name="camera-outline" className='text-xl text-cl-yellow' />
                    </label>
                    {
                        isBannerUrl && (
                            <Button className='px-4 absolute right-0 bottom-[-20%] py-1 rounded-lg bg-cl-yellow-dark text-black'
                                onClick={handleUpdateBanner}
                            >
                                Cập nhật
                            </Button>
                        )
                    }
                    <Image src={isBannerUrl ? URL.createObjectURL(isBannerUrl) : user?.photoURL ? user?.photoURL : '/images/avatar.png'} alt="avatar" width={1440} height={1200} className=' w-full md:rounded-xl rounded-lg  h-full object-cover' />
                    <div className=' bottom-0 left-[10%] md:w-[5rem] absolute md:h-[5rem] w-[4rem] h-[4rem] translate-y-1/2 rounded-full  shadow-sd-primary border-2 border-cl-yellow'>
                        <Image src={isAvatarUrl ? URL.createObjectURL(isAvatarUrl) : user?.photoURL ? user?.photoURL : '/images/avatar.png'} alt="avatar" width={1440} height={1200} className=' w-full rounded-full h-full object-cover' />
                        <input type="file" accept="image/*" hidden name="avatarProfile" onChange={(e: any) => {
                            if (e.target.files[0]) {
                                setIsAvatarUrl(e.target.files[0])
                            }
                        }}
                            id='avatarProfile'
                        />
                        <label htmlFor='avatarProfile' className='p-1 flex justify-center items-center rounded-full bg-white absolute bottom-0 right-0'>
                            <IonIcon name="pencil-outline" className='text-base text-black' />
                        </label>
                    </div>
                </div>
                <div className='mt-16'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="username" className='text-cl-yellow-dark'>Tên tài khoản</label>
                        <input type="text" value={user?.displayName ? user?.displayName : 'Anonymous'} />
                    </div>
                </div>
            </div>
        </View>
    )
}
