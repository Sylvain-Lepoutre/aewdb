import { Link } from 'react-router-dom';
import './style.scss';

import Panel from '../Panel';

function Header( { children }) {
    return (
        <Panel as="header" className="header" role="banner">
            <h1 className="header__title"><Link to={"/"}>All Elite Wrestling</Link></h1>
            { children }
        </Panel>
    )
}

export default Header;