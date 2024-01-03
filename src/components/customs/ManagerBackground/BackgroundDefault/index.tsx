import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import React from 'react';
import Card from '../../Card';
import { IMAGES } from '@/assets';
import Button from '../../Button';
import { ModeAction } from '@/store/reducers/mode/mode.reducer';
import { Background } from '@/store/reducers/mode/mode.type';

type BackgroundDefaultProps = {
    kindScreen: boolean;
    background: any;
};

export default function BackgroundDefault({ kindScreen, background }: BackgroundDefaultProps) {
    const dispatch = useAppDispatch();

    const isTheme = useAppSelector((state) => state.mode.theme);
    const isNameScreen = useAppSelector((state) => state.mode.nameScreen);

    if (kindScreen)
        return (
            <div className="flex gap-4 items-center">
                <Button onClick={() => dispatch(ModeAction.setNameScreen({ name: 'room', kind: 'video' }))}>
                    <Card
                        image={isTheme === 'day' ? IMAGES.imageVideoRoomDay : IMAGES.imageVideoRoomNight}
                        className={`border-2 ${isNameScreen === 'room' ? 'border-cl-yellow' : 'border-transparent'}`}
                    />
                </Button>
                <Button onClick={() => dispatch(ModeAction.setNameScreen({ name: 'house', kind: 'video' }))}>
                    <Card
                        image={isTheme === 'day' ? IMAGES.imageVideoHouseDay : IMAGES.imageVideoHouseNight}
                        className={`border-2 ${isNameScreen === 'house' ? 'border-cl-yellow' : 'border-transparent'}`}
                    />
                </Button>
            </div>
        );

    return (
        <div className="flex gap-4 items-center">
            <Button onClick={() => dispatch(ModeAction.setNameScreen({ name: 'room', kind: 'image' }))}>
                <Card
                    image={isTheme === 'day' ? IMAGES.roomday : IMAGES.roomnight}
                    className={`border-2 ${isNameScreen === 'room' ? 'border-cl-yellow' : 'border-transparent'}`}
                />
            </Button>
            {background.map(
                (item: Background, index: number) =>
                    item.type === 'free' && (
                        <Button
                            key={index}
                            onClick={() => dispatch(ModeAction.setNameScreen({ name: item.name, kind: 'image' }))}
                        >
                            <Card
                                image={isTheme === 'day' ? item.backgroundDay : item.backgroundNight}
                                className={`border-2 ${
                                    isNameScreen === item.name ? 'border-cl-yellow' : 'border-transparent'
                                }`}
                            />
                        </Button>
                    ),
            )}

            {/* <Button onClick={() => dispatch(ModeAction.setNameScreen({ name: 'room', kind: 'image' }))}>
                <Card
                    image={isTheme === 'day' ? IMAGES.roomday : IMAGES.roomnight}
                    className={`border-2 ${isNameScreen === 'room' ? 'border-cl-yellow' : 'border-transparent'}`}
                />
            </Button>
            <Button onClick={() => dispatch(ModeAction.setNameScreen({ name: 'house', kind: 'image' }))}>
                <Card
                    image={isTheme === 'day' ? IMAGES.houseday : IMAGES.housenight}
                    className={`border-2 ${isNameScreen === 'house' ? 'border-cl-yellow' : 'border-transparent'}`}
                />
            </Button> */}
        </div>
    );
}
