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
  background-color: rgb(236, 241, 255);
`;

const Header = (props:{handleModal:()=>boolean}) => {

  return (
    <>
      <HeaderContainer>
        <Logo
          size={"medium"}
          onClick={() => {
            console.log("logo");
          }}
        />
        <List
          size={"medium"}
          direction={"row"}
          onClick={(e: string) => {
            console.log(e);
          }}
          list={["제품 특장점", "신규가입 혜택", "자주 묻는 질문"]}
        />

        <Button
          size={"medium"}
          theme={"primary"}
          onClick={props.handleModal}
          // disabled
        >
          LOG IN
        </Button>
      </HeaderContainer>
    </>
  );
};

export default Header;
