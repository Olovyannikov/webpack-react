import { Button, ButtonProps } from 'antd';
import { SearchOutlined, ZoomInOutlined } from '@ant-design/icons';

import { ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
    title: 'UI-Kit / General / Button / Default',
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
            options: ['primary', 'dashed', 'text', 'link', 'default'],
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
export const Default = (props: ButtonProps) => (
    <Button type="default" {...props}>
        Default Button
    </Button>
);

export const DefaultDanger = (props: ButtonProps) => {
    return (
        <Button type="default" danger {...props}>
            Default Danger
        </Button>
    );
};

export const DefaultDisabled = (props: ButtonProps) => {
    return (
        <Button type="default" disabled {...props}>
            Default Disabled
        </Button>
    );
};

export const DefaultGhost = (props: ButtonProps) => {
    return (
        <Button type="default" ghost {...props}>
            Default Ghost
        </Button>
    );
};

export const DefaultGhostDanger = (props: ButtonProps) => {
    return (
        <Button type="default" ghost danger {...props}>
            Default Ghost Danger
        </Button>
    );
};

export const DefaultGhostDisabled = (props: ButtonProps) => {
    return (
        <Button type="default" ghost disabled {...props}>
            Default Ghost Disabled
        </Button>
    );
};

export const DefaultWithIcon = (props: ButtonProps) => {
    return (
        <Button type="default" icon={<ZoomInOutlined />} {...props}>
            With Icon
        </Button>
    );
};

export const DefaultIconOnly = (props: ButtonProps) => {
    return <Button type="default" icon={<ZoomInOutlined />} {...props} />;
};

export const DefaultIconOnlyCircle = (props: ButtonProps) => {
    return <Button type="default" icon={<SearchOutlined />} shape="circle" {...props} />;
};

export const DefaultRound = (props: ButtonProps) => {
    return (
        <Button type="default" shape="round" {...props}>
            Default Rounded
        </Button>
    );
};
