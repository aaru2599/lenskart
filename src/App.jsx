// import { useState } from 'react'
import styled from "styled-components";
import "./App.css";
import Header from "./Component/Molecules/Header";
import EyeGlasses from "./Component/Organisms/EyeGlasses";
import TopNavbar from "./Component/Atoms/TopNavbar";
import Home from "./Component/Home/Home";
function App() {
  return (
    <div className="relative">
      {/* <Wrapper> */}
    <Wrapper>
    <TopNavbar/>
    </Wrapper>
      <div className="sticky top-[-1px] z-10 bg-white">
        <Header />
      </div>
      <Wrapper>
        <Home/>
      </Wrapper>
      {/* </Wrapper> */}
    </div>
  );
}

export default App;

export const Wrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;
