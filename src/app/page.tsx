import type { Metadata } from 'next';
import MainLayout from "./(mainLayout)/layout";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Trang chủ | Sofi',
  description: '...',
}

const ManagerBackground = dynamic(() => import('@/components/customs/ManagerBackground'), { ssr: false })

export default function HomePage() {

  return (
    <MainLayout >
      <div className="flex justify-center gap-8 items-start h-[80vh] w-full md:max-w-[90%] md:m-auto">
        <div className=' flex-1 max-w-[18rem]'>1</div>
        <div className="flex-1 h-full flex justify-center items-center">
          <ManagerBackground />
        </div>
      </div>
    </MainLayout>
  )
}
