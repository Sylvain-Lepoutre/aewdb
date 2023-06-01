import './style.scss';

import WrestlerCard from '../WrestlerCard';

function ChampionsList({ championship }) {
    return (
        <ul className="championsList">
            {championship.Wrestlers.map(wrestler => (
                <WrestlerCard
                    className="wrestlerCard"
                    key={wrestler.id}
                    name={wrestler.name}
                />
            ))}
        </ul>
    )

}


export default ChampionsList;
