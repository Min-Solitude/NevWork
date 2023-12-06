import Logo from "@/components/customs/Logo";
import NavLink from "./components/NavLink";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full md:py-2">
            <div className="m-auto duration-150 px-4 w-full md:rounded-xl shadow-sd-primary bg-bg-black-90 flex justify-between items-center">
                <Logo />
                <NavLink />
            </div>
        </header>
    )
}