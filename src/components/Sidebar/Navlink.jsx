import { useSidebar } from "../../contexts/SidebarContext";

export default function Navlink({children, title, link, isSelected = false, additionClass = ""}) {
    const { isOpen } = useSidebar();
    return (
        <a href={link} className={`${isSelected && "bg-slate-100"} flex items-center text-2xl hover:bg-slate-100 px-4 py-2 rounded-xl ${additionClass}`}>
            {children}
            {isOpen && (
                additionClass ? (
                    <p className="mr-4 text-base">{title}</p>
                ) : (
                    <p className="ml-4 text-base">{title}</p>
                )
            )}
        </a>
    )
}