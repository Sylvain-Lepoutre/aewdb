import { Outlet, Link } from "react-router-dom";

function Layout(){
    return (
        <>
            <nav>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/roster"}>Roster</Link>
                </li>
            </nav>

            <Outlet />
        </>
    )
}



export default Layout;