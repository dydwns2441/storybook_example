import Header from "../components/common/List";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "components/header/headers",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};
