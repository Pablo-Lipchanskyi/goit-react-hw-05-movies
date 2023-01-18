import GetFilms from 'services/API';
import { useState } from 'react';
import { useEffect } from 'react';



export const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const getFilmsArray = async () => {
            const { hits } = await GetFilms();
            setFilms(hits, ...films)
        }
    getFilmsArray()
    }, [])

    return (
        <>
            <ul>
                {films.map(hit => (
                    <li key={hit.id}>
                        {hit}
                    </li>
                ))}
            </ul>
        </>
    )
}