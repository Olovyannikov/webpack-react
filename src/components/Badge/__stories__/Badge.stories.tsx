import { Avatar, Badge, BadgeProps, Card } from 'antd';
import { theme } from '../../../../theme.config';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Data Display / Badge',
    component: Badge,
    argTypes: {
        color: {
            control: 'text',
            defaultValue: theme.token?.colorPrimary,
            if: { arg: 'status', eq: 'default' },
        },
        count: {
            control: 'number',
            defaultValue: 5,
            if: { arg: 'status', eq: 'default' },
        },
        dot: {
            control: 'boolean',
            defaultValue: false,
        },
        showZero: {
            control: 'boolean',
            defaultValue: false,
        },
        size: {
            control: 'radio',
            options: ['default', 'small'],
            defaultValue: 'default',
            if: { arg: 'dot', truthy: false },
        },
        status: {
            control: 'radio',
            options: ['success', 'processing', 'default', 'error', 'warning'],
            defaultValue: 'default',
        },
        text: {
            if: { arg: 'status', neq: 'default' },
            control: 'text',
            defaultValue: 'Text behind a dot',
        },
        overflowCount: {
            control: 'number',
            defaultValue: 10,
        },
    },
} as ComponentMeta<typeof Badge>;

export const BadgeBasic = (props: BadgeProps) => {
    return <Badge {...props} />;
};

export const BadgeWithChild = (props: BadgeProps) => {
    return (
        <Badge {...props} text="">
            <Avatar shape="square" size="large" icon={<UserOutlined />} />
        </Badge>
    );
};

BadgeWithChild.argTypes = {
    text: {
        control: false,
    },
};

export const BadgeRibbon = (props: BadgeProps) => {
    return (
        <Badge.Ribbon {...props} text="Hippies">
            <Card title="Pushes open the window" size="small">
                and raises the spyglass.
            </Card>
        </Badge.Ribbon>
    );
};

Badge.Ribbon.displayName = 'Badge.Ribbon';
Card.displayName = 'Card';

BadgeRibbon.argTypes = {
    placement: {
        options: ['start', 'end'],
        defaultValue: 'end',
        control: 'radio',
    },
    color: {
        control: 'text',
        defaultValue: theme.token?.colorPrimary,
        if: { arg: 'status', eq: 'default' },
    },
    count: {
        control: false,
    },
    dot: {
        control: false,
    },
    showZero: {
        control: false,
    },
    size: {
        control: false,
    },
    status: {
        control: false,
    },
    overflowCount: {
        control: false,
    },
};
