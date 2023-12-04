import type { Metadata } from 'next';
import MainLayout from "./(mainLayout)/layout";

export const metadata: Metadata = {
  title: 'Trang chủ | Sofi',
  description: '...',
}

export default function HomePage() {

  return (
    <MainLayout >
      <div className="flex  justify-around items-center w-full">
        <div className="w-full">hello</div>
      </div>
    </MainLayout>
  )
}
