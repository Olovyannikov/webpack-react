import { Button, ButtonProps } from 'antd';
import { SearchOutlined, ZoomInOutlined } from '@ant-design/icons';

import { ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
    title: 'UI-Kit / General / Button / Dashed',
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
            options: ['dashed', 'dashed', 'text', 'link'],
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
export const Dashed = (props: ButtonProps) => (
    <Button type="dashed" {...props}>
        Dashed Button
    </Button>
);

export const DashedDanger = (props: ButtonProps) => {
    return (
        <Button type="dashed" danger {...props}>
            Dashed Danger
        </Button>
    );
};

export const DashedDisabled = (props: ButtonProps) => {
    return (
        <Button type="dashed" disabled {...props}>
            Dashed Disabled
        </Button>
    );
};

export const DashedGhost = (props: ButtonProps) => {
    return (
        <Button type="dashed" ghost {...props}>
            Dashed Ghost
        </Button>
    );
};

export const DashedGhostDanger = (props: ButtonProps) => {
    return (
        <Button type="dashed" ghost danger {...props}>
            Dashed Ghost Danger
        </Button>
    );
};

export const DashedGhostDisabled = (props: ButtonProps) => {
    return (
        <Button type="dashed" ghost disabled {...props}>
            Dashed Ghost Disabled
        </Button>
    );
};

export const DashedWithIcon = (props: ButtonProps) => {
    return (
        <Button type="dashed" icon={<ZoomInOutlined />} {...props}>
            With Icon
        </Button>
    );
};

export const DashedIconOnly = (props: ButtonProps) => {
    return <Button type="dashed" icon={<ZoomInOutlined />} {...props} />;
};

export const DashedIconOnlyCircle = (props: ButtonProps) => {
    return <Button type="dashed" icon={<SearchOutlined />} shape="circle" {...props} />;
};

export const DashedRound = (props: ButtonProps) => {
    return (
        <Button type="dashed" shape="round" {...props}>
            Dashed Rounded
        </Button>
    );
};
