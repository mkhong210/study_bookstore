// 25.05.22

import { Container, Row } from "react-bootstrap";
import MyCarousel from "../components/Carousel";
import BookItem from "../components/BookItem";
// import bookdata, { type Book } from "../data/Bookdata";
import bookdata, { Book } from "../data/Bookdata";
import { useState } from "react";

const HomePage: React.FC = () => {
  const [books] = useState<Book[]>(bookdata);
  // const [books, setBooks] = useState<Book[]>(bookdata);

  console.log(books);
  return (
    <div>
      {/* 루트에 /는 public 기준 */}
      {/* <img src={book11} className="d-block w-100" alt="모던자바스크립트&Node.js" /> */}
      {/* <img
          src="/img/11.jpg"
          className="d-block w-100"
          alt="모던자바스크립트&Node.js"
        /> */}

      <MyCarousel></MyCarousel>

      <Container>
        <div className="project_header_container">
          <h1 className="project_header">베스트셀러</h1>
          <div className="hr"></div>
        </div>
        <Row className="text-center">
          {books.map((book) => (
            <BookItem book={book} key={book.id}></BookItem>
          ))}
          {/* <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
