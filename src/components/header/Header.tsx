import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import List from "../common/List";
import Logo from "../common/Logo";

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ecf0ff;
  /* border: 3px solid; */
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo
          size={"small"}
          onClick={() => {
            console.log("logo");
          }}
        />
        <List
          size={"medium"}
          direction={"row"}
          onClick={() => {
            console.log("click list");
          }}
          list={["제품 특장점", "신규가입 혜택", "자주 묻는 질문"]}
        />

        <Button
          size={"medium"}
          theme={"primary"}
          onClick={() => {
            "click event!";
          }}
        >
          LOG IN
        </Button>
      </HeaderContainer>
    </>
  );
};

export default Header;
