// import { useState } from 'react'
import styled from "styled-components";
import "./App.css";
import Header from "./Component/Molecules/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Wrapper> */}
        <Header />
      {/* </Wrapper> */}
    </>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;
