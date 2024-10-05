import { useEffect, useState } from "react"

function App() {
    const [ pets, setPets] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:8080/api/pets")
            .then((response) => response.json())
            .then((data) => {
                setPets(data.payload ?? [])
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h1>Hola Mundo React</h1>

            <h3>Mis Mascotas</h3>
            <ul>
                {pets.map((pet) => {
                    return (
                        <li key={`pet-${pet._id}`}>{pet.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default App
