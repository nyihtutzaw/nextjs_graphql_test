import { Layout } from 'antd';
import Nav from '../Nav';
import classes from './MainContainer.module.css';
const { Content } = Layout;
const MainContainer = ({ children }) => {
    return (
        <>
            <Layout >
                <Nav />
                <Content className={classes.mainContainer} c>{children}</Content>
            </Layout>
        </>
    )
}
export default MainContainer