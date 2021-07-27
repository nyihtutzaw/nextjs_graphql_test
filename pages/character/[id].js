import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head';
import { getCharacters, getCharacterByID } from '../../lib/services'
import CharacterContainer from './../../components/Character/CharacterContainer.js';
import FullScreenLoader from './../../components/ui/FullScreenLoader.js';
import CharacterContext from './../../store/CharacterContext.js';
export default function Character({ character }) {

    if (!character) {
        return <DefaultErrorPage statusCode={404} />
    }


    const router = useRouter()
    const characterCtx = useContext(CharacterContext);
    useEffect(() => {
        if (character) {
            characterCtx.setEachData(character);
        }
    }, [character])


    if (router.isFallback) {
        return <FullScreenLoader />
    }

    return (
        <Fragment>
            <Head>
                <title>{character.name}</title>
                <meta name={character.name} content={`${character.name} Rick and Morty character`} />
            </Head>
            <CharacterContainer />
        </Fragment>

    )
}

export async function getStaticProps(context) {
    var character = await getCharacterByID(context.params.id);



    return {
        props: {
            character: character,

        },
    }
}

export async function getStaticPaths() {

    var characters = await getCharacters();
    const paths = characters.map(char => ({ params: { id: char.id.toString() } }));
    return {
        paths: paths,
        fallback: true,
    };
}
