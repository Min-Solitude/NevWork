import type { Metadata } from 'next';
import MainLayout from "./(mainLayout)/layout";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: {
    default: 'Trang chủ | Sofi',
    template: '%s | Sofi',
  },
}

const ManagerBackground = dynamic(() => import('@/components/customs/ManagerBackground'), { ssr: false })
const Greeting = dynamic(() => import('@/components/customs/Greeting'), { ssr: false })
const TabYoutube = dynamic(() => import('@/components/customs/TabYoutube'), { ssr: false })
const Note = dynamic(() => import('@/components/customs/Note'), { ssr: false })
const Link = dynamic(() => import('@/components/customs/Link'), { ssr: false })

export default function HomePage() {

  return (
    <MainLayout >
      <div className="flex justify-center gap-8 items-start h-[80vh] w-full md:max-w-[90%] md:m-auto">
        <Greeting />
        <TabYoutube />
        <Note />
        <Link />
        <div className=' flex-1 max-w-[18rem]'>1</div>
        <div className="flex-1 h-full flex justify-center items-center">
          <ManagerBackground />
        </div>
      </div>
    </MainLayout>
  )
}
