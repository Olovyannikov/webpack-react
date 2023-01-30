import { ComponentMeta } from '@storybook/react';
import Title, { TitleProps } from 'antd/lib/typography/Title';

export default {
    title: 'UI-Kit / General / Typography / Title',
    component: Title,
    argTypes: {
        level: {
            options: [1, 2, 3, 4, 5],
            control: 'radio',
        },
    },
} as ComponentMeta<typeof Title>;

export const H1 = (props: TitleProps) => <Title {...props}>Title Level H{props.level}</Title>;
H1.args = {
    level: 1,
};
export const H2 = (props: TitleProps) => <Title {...props}>Title Level H{props.level}</Title>;

H2.args = {
    level: 2,
};
export const H3 = (props: TitleProps) => <Title {...props}>Title Level H{props.level}</Title>;
H3.args = {
    level: 3,
};
export const H4 = (props: TitleProps) => <Title {...props}>Title Level H{props.level}</Title>;
H4.args = {
    level: 4,
};
export const H5 = (props: TitleProps) => <Title {...props}>Title Level H{props.level}</Title>;
H5.args = {
    level: 5,
};

Title.displayName = 'Title';
