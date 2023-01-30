import { Avatar, List, ListProps, Typography } from 'antd';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
    title: 'UI-Kit / Data Display / List',
    component: List,
    argTypes: {
        bordered: {
            control: 'boolean',
            defaultValue: false,
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'default', 'large'],
            defaultValue: 'default',
        },
    },
} as ComponentMeta<typeof List>;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const data2 = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
export const ListSimple = (props: ListProps<string>) => {
    return (
        <List
            {...props}
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
        />
    );
};

ListSimple.args = {
    bordered: true,
};

export const ListBasic = (props: ListProps<{ title: string }>) => {
    return (
        <List
            {...props}
            itemLayout="horizontal"
            dataSource={data2}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    );
};
