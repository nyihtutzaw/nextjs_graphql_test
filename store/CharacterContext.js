
import { createContext, useState } from 'react';

const CharacterContext = createContext({
    data: [],
    eachData:{},
    currentPage: 1,
    setData: function (data) {},
    setEachData:function(data){}
});

export function CharacterContextProvider(props) {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({});
    const [currentPageState, setCurrentPageState] = useState(0);
    function setDataHandler(data) {
        
        setCharacters(characters.concat(data));
        
        
        setCurrentPageState(currentPageState + 1);
    }
    function setEachDataHandler(data){
        setCharacter(data)
    }

    const context = {
        data: characters,
        eachData:character,
        currentPage: currentPageState,
        setData: setDataHandler,
        setEachData:setEachDataHandler,
        
    };
    return (
        <CharacterContext.Provider value={context}>
            {props.children}
        </CharacterContext.Provider>
    );
}


export default CharacterContext;