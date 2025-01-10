export default function Input({type, name, placeholder, ...props}) {
    return (
        <input type={type} name={name} placeholder={placeholder} {...props} className="outline-none rounded-l-full pr-2 pl-4 w-full hidden xs:w-full sm:block placeholder:font-semibold" />
    )
}