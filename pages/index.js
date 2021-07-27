import { useContext, useEffect, Fragment } from 'react';
import Head from 'next/head';
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
  return <Fragment>
    <Head>
      <title>All Characters</title>
      <meta name="description" content="All characters of Rick and Morty, Netflix original animated series" />
    </Head>
    <Home />
  </Fragment>

}
export async function getStaticProps() {
  var data = await getCharacters();
  return {
    props: {
      characters: data,
    },
  }
}
