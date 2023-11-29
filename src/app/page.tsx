import Banner from "@/components/customs/Banner";
import MainLayout from "./(mainLayout)/layout";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: '...',
}

export default function HomePage() {

  return (
    <MainLayout >
      <div className="flex  min-h-screen justify-around items-center w-full">
        <span className="dark:text-red-500">hello</span>
      </div>
    </MainLayout>
  )
}
