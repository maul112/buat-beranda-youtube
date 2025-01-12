import Input from "../ui/Input";
import Button from "../ui/Button";
import { CiSearch } from "react-icons/ci";
// import { useSearchbar } from "../../contexts/SearchbarContext";

export default function Searchbar() {
    // const { setSearch } = useSearchbar();
    return (
        <div className="flex items-center sm:border sm:border-slate-400 rounded-full overflow-hidden sm:ml-24 sm:w-full">
            <Input type="text" name="search" placeholder="Search" />
            <Button additionClass="bg-transparent sm:bg-slate-100 sm:border-l rounded-r-full p-2 sm:py-2 sm:px-4 hover:bg-slate-200">
                <CiSearch className="text-2xl" />
            </Button>
        </div>
    )
}