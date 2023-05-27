import { useEffect, useState } from "react";


function App() {

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
        <div>
            <h2>AEW Champions</h2>
            <ul>
                {champions.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
};

export default App;

