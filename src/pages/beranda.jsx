import { useSearchbar } from "../contexts/SearchbarContext";
import { useSidebar } from "../contexts/SidebarContext";

export default function Beranda() {
    const { search } = useSearchbar();
    return (
        <main className="p-4">{search}</main>
    )
}