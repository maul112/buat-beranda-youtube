// import { useSearchbar } from "../contexts/SearchbarContext";
import Category from "../components/Category";
import { useSidebar } from "../contexts/SidebarContext";
import { cn } from "../lib/utils";
import { SlOptionsVertical } from "react-icons/sl";

export default function Beranda() {
    // const { search } = useSearchbar();
    const { isOpen } = useSidebar();
    return (
        <main className={`p-4 w-full ${isOpen ? "md:pl-[17rem]" : "md:pl-[8rem]"}`}>
            <Category />
            <main className={cn("grid gap-2 mt-5", isOpen ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4")}>
                {Array(10).fill(0).map((_, i) => (
                    <div key={i} className="rounded-lg overflow-hidden">
                        <div className="md:w-full aspect-video bg-black rounded-lg"></div>
                        <div className="flex gap-2 pt-3">
                            <div>
                                <div className="w-12 h-12 bg-black rounded-full"></div>
                            </div>
                            <div className="flex flex-col justify-between w-full items-center">
                                <div className="flex justify-between w-full items-center">
                                    <h2>Title</h2>
                                    <SlOptionsVertical />
                                </div>
                                <p className="line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos corporis doloribus maxime architecto est corrupti voluptatem molestiae atque. Optio, et.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </main>
    )
}