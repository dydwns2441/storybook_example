import Modal,{ModalProps} from "../components/common/Modal";
import {Meta, Story} from "@storybook/react";
import {useState} from "react";
import Button from "../components/common/Button";

export default {
    title: "components/common/Modal",
    component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
    const [modal, setModal] =useState(false);
    const handleModal = (prevState:boolean) => setModal(!prevState)
    return (
        <>
            <Button onClick={handleModal as ()=>boolean} children={'모달'} size={'large'} theme={'primary'} />
            {modal ? <Modal {...args  } handleModal={handleModal as ()=> boolean}/> : null}
        </>

    )


};

export const modal = Template.bind({});