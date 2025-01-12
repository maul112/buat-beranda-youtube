import { useSidebar } from "../../contexts/SidebarContext";
import Navlink from "./Navlink";

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";

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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SideBar() {
    const { isOpen } = useSidebar();
    const location = useLocation();

    const hr = (
        <hr className="border-1 border-slate-300 my-3" />
    )

    const navLinkAttr = [
        { title: "Beranda", link: "/", isSelected: true, additionClass: "", children: location.pathname === "/" ? <GoHomeFill /> : <GoHome /> },
        { title: "Shorts", link: "/shorts", isSelected: false, additionClass: "", children: location.pathname === "/shorts" ? <RiVideoFill /> : <RiVideoLine /> },
        { title: "Subscription", link: "/subscription", isSelected: false, additionClass: "", children: location.pathname === "/subscription" ? <MdSubscriptions /> : <MdOutlineSubscriptions /> },
        { title: "You", link: "/you", isSelected: false, additionClass: "flex-row-reverse justify-end", children: <HiArrowSmallRight /> },
        { title: "History", link: "/history", isSelected: false, additionClass: "", children: <GoHistory /> },
        { title: "Playlist", link: "/playlist", isSelected: false, additionClass: "", children: <MdPlaylistPlay /> },
        { title: "Your Videos", link: "/your-videos", isSelected: false, additionClass: "", children: location.pathname === "/your-videos" ? <RiFileVideoFill /> : <RiFileVideoLine /> },
        { title: "Watch Later", link: "/watch-later", isSelected: false, additionClass: "", children: location.pathname === "/watch-later" ? <FiClock /> : <GoClockFill /> },
        { title: "Liked Videos", link: "/liked-videos", isSelected: false, additionClass: "", children: <MdThumbUpOffAlt /> },
        { title: "Downloads", link: "/downloads", isSelected: false, additionClass: "", children: <TfiDownload />, showInMinimizeSidebar: true },   
    ]

    return (
        <>
            <div className={`${isOpen ? "w-72" : "w-28"} p-4`}>
                {navLinkAttr.map((item, index) => (
                    <>
                        <Navlink key={index} link={item.link} title={item.title} isSelected={location.pathname === item.link} additionClass={item.additionClass} showInMinimizeSidebar={item.showInMinimizeSidebar}>
                            {item.children}
                        </Navlink>
                        {index === 2 && hr}
                    </>
                ))}
                {hr}
                <p className="font-semibold">Subscriptions</p>
            </div>
        </>
    );
}
