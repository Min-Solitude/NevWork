import Logo from "@/components/customs/Logo"
import View from "@/motions/View"
import dynamic from "next/dynamic"

const BackgroundTheme = dynamic(() => import('@/components/shared/BackgroundTheme'), { ssr: false })

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return <section className="w-full h-screen relative">
        <BackgroundTheme Bgfor="auth" className="w-full h-full object-cover z-10" />
        <div
            className={`absolute z-20 top-0 left-1/2 -translate-x-1/2 flex m-auto duration-150 w-full min-h-screen `}
        >
            <div className="flex-1 relative hidden lg:block">
                <Logo kind="large" className="absolute top-0 left-4" />
            </div>
            <View className="flex-1 px-4 lg:px-0 duration-150 bg-bg-black-90 border-l flex justify-center items-center flex-col border-cl-btn-dark-bd-primary dark:text-white text-white shadow-sd-primary"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full max-w-[24rem] flex flex-col items-center ">
                    {children}
                </div>
            </View>
        </div>
    </section>
}