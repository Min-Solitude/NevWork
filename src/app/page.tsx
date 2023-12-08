import type { Metadata } from 'next';
import MainLayout from "./(mainLayout)/layout";

export const metadata: Metadata = {
  title: 'Trang chủ | Sofi',
  description: '...',
}

export default function HomePage() {

  return (
    <MainLayout >
      <div className="flex justify-center items-center w-full">
        <div className=" ">
          home
        </div>
      </div>
    </MainLayout>
  )
}
