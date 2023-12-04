'use client'

type BackgroundThemeProps = {
    className?: string
    Bgfor?: 'auth' | 'main'
}

export default function BackgroundTheme({ className, Bgfor = 'main' }: BackgroundThemeProps) {

    if (Bgfor === 'auth') return (
        <video className={`${className}`} autoPlay muted loop>
            <source src="/videos/auth.mp4" type="video/mp4" />
        </video>
    )

    return (
        <video className={`${className}`} autoPlay muted loop>
            <source src="/videos/night.mp4" type="video/mp4" />
        </video>
    )
}
