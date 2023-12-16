import TabYoutube from '@/components/customs/TabYoutube';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import MainLayout from "./(mainLayout)/layout";

export const metadata: Metadata = {
  title: {
    default: 'Trang chủ | Sofi',
    template: '%s | Sofi',
  },
}

const ManagerBackground = dynamic(() => import('@/components/customs/ManagerBackground'), { ssr: false })

export default function HomePage() {

  return (
    <MainLayout >
      <div className="flex justify-center gap-8 items-start h-[80vh] w-full md:max-w-[90%] md:m-auto">
        {/* <Greeting /> */}
        <TabYoutube />
        {/* <Note /> */}
        {/* <Links /> */}
        <div className=' flex-1 max-w-[18rem]'>1</div>
        <div className="flex-1 h-full flex justify-center items-center">
          <ManagerBackground />
        </div>
      </div>
    </MainLayout>
  )
}
