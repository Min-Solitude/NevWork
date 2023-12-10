import { auth, db, storage } from '@/configs/firebase.config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from 'cookies-next';
import { signOut } from 'firebase/auth';
import { AuthState, User } from './auth.type';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const initialState: AuthState = {
    account: null,
    loading: false,
};

export const authSelector = createAsyncThunk('auth/authSelector', async (payload: User) => {
    return payload;
});

export const updateBanner = createAsyncThunk(
    'auth/updateBanner',
    async (payload: { isBannerUrl: any; uid: string }) => {
        try {
            const storageRef = ref(storage, `banners/${payload.uid}/${payload.isBannerUrl.name}`);
            await uploadBytes(storageRef, payload.isBannerUrl, {});
            const downloadURL = await getDownloadURL(storageRef);

            const userDocRef = doc(db, 'users', payload.uid);
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                // delete old banner
                const oldBanner = docSnap.data()?.banner;
                if (oldBanner) {
                    const oldBannerRef = ref(storage, oldBanner);
                    await deleteObject(oldBannerRef);
                }

                // update new banner
                await updateDoc(userDocRef, {
                    banner: downloadURL,
                });

                return downloadURL;
            } else {
                await setDoc(userDocRef, {
                    banner: downloadURL,
                    uid: payload.uid,
                });

                return downloadURL;
            }
        } catch (error) {
            console.log(error);
        }

        return null;
    },
);

export const updateProfileUser = createAsyncThunk(
    'auth/updateProfile',
    async (payload: { data: any; uid: string; avatar: any }) => {
        try {
            const userDocRef = doc(db, 'users', payload.uid);
            const docSnap = await getDoc(userDocRef);

            let avatarURL = null;

            if (payload.avatar) {
                const storageRef = ref(storage, `avatars/${payload.uid}/${payload.avatar.name}`);
                await uploadBytes(storageRef, payload.avatar, {});
                const downloadURL = await getDownloadURL(storageRef);
                if (docSnap.exists()) {
                    // delete old avatar
                    const oldAvatar = docSnap.data()?.photoURL;
                    if (oldAvatar) {
                        const oldAvatarRef = ref(storage, oldAvatar);
                        await deleteObject(oldAvatarRef);
                    }

                    // update new avatar
                    await updateDoc(userDocRef, {
                        photoURL: downloadURL,
                    });

                    avatarURL = downloadURL;
                } else {
                    await updateDoc(userDocRef, {
                        photoURL: downloadURL,
                    });

                    avatarURL = downloadURL;
                }
            }

            await updateDoc(userDocRef, payload.data);

            if (payload.avatar) {
                return {
                    ...payload.data,
                    photoURL: avatarURL,
                };
            } else {
                return payload.data;
            }
        } catch (error) {
            console.log(error);
        }

        return null;
    },
);

const reducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.account = null;
            deleteCookie('accessToken');
            signOut(auth);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authSelector.fulfilled, (state, action) => {
            state.account = action.payload;
        });

        builder.addCase(updateBanner.fulfilled, (state, action) => {
            if (state.account) {
                state.loading = false;
                toast.success('Cập nhật ảnh bìa thành công');
                state.account.banner = action.payload;
            }
        });
        builder.addCase(updateBanner.rejected, (state) => {
            state.loading = false;
            toast.error('Cập nhật ảnh bìa thất bại');
        });
        builder.addCase(updateBanner.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(updateProfileUser.rejected, (state) => {
            state.loading = false;
            toast.error('Cập nhật thông tin thất bại');
        });
        builder.addCase(updateProfileUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateProfileUser.fulfilled, (state, action) => {
            if (state.account) {
                state.loading = false;
                state.account = {
                    ...state.account,
                    ...action.payload,
                };
            }

            toast.success('Cập nhật thông tin thành công');
        });
    },
});

export const AuthAction = reducer.actions;
export const AuthReducer = reducer.reducer;
