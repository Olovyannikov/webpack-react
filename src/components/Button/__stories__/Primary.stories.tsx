import { Button, ButtonProps } from 'antd';

import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Button / Primary',
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
export const Primary = (props: ButtonProps) => (
    <Button type="primary" {...props}>
        Primary Button
    </Button>
);

export const PrimaryDanger = (props: ButtonProps) => {
    return (
        <Button {...props} type="primary" danger>
            Primary Danger
        </Button>
    );
};

export const PrimaryDisabled = (props: ButtonProps) => {
    return (
        <Button {...props} type="primary" disabled>
            Primary Disabled
        </Button>
    );
};

export const PrimaryGhost = (props: ButtonProps) => {
    return (
        <Button {...props} type="primary" ghost>
            Primary Ghost
        </Button>
    );
};

export const PrimaryGhostDanger = (props: ButtonProps) => {
    return (
        <Button {...props} type="primary" ghost danger>
            Primary Ghost Danger
        </Button>
    );
};

export const PrimaryGhostDisabled = (props: ButtonProps) => {
    return (
        <Button {...props} type="primary" ghost disabled>
            Primary Ghost Disabled
        </Button>
    );
};
