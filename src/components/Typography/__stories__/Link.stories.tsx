import Link, { LinkProps } from 'antd/lib/typography/Link';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / General / Typography / Link',
    component: Link,
    argTypes: {
        href: {
            control: 'text',
            default: 'https://google.com',
        },
        target: {
            control: 'text',
            defaultValue: '_blank',
        },
    },
} as ComponentMeta<typeof Link>;

export const LinkDefault = (props: LinkProps) => {
    const { href = 'https://sber.ru' } = props;

    return (
        <Link href={href} target="_blank" {...props}>
            Base Ant Link
        </Link>
    );
};

Link.displayName = 'Link';
