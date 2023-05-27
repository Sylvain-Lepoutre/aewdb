import { useState, useEffect } from "react";

function Home() {
    const [champions, setChampions] = useState([])

    async function getChampions() {
        try {
            const response = await fetch('http://localhost:3000/api/championships');
            const data = await response.json();
            setChampions(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getChampions();
    }, []);


    return (
        <>
            <h1>Home</h1>
            <div>
                <ul>
                    {champions.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Home;




