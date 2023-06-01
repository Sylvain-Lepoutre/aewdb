import { useState, useEffect } from "react";

import Panel from "../../components/Panel";
import ChampionsList from "../../components/ChampionsList";

import './style.scss';
import ChampionshipsList from "../../components/ChampionshipsList";


function Home() {
    const [championships, setChampionships] = useState([])


    async function getChampionsByChampionships() {
        try {
            const response = await fetch('http://localhost:3000/api/championships');
            const data = await response.json();
            setChampionships(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getChampionsByChampionships();
    }, []);


    return (
        <Panel as="main" role="main" className="home">
            <h2 className="home__title">Champions actuels</h2>
            <ChampionshipsList championships={championships} />
        </Panel>
    )
};

export default Home;




