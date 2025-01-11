export default function Button({children, additionClass}) {
    return (
        <button className={`bg-slate-100 border-slate-400 text-2xl p-2 flex hover:bg-slate-200 ${additionClass}`}>{children}</button>
    )
}