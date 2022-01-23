import React,{useState} from "react";
import Header from "./components/header/Header";
import { GlobalStyle } from "./components/GlobalStyle";
import Modal from "./components/common/Modal";
function App() {
    const [modal, setModal] = useState(false);
    const handleModal = () => setModal((prevState) => !prevState);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header handleModal={handleModal as ()=>boolean}/>
      </div>
        {modal ? <Modal handleModal={handleModal as ()=> boolean} /> : null}
    </>
  )
};

export default App;
