import React from 'react';
import { Avatar, AvatarProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default {
    title: 'UI-Kit / Data Display / Avatar',
    component: Avatar,
    argTypes: {
        shape: {
            control: 'radio',
            options: ['square', 'circle'],
            defaultValue: 'circle',
        },
        gap: {
            control: 'number',
            defaultValue: 4,
        },
        size: {
            control: 'radio',
            options: ['large', 'small', 'default'],
            defaultValue: 'default',
        },
    },
};

export const AvatarBasic = (props: AvatarProps) => {
    return <Avatar {...props} icon={<UserOutlined />} />;
};
