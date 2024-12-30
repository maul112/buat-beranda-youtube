import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="min-w-full min-h-screen flex">
            <h1 className="m-auto">Ooops!</h1>
        </div>
    )
}