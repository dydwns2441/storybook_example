import Header,{HeaderProps} from "../components/header/Header";
import {Meta, Story} from "@storybook/react";
import { GlobalStyle } from "../components/GlobalStyle";

export default {
  title: "components/header",
  component: Header,
} as Meta;

const Template:Story<HeaderProps> = (args) => {
  return (
  <>
    <GlobalStyle />
    <Header {...args} />
  </>
  )
};

export const header = Template.bind({});