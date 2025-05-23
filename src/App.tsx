// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import HookRef from "./HookTest";
// import { Button } from "react-bootstrap";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      {/* <Button variant="primary">Primary Button</Button> */}

      <HookRef></HookRef>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
