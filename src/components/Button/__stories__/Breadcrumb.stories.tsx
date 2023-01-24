import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export default {
    title: 'UI-Kit / Navigation / Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        separator: {
            control: 'text',
            defaultValue: '/ ',
        },
    },
} as ComponentMeta<typeof Breadcrumb>;

export const BreadcrumbBasic = (props: BreadcrumbProps) => {
    return (
        <Breadcrumb {...props}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    );
};

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                General
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Layout
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Navigation
            </a>
        ),
    },
];

export const BreadcrumbWithDropdown = (props: BreadcrumbProps) => {
    return (
        <Breadcrumb {...props}>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item menu={{ items }}>
                <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export const BreadcrumbWithIcon = (props: BreadcrumbProps) => {
    return (
        <Breadcrumb {...props}>
            <Breadcrumb.Item href="">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <UserOutlined />
                <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export const BreadcrumbWithCustomSeparator = (props: BreadcrumbProps) => {
    return (
        <Breadcrumb {...props}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    );
};

BreadcrumbWithCustomSeparator.args = {
    separator: '> ',
};

Breadcrumb.Item.displayName = 'Breadcrumb.Item';
