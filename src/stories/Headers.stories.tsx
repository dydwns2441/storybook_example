import Header from "../components/common/List";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "components/header/headers",
  component: Header,
  argTypes: {},
} as Meta;

export const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};
