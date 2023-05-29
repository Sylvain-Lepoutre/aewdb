import './style.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav' role='navigation'>
            <li className='nav__item'>
                <Link to={"/"}>Home</Link>
            </li>
            <li className='nav__item'>
                <Link to={"/roster"}>Roster</Link>
            </li>
            <li className='nav__item'>Soon...</li>
            <li className='nav__item'>Soon...</li>
        </nav>
    )
}

export default Nav;