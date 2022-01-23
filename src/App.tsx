import React,{useState} from "react";
import Header from "./components/header/Header";
import { GlobalStyle } from "./components/GlobalStyle";
import Modal from "./components/common/Modal";
function App() {
    const [modal, setModal] = useState(false);
    const handleModal = (prevState:boolean) => setModal(!prevState);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
        {modal ? <Modal handleModal={handleModal as ()=> boolean} /> : null}
    </>)}


export default App;
