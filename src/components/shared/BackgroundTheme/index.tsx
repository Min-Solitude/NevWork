'use client';


type BackgroundThemeProps = {
    className?: string;
    Bgfor?: 'auth' | 'main';
};

export default function BackgroundTheme({ className, Bgfor = 'main' }: BackgroundThemeProps) {

    if (Bgfor === 'auth')
        return (
            <div className='h-full'>
                <video className={`${className}`} autoPlay muted loop>
                    <source src="/videos/auth.mp4" type="video/mp4" />
                </video>
            </div>
        );

    return <div className='h-full'>
        <video className={`${className}`} autoPlay muted loop>
            <source src={`videos/day.mp4`} type="video/mp4" />
        </video>
    </div>

}
