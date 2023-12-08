export type AuthState = {
    account: User | null;
    loading: boolean;
};

export type User = {
    displayName?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    photoURL?: string | null;
    uid?: string;
    banner?: string | null;
};
