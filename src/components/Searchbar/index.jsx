import Button from "./Button"
import Input from "./Input"

export default function Searchbar() {
    return (
        <div className="flex items-center border border-slate-400 ml-40 rounded-full overflow-hidden">
            <Input type="text" name="search" placeholder="Search" />
            <Button additionClass="border-l rounded-r-full py-2 px-4 hover:bg-slate-200">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
                </svg>
            </Button>
        </div>
    )
}