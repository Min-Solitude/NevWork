import Header from "@/components/layouts/Header"
import BackgroundTheme from "@/components/shared/BackgroundTheme"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return <section className="w-full h-screen relative">
        <BackgroundTheme className="w-full h-full object-cover z-10" />
        <div
            className={`absolute z-20 top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-4 m-auto duration-150 w-full md:w-[90%] `}
        >
            <Header />
            {children}
        </div>
    </section>
}