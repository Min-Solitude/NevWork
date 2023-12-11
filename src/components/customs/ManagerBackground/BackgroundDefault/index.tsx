import { useAppSelector } from '@/hooks/useRedux'
import React from 'react'
import Card from '../../Card'
import { IMAGES } from '@/assets'

type BackgroundDefaultProps = {
    kindScreen: boolean
}

export default function BackgroundDefault({ kindScreen }: BackgroundDefaultProps) {

    const isTheme = useAppSelector(state => state.mode.theme)

    if (kindScreen) return (
        <div>
            <Card image={isTheme === 'day' ? IMAGES.imageVideoRoomDay : IMAGES.imageVideoRoomNight} />
        </div>
    )

    return (
        <div>
            <Card image={isTheme === 'day' ? IMAGES.roomday : IMAGES.roomnight} />
        </div>
    )
}
