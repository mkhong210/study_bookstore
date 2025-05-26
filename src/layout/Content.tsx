// 25.05.22

import { Navbar, Container, Nav } from "react-bootstrap";
// src 폴더에 파일이 있을 경우
// import book11 from "../img/11.jpg";

import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/ListPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import DetailPage2 from "../pages/DetailPage2";
import DetailPage3 from "../pages/DetailPage3";

// 25.05.26
// bootstrap-icons 추가
import { PersonFill } from "react-bootstrap-icons";

// function Content() {
//   return <div>본문입니다.</div>;
// }
const Content: React.FC = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#4169E1" }}
        // bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <h1>BookStore</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/list">Product</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="d-flex align-item-center">
              <PersonFill size={20} classListme-2>
                Login
              </PersonFill>
              로그인
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        {/* element={컴포넌트} */}
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/list" element={<ListPage></ListPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        {/* 장바구니 */}
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        {/* 상세페이지 */}
        <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        {/* 404페이지 - 위의 모든 페이지를 제외한 요청 */}
        <Route
          path="*"
          element={"페이지가 존재하지 않습니다. 확인해주세요."}
        ></Route>
        {/* 25.05.23 */}
        <Route path="/detail2" element={<DetailPage2></DetailPage2>}></Route>
        <Route path="/detail3" element={<DetailPage3></DetailPage3>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
