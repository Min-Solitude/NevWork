'use client';

import CheckScreen from "@/components/shared/CheckScreen";
import { auth } from "@/configs/firebase.config";
import { ThemeProvider } from "@material-tailwind/react";
import { setCookie } from "cookies-next";
import firebase from "firebase/compat/app";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<{ user: firebase.User | null }>({
    user: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        return auth.onIdTokenChanged(async (user: any) => {
            if (!user) {
                setUser(null);
                setCookie('accessToken', null, {
                    maxAge: 0,
                    path: '/',
                });
            } else {
                const token = await user.getIdToken();
                setUser(user);
                setCookie('accessToken', token, {
                    maxAge: 60 * 60 * 24 * 7,
                    path: '/',
                });
            }
        });
    }, []);

    // force refresh the token every 10 minutes
    useEffect(() => {
        const handle = setInterval(async () => {
            const user = auth.currentUser;
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);

        // clean up setInterval
        return () => clearInterval(handle);
    }, []);

    return <AuthContext.Provider value={{ user }}>
        <CheckScreen />
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </AuthContext.Provider>
}
