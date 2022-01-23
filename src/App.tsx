import React from "react";
import Header from "./components/header/Header";
import { GlobalStyle } from "./components/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
