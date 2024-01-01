import IonIcon from '@reacticons/ionicons';
import { useAppDispatch } from '@/hooks/useRedux';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ModeAction, setThemeVideo } from '@/store/reducers/mode/mode.reducer';
import Button from '@/components/customs/Button';
import { Header } from '@/store/reducers/mode/mode.type';

type ButtonThemeProps = {
    header: Header;
};

export default function ButtonTheme({ header }: ButtonThemeProps) {
    const dispatch = useAppDispatch();
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <Button
            onClick={() => {
                dispatch(setThemeVideo(resolvedTheme === 'dark' ? 'day' : 'night'));
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
            className={`overflow-hidden ${header?.layout && 'bg-transparent'}`}
            kind="square"
        >
            {resolvedTheme === 'dark' ? (
                <motion.span
                    initial={{ rotate: 300, x: 20 }}
                    animate={{ rotate: 360, x: 0 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
                    className="flex justify-center items-center"
                >
                    <IonIcon name="moon" className="text-2xl text-cl-yellow" />
                </motion.span>
            ) : (
                <motion.div
                    initial={{ rotate: 0, y: 40 }}
                    animate={{ rotate: 360, y: 0 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
                    className="flex justify-center items-center"
                >
                    <IonIcon name="sunny" className="text-2xl" />
                </motion.div>
            )}
        </Button>
    );
}
