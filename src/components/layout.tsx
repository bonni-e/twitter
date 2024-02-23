import { Navigate, Outlet } from "react-router-dom"
import styled from "styled-components";
import { auth } from "../firebase";

const Navi = styled.nav`
`;

const Logout = styled.button`
`;

export default function Layout() {
    const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        auth.signOut();
    }

    return (
        <>
            <Navi>
                <Logout onClick={onClick}>Logout</Logout>
            </Navi>
            <Outlet />
            {/* Renders the child route's element, if there is one. */}
        </>
    );
}