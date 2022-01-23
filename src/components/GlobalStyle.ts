import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin : 0; 
    padding : 0;
    box-sizing: border-box;
    font-family: -apple-system, 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  };
  input,textarea{
    &:active,&:focus{
      outline: none;
    }
  }
  button{
    cursor: pointer;
  }
`;
