export default function SidebarElement({children, title, link}) {
    return (
        <a href={link} className="flex items-center hover:bg-slate-100 px-4 py-2 rounded-xl">
            {children}
            <p className="text-md font-semibold">{title}</p>
        </a>
    )
}