// 25.05.22

import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Book } from "../data/Bookdata";

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <>
      <Col className="box p-4" key={book.id} sm={6} md={4}>
        <Card
          style={{ width: "300px", height: "500px" }}
          className="border rounded shadow-sm p-3"
        >
          <Card.Img
            variant="top"
            src={`/img/${book.id + 1}.jpg`}
            style={{
              height: "240px",
              widows: "173px",
              objectFit: "cover",
            }}
            alt={book.title}
          />
          <Card.Body>
            <Card.Title className="title">{book.title}</Card.Title>
            <Card.Text>
              <span>작가 :{book.author}</span>
              <br />
              <span>별점 :{book.star}</span>
            </Card.Text>
            <div className="linkTo">
              <Link to={`/detail/${book.id}`} state={{ book }}>
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default BookItem;
