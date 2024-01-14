'use client';
import { pageViews } from '@/lib/gTagHelper';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const GoogleAnalytics = ({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) => {
    const pathName = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathName + searchParams.toString();
        pageViews(GA_MEASUREMENT_ID, url);
    }, [pathName, searchParams, GA_MEASUREMENT_ID]);
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
            });
            `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;
