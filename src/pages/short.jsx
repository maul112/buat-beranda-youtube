import { useSidebar } from "../contexts/SidebarContext";

export default function Short() {
    const { isOpen } = useSidebar();
    return (
        <>
            <main className={`p-6 space-y-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>short</main>
        </>
    )
}