import React from "react";
// import TopNavbar from "../Atoms/TopNavbar";
import CenterNav from "../Atoms/CenterNav";
import BottomNavbar from "../Atoms/BottomNavbar";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Wrapper>
      
        <CenterNav />
      </Wrapper>
      <div className="bg-[#fbf9f7]">
        <Wrapper>
          <BottomNavbar />
        </Wrapper>
      </div>
    </div>
  );
};

export default Header;
const Wrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;
