// 25.05.22

import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-white py-1 mt-3"
      style={{ backgroundColor: "#4169E1" }}
    >
      <Container className="text-center">
        <p>대표 : 홍민경</p>
        <p>
          이메일 :{" "}
          <a href="mailto:ghdalsrud@naver.com" className="text-white">
            ghdalsrud@naver.com
          </a>
        </p>
        <p>Copyright 홍민경 Corp. All right Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
