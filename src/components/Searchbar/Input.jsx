export default function Input({type, name, placeholder}) {
    return (
        <input type={type} name={name} placeholder={placeholder} className="outline-none rounded-l-full px-4 pr-2 pl-8 w-full hidden xs:w-full sm:block placeholder:font-semibold" />
    )
}