import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from '../components/Nav'


function Layout() {
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Outlet />
        </>
    )
}



export default Layout;