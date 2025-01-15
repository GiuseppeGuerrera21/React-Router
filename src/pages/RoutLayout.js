import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RoutLayout() {
    return(
        <>
        <MainNavigation />
        <main>
        <Outlet />
        </main>
        </>
    )
}