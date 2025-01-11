import { useSidebar } from "../../contexts/SidebarContext";

import Logo from "./Logo";
import Searchbar from "./SearchBar";
import Button from "../ui/Button";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosMic } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { CiBellOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

export default function Navbar() {

    const { toggle } = useSidebar();

    return (
        <div className="py-2 px-6 flex items-center justify-between">
            <div className="flex items-center">
                <div className="rounded-full text-2xl p-2 hover:bg-slate-200" onClick={toggle}>
                    <RxHamburgerMenu />
                </div>
                <Logo />
            </div>
            <div className="flex items-center shadow-inner sm:w-7/12 lg:max-w-3xl lg:w-[110rem] sm:mr-2 md:mr-0">
                <Searchbar />
                <Button additionClass="bg-transparent sm:bg-slate-100 sm:ml-4 rounded-full p-2 sm:border">
                    <IoIosMic />
                </Button>
            </div>
            <div className="flex items-center mr-2">
                <Button additionClass="md:ml-4 rounded-full py-2 px-4">
                    <GoPlus />
                    <p className="ml-2 text-base font-semibold">Create</p>
                </Button>
                <Button additionClass="md:ml-4 rounded-full p-2 bg-white">
                    <CiBellOn />
                </Button>
                <Button additionClass="md:ml-4 rounded-full p-2 bg-white">
                    <GoPerson />
                </Button>
            </div>
        </div>
    );
}