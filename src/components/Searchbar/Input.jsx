export default function Input({type, name, placeholder}) {
    return (
        <input type={type} name={name} placeholder={placeholder} className="outline-none rounded-l-full px-4 py-2 w-[120rem] max-w-xl w-50 block placeholder:font-semibold" />
    )
}