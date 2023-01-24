import { Button, ButtonProps } from 'antd';
import { SearchOutlined, ZoomInOutlined } from '@ant-design/icons';

import { ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
    title: 'UI-Kit / General / Button / Text',
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
export const Text = (props: ButtonProps) => (
    <Button type="text" {...props}>
        Text Button
    </Button>
);

export const TextDanger = (props: ButtonProps) => {
    return (
        <Button type="text" danger {...props}>
            Text Danger
        </Button>
    );
};

export const TextDisabled = (props: ButtonProps) => {
    return (
        <Button type="text" disabled {...props}>
            Text Disabled
        </Button>
    );
};

export const TextGhost = (props: ButtonProps) => {
    return (
        <Button type="text" ghost {...props}>
            Text Ghost
        </Button>
    );
};

export const TextGhostDanger = (props: ButtonProps) => {
    return (
        <Button type="text" ghost danger {...props}>
            Text Ghost Danger
        </Button>
    );
};

export const TextGhostDisabled = (props: ButtonProps) => {
    return (
        <Button type="text" ghost disabled {...props}>
            Text Ghost Disabled
        </Button>
    );
};

export const TextWithIcon = (props: ButtonProps) => {
    return (
        <Button type="text" icon={<ZoomInOutlined />} {...props}>
            With Icon
        </Button>
    );
};

export const TextIconOnly = (props: ButtonProps) => {
    return <Button type="text" icon={<ZoomInOutlined />} {...props} />;
};

export const TextIconOnlyCircle = (props: ButtonProps) => {
    return <Button type="text" icon={<SearchOutlined />} shape="circle" {...props} />;
};

export const TextRound = (props: ButtonProps) => {
    return (
        <Button type="text" shape="round" {...props}>
            Text Rounded
        </Button>
    );
};
