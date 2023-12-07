import Logo from "@/components/customs/Logo";
import NavLink from "./components/NavLink";

export default function Header() {
    return (
        <header className="m-auto w-full md:py-2 md:w-[90%] z-40 absolute top-0 ">
            <div className="m-auto duration-150 w-full px-2 md:px-0 flex justify-between items-center">
                <Logo kind="big" />
                <NavLink />
            </div>
        </header>
    )
}