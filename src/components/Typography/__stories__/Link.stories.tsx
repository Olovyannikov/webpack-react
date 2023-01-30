import { Typography } from 'antd';
import { LinkProps } from 'antd/es/typography/Link';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / General / Typography / Link',
    component: Typography.Link,
    argTypes: {
        href: {
            control: 'text',
            defaultValue: 'https://google.com',
        },
        target: {
            control: 'text',
            defaultValue: '_blank',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Typography.Link>;

export const LinkDefault = (props: LinkProps) => {
    const { href = 'https://sber.ru' } = props;

    return (
        <Typography.Link href={href} target="_blank" {...props}>
            Base Ant Link
        </Typography.Link>
    );
};

Typography.Link.displayName = 'Typography.Link';
