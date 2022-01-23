import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/common/Button";

export default {
  title: "components/common/Button",
  component: Button,
  argTypes: {
    controls: {
      disabled: { control: { type: "boolean" } },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
export const button = Template.bind({});
button.args = {
  size: "small",
  theme: "primary",
  children: "추가하기",
  disabled: false,
};
