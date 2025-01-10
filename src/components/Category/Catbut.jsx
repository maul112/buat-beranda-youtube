export default function Catbut({children, isSelected}) {
    return (
        <button className={`${isSelected? "bg-black text-white" :  "bg-slate-100 border-slate-400"} text-sm px-3 py-1 flex rounded-md font-semibold hover:bg-slate-200 transition-all`}>{children}</button>
    )
}