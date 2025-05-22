// 25.05.22

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { Book } from "../data/Bookdata";

interface LocationState {
  book: Book;
}

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const location = useLocation();
  const { state } = location as { state: LocationState };

  const book = state.book;
  console.log(state);
  console.log(book);

  return (
    <div>
      <p>상세 페이지</p>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={`/img/${book.id + 1}.jpg`}
                style={{ borderRadius: "8px" }}
              ></Card.Img>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 text-center">
              <Card.Body>
                <Card.Title as="h3" className="mb-4">
                  {book.title}
                </Card.Title>
                <Card.Text className="text-muted mb-4">
                  {book.content}
                </Card.Text>
                <Card.Text as="h4" className="text-primary mb-4">
                  {book.price}원
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    console.log("클릭");
                  }}
                >
                  카트에 담기
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPage;
