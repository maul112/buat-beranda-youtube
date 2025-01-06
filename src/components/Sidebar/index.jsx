import { useSidebar } from "../../contexts/SidebarContext";
import Navlink from "./Navlink";
import { IoMdHome } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";

export default function SideBar() {
    const { isOpen } = useSidebar();

    return (
        <div className={`${isOpen && "w-56"} p-4`}>
            <Navlink title="Beranda" link="https://www.youtube.com/">
                <IoMdHome />
            </Navlink>
            <Navlink title="Shorts" link="https://www.youtube.com/">
                <MdOndemandVideo />
            </Navlink>
        </div>
    );
}