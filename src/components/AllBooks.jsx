import { Card, Col, Row } from 'react-bootstrap'
import romance from "../data/romance.json"

const AllBooks = () => {
    return (
        <Row className="g-2">
            {romance.map((book) => {
                return (
                        <Col xs={12} md={3} key={book.asin}>
                            <Card className="book-cover d-flex">
                                <Card.Img variant="top" width="300px" src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>Euro {book.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                )
            })}
        </Row>
    )
}

export default AllBooks