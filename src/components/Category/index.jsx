import Catbut from "./Catbut";

export default function Category() {
    return (
        <div className="flex gap-3">
            <Catbut isSelected={true}>All</Catbut>
            <Catbut>Music</Catbut>
            <Catbut>Gaming</Catbut>
            <Catbut>Podcasts</Catbut>
            <Catbut>JavaScript</Catbut>
            <Catbut>HTML 5</Catbut>
        </div>
    )
}