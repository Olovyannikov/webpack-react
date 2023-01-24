import { ComponentMeta } from '@storybook/react';
import Title, { TitleProps } from 'antd/lib/typography/Title';

export default {
    title: 'UI-Kit / General / Typography / Title',
    component: Title,
    argTypes: {
        level: {
            options: [1, 2, 3, 4, 5],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Title>;

export const H1 = (props: TitleProps) => {
    return <Title {...props}>Title Level H1</Title>;
};
export const H2 = (props: TitleProps) => {
    return (
        <Title level={2} {...props}>
            Title Level H2
        </Title>
    );
};
export const H3 = (props: TitleProps) => {
    return (
        <Title level={3} {...props}>
            Title Level H3
        </Title>
    );
};
export const H4 = (props: TitleProps) => {
    return (
        <Title level={4} {...props}>
            Title Level H4
        </Title>
    );
};
export const H5 = (props: TitleProps) => {
    return (
        <Title level={5} {...props}>
            Title Level H5
        </Title>
    );
};

Title.displayName = 'Title';
