import { createContext, useState, useEffect } from 'react';
import Axios from 'axios';


export const CharactersContext = createContext();

export const CharactersContextProvider = ({children}) => {
    const [characters, setCharacter] = useState([]);

    useEffect(() =>{
        Axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                console.log(response)
            })    

    }, []);

    return (
        <CharactersContext.Provider value={'Rick and Morty'}>
            {children}
        </CharactersContext.Provider>
    )
}