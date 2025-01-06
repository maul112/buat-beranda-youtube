import { useSidebar } from "../contexts/SidebarContext";

export default function Beranda() {
    const { isOpen } = useSidebar();
    return (
        <>
            <main className="p-4">tes</main>
        </>
    )
}