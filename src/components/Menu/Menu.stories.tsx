import React from 'react';
import { Menu, MenuProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default {
    title: 'UI-Kit / Navigation / Menu',
    component: Menu,
    argTypes: {
        mode: {
            control: 'radio',
            options: ['vertical', 'horizontal', 'inline'],
        },
    },
} as ComponentMeta<typeof Menu>;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Navigation One', '1', <MailOutlined />),
    getItem('Navigation Two', '2', <CalendarOutlined />),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
        getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem(
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
        </a>,
        'link',
        <LinkOutlined />
    ),
];

export const MenuBasic = (props: MenuProps) => {
    return <Menu {...props} style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items} />;
};

MenuBasic.args = {
    mode: 'vertical',
};

export const MenuInline = (props: MenuProps) => {
    return <Menu {...props} style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items} />;
};

MenuInline.args = {
    mode: 'inline',
};

export const MenuHorizontal = (props: MenuProps) => {
    return <Menu {...props} style={{ width: 512 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items} />;
};

MenuHorizontal.args = {
    mode: 'horizontal',
};
