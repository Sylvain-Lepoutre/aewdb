import './style.scss';

import ChampionsList from '../ChampionsList';

function ChampionshipsList({ championships }) {
    return (
        <div className="championshipsList">
            <div className="championshipsList__row">
                {championships.filter(championship => championship.slug === "aew-world-championship").map(championship => (
                    <article className="championshipCard" key={championship.id}>
                        <h3 className="championshipCard__title" >{championship.title}</h3>
                        <ChampionsList championship={championship} />
                    </article>
                ))}
                {championships.filter(championship => championship.slug === "aew-womens-world-championship").map(championship => (
                    <article className="championshipCard" key={championship.id}>
                        <h3 className="championshipCard__title" >{championship.title}</h3>
                        <ChampionsList championship={championship} />
                    </article>
                ))}
            </div>
            <div className="championshipsList__row">
                {championships.filter(championship => championship.slug === "aew-tag-team-championship").map(championship => (
                    <article className="championshipCard" key={championship.id}>
                        <h3 className="championshipCard__title" >{championship.title}</h3>
                        <ChampionsList championship={championship} />
                    </article>
                ))}
                {championships.filter(championship => championship.slug === "aew-trios-championship").map(championship => (
                    <article className="championshipCard" key={championship.id}>
                        <h3 className="championshipCard__title" >{championship.title}</h3>
                        <ChampionsList championship={championship} />
                    </article>
                ))}
            </div>
            <div className="championshipsList__row">
                {championships.filter(championship => championship.slug === "aew-international-championship").map(championship => (
                    <article className="championshipCard" key={championship.id}>
                        <h3 className="championshipCard__title" >{championship.title}</h3>
                        <ChampionsList championship={championship} />
                    </article>
                ))}
                {championships.filter(championship => championship.slug === "aew-tbs-championship").map(championship => (
                    <article className="championshipCard" key={championship.id}>
                        <h3 className="championshipCard__title" >{championship.title}</h3>
                        <ChampionsList championship={championship} />
                    </article>
                ))}
                {championships.filter(championship => championship.slug === "aew-tnt-championship").map(championship => (
                    <article className="championshipCard" key={championship.id}>
                        <h3 className="championshipCard__title" >{championship.title}</h3>
                        <ChampionsList championship={championship} />
                    </article>
                ))}
            </div>
        </div>
    )
}

export default ChampionshipsList;