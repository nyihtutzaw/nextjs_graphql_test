import { useContext, useEffect } from 'react';
import Home from './../components/Home';
import { getCharacters } from '../lib/services'
import CharacterContext from './../store/CharacterContext.js';
export default function Index({ characters }) {

  const characterCtx = useContext(CharacterContext);
  useEffect(() => {
    if (characters) {
      if (characterCtx.data.length == 0) characterCtx.setData(characters);
    }
  }, [])
  return <Home />
}
export async function getStaticProps() {
  var data = await getCharacters();
  return {
    props: {
      characters: data,
    },
  }
}
