import Button from '@/components/customs/Button';
import { Header } from '@/store/reducers/mode/mode.type';
import IonIcon from '@reacticons/ionicons';
import React from 'react';

type ZoomFullScreenProps = {
    header: Header;
};

export default function ZoomFullScreen({ header }: ZoomFullScreenProps) {
    const handleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    return (
        <div className="md:flex hidden justify-center items-center min-w-[2rem]">
            <Button kind="square" className={`${header?.layout && 'bg-transparent'}`}>
                <IonIcon name="expand-outline" className="text-2xl" onClick={handleFullScreen} />
            </Button>
        </div>
    );
}
