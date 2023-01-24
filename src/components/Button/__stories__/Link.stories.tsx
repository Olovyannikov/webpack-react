import { Button, ButtonProps } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';

import { ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
    title: 'UI-Kit / General / Button / Link',
    component: Button,
    argTypes: {
        block: {
            control: 'boolean',
        },
        danger: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        ghost: {
            control: 'boolean',
        },
        type: {
            options: ['primary', 'dashed', 'text', 'link'],
            control: { type: 'select' },
        },
        shape: {
            options: ['default', 'circle', 'round'],
            control: { type: 'select' },
        },
        size: {
            options: ['large', 'default', 'small'],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Button>;
export const Link = (props: ButtonProps) => (
    <Button type="link" {...props}>
        Link Button
    </Button>
);

export const LinkDanger = (props: ButtonProps) => {
    return (
        <Button type="link" danger {...props}>
            Link Danger
        </Button>
    );
};

export const LinkDisabled = (props: ButtonProps) => {
    return (
        <Button type="link" disabled {...props}>
            Link Disabled
        </Button>
    );
};

export const LinkGhost = (props: ButtonProps) => {
    return (
        <Button type="link" ghost {...props}>
            Link Ghost
        </Button>
    );
};

export const LinkGhostDanger = (props: ButtonProps) => {
    return (
        <Button type="link" ghost danger {...props}>
            Link Ghost Danger
        </Button>
    );
};

export const LinkGhostDisabled = (props: ButtonProps) => {
    return (
        <Button type="link" ghost disabled {...props}>
            Link Ghost Disabled
        </Button>
    );
};

export const LinkWithIcon = (props: ButtonProps) => {
    return (
        <Button type="link" icon={<ZoomInOutlined />} {...props}>
            With Icon
        </Button>
    );
};

export const LinkIconOnly = (props: ButtonProps) => {
    return <Button type="link" icon={<ZoomInOutlined />} {...props} />;
};
