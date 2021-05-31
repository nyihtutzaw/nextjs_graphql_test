import Link from 'next/link'
import { Col, Card } from 'antd';
import Image from 'next/image'
const { Meta } = Card;
function Item({ value }) {

    const myLoader = ({ src }) => {
        return src;
    }

    return (
        <Col lg={4} key={value.id} style={{ marginBottom: 20 }}>
            <Link href={`/character/${value.id}`}>
                <Card
                    style={{ width: 200, cursor: 'pointer' }}
                    cover={
                        <Image alt="example" src={value.image} loader={myLoader}
                            width={200}
                            height={200}
                            placeholder="blur"

                        />
                    }
                >
                    <Meta title={value.name} />
                </Card>
            </Link>
        </Col>
    )
}
export default Item;