import DarkModeProvider from '@/providers/DarkModeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { ReduxProviders } from '@/providers/ReduxProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/providers/AuthProvider';

export const metadata: Metadata = {
  title: {
    default: 'Sofi',
    template: '%s',
  },
  description: 'Sofi dịch vụ sáng tạo không gian làm việc, học tập không thể bỏ qua',
  keywords: ['Sofi', 'Sofichill', 'Sofi dịch vụ sáng tạo không gian làm việc, học tập không thể bỏ qua', 'Lofi', 'Sofi.fun', 'Sofichill.fun', 'Study'],
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
    <html lang="en" >
      <body suppressHydrationWarning={true} className={`dark:bg-black text-[16px] overflow-hidden dark:text-white`}>
        <AuthProvider>
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
                style={{ width: '20rem', color: 'white', backgroundColor: 'transparent' }}
              />
            </DarkModeProvider>
          </ReduxProviders>
        </AuthProvider>
      </body>
    </html >
  )
}
