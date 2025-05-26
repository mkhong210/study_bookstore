// 25.05.26

import { Button, Container, Form } from "react-bootstrap";

const ContactPage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center">Business Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="text-start w-100">이름</Form.Label>
          <Form.Control type="text" placeholder="이름 입력"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="text-start w-100">이메일</Form.Label>
          <Form.Control type="text" placeholder="이메일 입력"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="text-start w-100">내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="내용 입력"
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          variant="warning"
          className="w-100"
          style={{ height: "50px" }}
        >
          접수하기
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
