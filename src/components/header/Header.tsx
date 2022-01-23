import React, { FC } from "react";
import Button from "../common/Button/Button";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <>
      <header>
        <nav>
          <Button
            onClick={() => {
              console.log("버튼ㅌㅌㅌ");
            }}
          >
            버튼튼튼
          </Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
