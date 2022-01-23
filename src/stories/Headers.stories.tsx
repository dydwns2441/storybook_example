import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "../components/header/Header";

export default {
  title: "components/header/headers",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};
