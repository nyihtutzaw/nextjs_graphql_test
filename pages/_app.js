import MainContainer from './../components/layout/MainContainer';
import { CharacterContextProvider } from './../store/CharacterContext.js';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>

      <CharacterContextProvider>
        <Component {...pageProps} />
      </CharacterContextProvider>

    </MainContainer>
  )

}
export default MyApp
