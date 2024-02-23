// 로그인한 사용자          -> ProtectedRoute
// 로그인하지 않은 사용자     -> Login or CreateAccount

import React from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children} : {children: React.ReactNode}) {

    // 로그인 여부 확인 후, 
    const user = auth.currentUser;

    if (user === null) {
        // 리디렉트 하거나 OR 
        return <Navigate to={"/login"} />
    }

    // 보호된 라우트를 보여주거나 
    return <>
        {children}
    </>;
}