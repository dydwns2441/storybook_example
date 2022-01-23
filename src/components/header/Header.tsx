import React from "react";
import styled from "styled-components";
import Logo from "../common/Logo";

const HeaderContainer = styled.header`
  width: 100vw;
  border: 3px solid;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <nav>
          <Logo
            size={"small"}
            onClick={() => {
              console.log("logo");
            }}
          />
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
