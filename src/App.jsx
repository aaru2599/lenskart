// import { useState } from 'react'
import styled from "styled-components";
import "./App.css";
import Header from "./Component/Molecules/Header";
import EyeGlasses from "./Component/Molecules/EyeGlasses";

function App() {

  return (
    <>
      {/* <Wrapper> */}
        <Header />
        <Wrapper>
          <EyeGlasses/>
        </Wrapper>
      {/* </Wrapper> */}
    </>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;
