import Logo from "@/components/customs/Logo";
import NavLink from "./components/NavLink";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full">
            <div className="m-auto duration-150 px-2 md:px-0 py-2 md:py-4 md:w-4/5 w-full flex justify-between items-center">
                <Logo />
                <NavLink />
            </div>
        </header>
    )
}
