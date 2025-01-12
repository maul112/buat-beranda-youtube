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
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function Sidebar() {
    const { isOpen } = useSidebar();
    const location = useLocation();

    const hr = (
        <hr className="border-1 border-slate-300 my-3" />
    )

    const navLinkAttr = [
        { title: "Beranda", link: "/", children: location.pathname === "/" ? <GoHomeFill /> : <GoHome />, showInMinimizeSidebar: true },
        { title: "Shorts", link: "/shorts", children: location.pathname === "/shorts" ? <RiVideoFill /> : <RiVideoLine />, showInMinimizeSidebar: true },
        { title: "Subscription", link: "/subscription", children: location.pathname === "/subscription" ? <MdSubscriptions /> : <MdOutlineSubscriptions />, showInMinimizeSidebar: true },
        { title: "You", link: "/you", additionClass: "flex-row-reverse justify-end", children: <HiArrowSmallRight /> },
        { title: "History", link: "/history", children: <GoHistory /> },
        { title: "Playlist", link: "/playlist", children: <MdPlaylistPlay /> },
        { title: "Your Videos", link: "/your-videos", children: location.pathname === "/your-videos" ? <RiFileVideoFill /> : <RiFileVideoLine /> },
        { title: "Watch Later", link: "/watch-later", children: location.pathname === "/watch-later" ? <GoClockFill /> : <FiClock /> },
        { title: "Liked Videos", link: "/liked-videos", children: location.pathname === "/liked-videos" ? <MdThumbUpAlt /> : <MdThumbUpOffAlt /> },
        { title: "Downloads", link: "/downloads", children: <TfiDownload />, showInMinimizeSidebar: true },
    ]

    return (
        <>
            <div className={cn("md:hidden bg-white p-4 absolute transition-all duration-300", isOpen ? "translate-x-0" : "translate-x-[-100%]")}>
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
            <div className={`hidden md:block ${isOpen ? "md:w-72" : "block md:w-28"} p-4`}>
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
