export type AuthState = {
    account: User;
    loading: boolean;
};

export type User = {
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    uid: string;
};
