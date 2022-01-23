import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import List from "../common/List";
import Logo from "../common/Logo";

export type HeaderProps = {
    handleModal:()=>boolean;
}

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(236, 241, 255);
`;

/**
 *
 * - <b>Logo 가이드</b>
 *   - size : medium
 *   - onClick : console.log 에 logo 표시
 *
 * - <b>List 가이드</b>
 *   - list : header의 list 로 나타낼 값 배열로 작성
 *   - size : medium 적용
 *   - direction : col : list 세로 정렬 적용
 *   - onClick : console.log 에 해당 list 표시
 *
 * - <b>Button 가이드</b>
 *   - size : medium 적용
 *   - theme : primary 적용
 *
 * @param props
 * @returns
 */

const Header = (props: { handleModal: () => boolean }) => {
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
          list={["제품 특장점", "신규가입 혜택", "자주 묻는 질문"] as string[]}
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
