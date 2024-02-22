import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <address>layout</address>
            <Outlet />
            {/* Renders the child route's element, if there is one. */}
        </>
    );
}