import { useState } from "react";
import Catbut from "./Catbut";

export default function Category() {

    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="overflow-x-scroll no-scrollbar">
            <div className="flex gap-3">
                <Catbut isSelected={selectedCategory === "All"} onClick={() => setSelectedCategory("All")}>All</Catbut>
                <Catbut isSelected={selectedCategory === "Music"} onClick={() => setSelectedCategory("Music")}>Music</Catbut>
                <Catbut isSelected={selectedCategory === "Gaming"} onClick={() => setSelectedCategory("Gaming")}>Gaming</Catbut>
                <Catbut isSelected={selectedCategory === "Podcasts"} onClick={() => setSelectedCategory("Podcasts")}>Podcasts</Catbut>
                <Catbut isSelected={selectedCategory === "JavaScript"} onClick={() => setSelectedCategory("JavaScript")}>JavaScript</Catbut>
                <Catbut isSelected={selectedCategory === "HTML 5"} onClick={() => setSelectedCategory("HTML 5")}>HTML 5</Catbut>
            </div>
        </div>
    )
}