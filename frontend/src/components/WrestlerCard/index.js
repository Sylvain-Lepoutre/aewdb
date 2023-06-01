import './style.scss';

function WrestlerCard( { name }) {
    return (
        <li className="wrestlercard">
            <h4 className="wrestlercard__title">{name}</h4>
        </li>
    )
}

export default WrestlerCard;