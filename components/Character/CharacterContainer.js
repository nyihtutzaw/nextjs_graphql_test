import { Card } from 'antd';
import Image from 'next/image'
import CharacterContext from './../../store/CharacterContext.js';
import DescriptionItem from './DescriptionItem.js';
import classes from './CharacterContainer.module.css';
const { Meta } = Card;
const CharacterContainer = () => {
    const myLoader = ({ src }) => {
        return src;
    }
    return (
        <div className={classes.container}>
            <CharacterContext.Consumer>
                {({ eachData }) => (

                    eachData.image && <Card
                        style={{ width: 500 }}
                        cover={
                            <Image alt="example" src={eachData.image} loader={myLoader}
                            width={200}
                            height={400}
                            placeholder="blur"
    
                        />
                        }

                    >
                        <Meta
                            description={
                                <div>
                                    <DescriptionItem title="Name" value={eachData.name} />
                                    <DescriptionItem title="Status" value={eachData.status} />
                                    <DescriptionItem title="Gender" value={eachData.gender} />
                                    <DescriptionItem title="Species" value={eachData.species} />
                                </div>
                            }
                        />
                    </Card>
                )}

            </CharacterContext.Consumer>

        </div>
    )
}

export default CharacterContainer;