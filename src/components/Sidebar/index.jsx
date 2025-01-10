import { useSidebar } from "../../contexts/SidebarContext";
import Navlink from "./Navlink";

import { IoMdHome } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

import { RiVideoLine } from "react-icons/ri";
import { RiVideoFill } from "react-icons/ri";

import { MdOutlineSubscriptions } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";

import { GoHistory } from "react-icons/go";

import { MdPlaylistPlay } from "react-icons/md";

import { HiArrowSmallRight } from "react-icons/hi2";

import { RiFileVideoLine } from "react-icons/ri";
import { RiFileVideoFill } from "react-icons/ri";

import { RiGraduationCapLine } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";

import { FiClock } from "react-icons/fi";
import { GoClockFill } from "react-icons/go";

import { MdThumbUpOffAlt } from "react-icons/md";
import { MdThumbUpAlt } from "react-icons/md";

import { TfiDownload } from "react-icons/tfi";

export default function SideBar() {
    const { isOpen } = useSidebar();

    const hr = (
        <hr className="border-1 border-slate-300 my-3" />
    )

    const navLinkAttr = [
        {title: "Beranda", link: "https://www.youtube.com/", isSelected: true, additionClass: "", children: <IoMdHome />},
        {title: "Shorts", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <RiVideoLine />},
        {title: "Subscription", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <MdOutlineSubscriptions />},
        {title: "You", link: "https://www.youtube.com/", isSelected: false, additionClass: "flex-row-reverse justify-end", children: <HiArrowSmallRight />},
        {title: "History", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <GoHistory />},
        {title: "Playlist", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <MdPlaylistPlay />},
        {title: "Your Videos", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <RiFileVideoLine />},
        {title: "Watch Later", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <FiClock />},
        {title: "Liked Videos", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <MdThumbUpOffAlt />},
        {title: "Downloads", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <TfiDownload />},
        {title: "Library", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <RiGraduationCapLine />},
        {title: "Your Courses", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <RiGraduationCapLine />},
        {title: "Watch Later", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <GoClockFill />},
        {title: "Liked Videos", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <MdThumbUpAlt />},
        {title: "Downloads", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <TfiDownload />},
        {title: "Library", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <RiGraduationCapFill />},
        {title: "Your Courses", link: "https://www.youtube.com/", isSelected: false, additionClass: "", children: <RiGraduationCapFill />},
    ]

    return (
        <>
            <div className={`${isOpen && "w-72"} p-4`}>
                <Navlink title="Beranda" link="https://www.youtube.com/" isSelected={true}>
                    <IoMdHome />
                </Navlink>
                <Navlink title="Shorts" link="https://www.youtube.com/">
                    <RiVideoLine />
                </Navlink>
                <Navlink title="Subscription" link="https://www.youtube.com/">
                    <MdOutlineSubscriptions />
                </Navlink>
                {hr}
                <Navlink title="You" link="https://www.youtube.com/" additionClass="flex-row-reverse justify-end">
                    <HiArrowSmallRight />
                </Navlink>
                <Navlink title="History" link="https://www.youtube.com/">
                    <GoHistory />
                </Navlink>
                <Navlink title="Playlist" link="https://www.youtube.com/">
                    <MdPlaylistPlay />
                </Navlink>
                <Navlink title="Your Videos" link="https://www.youtube.com/">
                    <RiFileVideoLine />
                </Navlink>
                <Navlink title="Your Courses" link="https://www.youtube.com/">
                    <RiGraduationCapLine />
                </Navlink>
                <Navlink title="Watch Later" link="https://www.youtube.com/">
                    <FiClock />
                </Navlink>
                <Navlink title="Liked Video" link="https://www.youtube.com/">
                    <MdThumbUpOffAlt />
                </Navlink>
                <Navlink title="Download" link="https://www.youtube.com/">
                    <TfiDownload />
                </Navlink>
                {hr}
                <p className="font-semibold">Subscriptions</p>
            </div>
        </>
    );
}