import Header from "@/components/layouts/Header"
import Navigation from "@/components/layouts/Navigation"
import dynamic from "next/dynamic"

const BackgroundTheme = dynamic(() => import('@/components/shared/BackgroundTheme'), { ssr: false })

export default function MainLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return <section className="w-full h-screen relative">
        <BackgroundTheme className="w-full h-full object-cover z-10" />
        <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 flex flex-col h-screen items-center justify-center gap-4 m-auto duration-150 w-full `}
        >
            <Header />
            {children}
            <Navigation />
        </div>
    </section>
}