import DarkModeProvider from '@/providers/DarkModeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { ReduxProviders } from '@/providers/ReduxProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Sofi',
  description: 'Generated by create next app',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/sofi.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/sofi.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/sofi.png',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-black text-[16px] overflow-hidden dark:text-white`}>
        <ReduxProviders>
          <DarkModeProvider>
            {children}
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              closeButton={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              icon={false}
              bodyClassName="text-center text-base"
              style={{ width: '20rem', backgroundColor: 'transparent' }}
            />
          </DarkModeProvider>
        </ReduxProviders>
      </body>
    </html >
  )
}
