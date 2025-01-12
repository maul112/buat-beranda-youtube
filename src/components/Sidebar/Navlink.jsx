/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarContext";

export default function Navlink({children, title, link, isSelected = false, additionClass = "", showInMinimizeSidebar = false}) {
    const { isOpen } = useSidebar();
    return (
        <Link to={link} className={`${isSelected && "bg-slate-100"} flex items-center text-2xl hover:bg-slate-100 px-4 py-2 rounded-xl ${additionClass} ${isOpen ? "justify-start" : "justify-center flex-col"} ${(!isOpen && !showInMinimizeSidebar) && "hidden" }`}>
            {children}
            <p className={`${isOpen ? (additionClass ? "mr-4 text-base" : "ml-4 text-base") : "text-[10px]"}`}>{title}</p>
        </Link>
    )
}