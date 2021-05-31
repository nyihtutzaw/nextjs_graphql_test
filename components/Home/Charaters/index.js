import { Col, Row  } from 'antd';
import classes from './Character.module.css';
import Item from './Item.js';
import LoadMoreButton from './LoadMoreButton.js';
import CharacterContext from '../../../store/CharacterContext.js';
function Character() {
    return (
        <div className={classes.container}>
            <CharacterContext.Consumer>
                {({ data }) => (
                    <Row>
                        {
                            data.map((value) => {
                                return (
                                    <Item value={value} />
                                )
                            })
                        }
                        <Col lg={4} key={"Key"}>
                            <LoadMoreButton />
                        </Col>
                    </Row>
                )}

            </CharacterContext.Consumer>
        </div>


    )
}
export default Character;