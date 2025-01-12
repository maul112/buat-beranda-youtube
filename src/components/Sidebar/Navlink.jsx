import { Link } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarContext"; 

export default function Navlink({children, title, link, isSelected = false, additionClass = "", showInMinimizeSidebar = false, ...props}) {
    const { isOpen } = useSidebar();
    return (
        <Link {...props} to={link} className={`${isSelected && "bg-slate-100"} flex items-center text-2xl hover:bg-slate-100 px-4 py-2 rounded-xl ${additionClass} ${isOpen ? "justify-start" : "md:justify-center md:flex-col"} ${(!isOpen && !showInMinimizeSidebar) && "md:hidden" }`}>
            {children}
            <p className={`text-base ${isOpen ? (additionClass ? "mr-4" : "ml-4") : (additionClass ? "mr-4" : "ml-4 md:ml-0 md:text-[10px]")}`}>{title}</p>
        </Link>
    )
}