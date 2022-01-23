import Logo from "../components/common/Logo";
import {Meta, Story} from "@storybook/react";
import {logoProps} from "../components/common/Logo";

export default {
    title: 'Component/common/Logo',
    component: Logo,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: {type: 'radio'}
        }
    }
} as Meta;

const Template: Story<logoProps> = (args) => {
    return <Logo {...args}  />
};

export const logo = Template.bind({});
logo.args = {
    size: 'small',
    onClick: () => console.log('링크로 이동')
}


