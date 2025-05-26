// 25.05.26 - 1

import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutPage: React.FC = () => {
  // useEffect -

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // IntersectionObserver - 브라우저 api로 브라우저 상에서 화면에 들어오는지 충돌하는지 등 검사를 하는 객체
      // => 콜백함수 필요

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // isIntersecting - 요소가 화면 안에 있는지 확인
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));
  }, []);
  // [] 비어있으면 마운틴 되었을떄 한번 실행

  return (
    <div>
      <Container>
        <Row className="text-center">
          {/* 소개 */}
          <Col md={6} className="header_left hidden">
            <header className="header_left_introduce">안녕하세요</header>
            <header className="header_left_introduce">홍민경입니다.</header>
            <div className="header_left_introduce_body_container">
              어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
              저쩌구어쩌구 저쩌구어쩌구 저쩌구
            </div>
            {/* 버튼 세션 */}
            <div className="btn_header_container">
              <a href="">
                <button className="btn_header btnHover">블로그</button>
              </a>
              <a href="">
                <button className="btn_header btnHover">유튜브</button>
              </a>
            </div>
          </Col>
          {/* 이미지 섹션 */}
          <Col>
            <img src="/img/member.jpg" width={"50%"} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
