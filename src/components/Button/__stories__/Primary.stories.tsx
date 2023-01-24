import { Button, ButtonProps } from 'antd';
import { SearchOutlined, ZoomInOutlined } from '@ant-design/icons';

import { ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
    title: 'UI-Kit / General / Button / Primary',
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
            control: 'select',
        },
        shape: {
            options: ['default', 'circle', 'round'],
            control: 'select',
        },
        size: {
            options: ['large', 'default', 'small'],
            control: 'select',
        },
    },
} as ComponentMeta<typeof Button>;
export const Primary = (props: ButtonProps) => (
    <Button type="primary" {...props}>
        Primary Button
    </Button>
);

export const PrimaryDanger = (props: ButtonProps) => {
    return (
        <Button type="primary" danger {...props}>
            Primary Danger
        </Button>
    );
};

export const PrimaryDisabled = (props: ButtonProps) => {
    return (
        <Button type="primary" disabled {...props}>
            Primary Disabled
        </Button>
    );
};

export const PrimaryGhost = (props: ButtonProps) => {
    return (
        <Button type="primary" ghost {...props}>
            Primary Ghost
        </Button>
    );
};

export const PrimaryGhostDanger = (props: ButtonProps) => {
    return (
        <Button type="primary" ghost danger {...props}>
            Primary Ghost Danger
        </Button>
    );
};

export const PrimaryGhostDisabled = (props: ButtonProps) => {
    return (
        <Button type="primary" ghost disabled {...props}>
            Primary Ghost Disabled
        </Button>
    );
};

export const PrimaryWithIcon = (props: ButtonProps) => {
    return (
        <Button type="primary" icon={<ZoomInOutlined />} {...props}>
            With Icon
        </Button>
    );
};

export const PrimaryIconOnly = (props: ButtonProps) => {
    return <Button type="primary" icon={<ZoomInOutlined />} {...props} />;
};

export const PrimaryIconOnlyCircle = (props: ButtonProps) => {
    return <Button type="primary" icon={<SearchOutlined />} shape="circle" {...props} />;
};

export const PrimaryRound = (props: ButtonProps) => {
    return (
        <Button type="primary" shape="round" {...props}>
            Primary Rounded
        </Button>
    );
};
