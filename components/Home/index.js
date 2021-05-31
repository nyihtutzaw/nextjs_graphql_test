import { Fragment } from 'react';
import TitleBox from './TitleBox';
import Characters from './Charaters';
function Home() {
    return (
        <Fragment>
            <TitleBox />
            <Characters/>
        </Fragment>
    )
}
export default Home;