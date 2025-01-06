import { useSidebar } from "../../contexts/SidebarContext";

export default function Navlink({children, title, link}) {
    const { isOpen } = useSidebar();
    return (
        <a href={link} className="flex items-center text-2xl hover:bg-slate-100 px-4 py-2 rounded-xl">
            {children}
            {isOpen && <p className="ml-4 text-base">{title}</p>}
        </a>
    )
}