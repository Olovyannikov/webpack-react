import React, { useState } from 'react';
import { Button, Divider, Dropdown, DropdownProps, MenuProps, message, Space, Typography } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { theme } from '../../../theme.config';
import { DropdownButtonProps } from 'antd/es/dropdown';

export default {
    title: 'UI-Kit / Navigation / Dropdown',
    component: Dropdown,
    argTypes: {
        arrow: {
            control: 'boolean' || '{pointAtCenter: boolean}',
            defaultValue: false,
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
        placement: {
            control: 'radio',
            options: ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'],
        },
        trigger: {
            control: 'radio',
            options: ['click', 'hover'],
            defaultValue: 'hover',
        },
    },
} as ComponentMeta<typeof Dropdown>;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

export const DropdownBasic = (props: DropdownProps) => {
    return (
        <Dropdown menu={{ items }} {...props}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Hover me
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export const DropdownSelectable = (props: DropdownProps) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Item 1',
        },
        {
            key: '2',
            label: 'Item 2',
        },
        {
            key: '3',
            label: 'Item 3',
        },
    ];

    return (
        <Dropdown
            {...props}
            menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ['3'],
            }}
        >
            <Typography.Link>
                <Space>
                    Selectable
                    <DownOutlined />
                </Space>
            </Typography.Link>
        </Dropdown>
    );
};

export const DropdownCascadingMenu = (props: DropdownProps) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            type: 'group',
            label: 'Group title',
            children: [
                {
                    key: '1-1',
                    label: '1st menu item',
                },
                {
                    key: '1-2',
                    label: '2nd menu item',
                },
            ],
        },
        {
            key: '2',
            label: 'sub menu',
            children: [
                {
                    key: '2-1',
                    label: '3rd menu item',
                },
                {
                    key: '2-2',
                    label: '4th menu item',
                },
            ],
        },
        {
            key: '3',
            label: 'disabled sub menu',
            disabled: true,
            children: [
                {
                    key: '3-1',
                    label: '5d menu item',
                },
                {
                    key: '3-2',
                    label: '6th menu item',
                },
            ],
        },
    ];

    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Cascading menu
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export const DropdownButton = (props: DropdownButtonProps) => {
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const items: MenuProps['items'] = [
        {
            label: 'Submit and continue',
            key: '1',
        },
    ];

    const enterLoading = (index: number) => {
        setLoadings((state) => {
            const newLoadings = [...state];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((state) => {
                const newLoadings = [...state];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };
    return (
        <Dropdown.Button {...props} loading menu={{ items }}>
            Submit
        </Dropdown.Button>
    );
};

Dropdown.Button.displayName = 'Dropdown.Button';

DropdownButton.argTypes = {
    type: {
        control: 'radio',
        options: ['default', 'primary', 'text', 'link', 'dashed', 'ghost'],
    },
    danger: {
        control: 'boolean',
    },
};

DropdownButton.args = {
    type: 'primary',
    shape: 'default',
    size: 'default',
};
