import styled from "styled-components";
import Button from "./Button";

export type ModalProps = {
    handleModal: ()=> boolean;
}

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: darkgrey;
  opacity: 0.7;
`;


const Container = styled.div`
  position: fixed;
  
  width: 375px;
  background: white;
  z-index: 2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  
  >div {
    display: flex;
    margin: 0 auto;
    width: 300px;
    justify-content: center;
    gap:20px;
  }
  >span {
    text-align: center;
  }
  > h1 h2{
    width: 100%;
    font-size: 48px;
  } 
`;

const Modal = (props:ModalProps) => {

    return (
                <div>
                    <Container>
<span>
                        <h1>
                            모달입니다.
                        </h1>
                        <h2>
                            모달입니다.
                        </h2>
</span>
                        <div>
                            <Button
                                children='확인'
                                theme='secondary'
                                onClick={props.handleModal}
                                size='medium'
                                width={150}
                            />
                            <Button
                                children='확인'
                                theme='warning'
                                onClick={props.handleModal}
                                size='medium'
                                width={150}
                            />
                            <Button
                                children='확인'
                                theme='cancle'
                                onClick={props.handleModal}
                                size='medium'
                                width={150}
                            />
                            <Button
                                children='확인'
                                theme='primary'
                                onClick={props.handleModal}
                                size='medium'
                                width={150}
                            />
                        </div>


                    </Container>
                    <Overlay />

                </div>


    )
}

export default Modal;