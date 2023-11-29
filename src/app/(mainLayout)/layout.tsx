import Header from "@/components/layouts/Header"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return <section className="w-full">
        <div
            className={`flex flex-col gap-4 m-auto duration-150 w-full min-h-screen md:w-4/5 `}
        >
            <Header />
            {children}
        </div>
    </section>
}