import List, { ListProps } from "../components/common/List";
import { Meta, Story } from "@storybook/react";

export default {
  title: "components/common/List",
  component: List,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<ListProps> = (args) => {
  return <List {...args} />;
};

export const list = Template.bind({});
list.args = {
  list: ["제품 특장점", "신규가입 혜택", "자주 묻는 질문"],
  size: "small",
  direction: "row",
  onClick: () => console.log("짜잔"),
};
