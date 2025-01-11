// import { useSearchbar } from "../contexts/SearchbarContext";
import Category from "../components/Category";
import { useSidebar } from "../contexts/SidebarContext";

export default function Beranda() {
    // const { search } = useSearchbar();
    return (
        <main className="p-4 w-full">
            <Category></Category>
        </main>
    )
}