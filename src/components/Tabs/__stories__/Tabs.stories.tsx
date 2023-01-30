import { Tabs, TabsProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Data Display / Tabs',
    component: Tabs,
    argTypes: {
        centered: {
            control: 'boolean',
            defaultValue: false,
        },
        tabPosition: {
            control: 'radio',
            options: ['top', 'right', 'left', 'bottom'],
            defaultValue: 'top',
        },
        size: {
            control: 'inline-radio',
            options: ['large', 'middle', 'small'],
            defaultValue: 'middle',
        },
        type: {
            control: 'radio',
            options: ['line', 'card', 'editable-card'],
            defaultValue: 'line',
        },
    },
} as ComponentMeta<typeof Tabs>;

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`,
        disabled: true,
    },
    {
        key: '3',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`,
    },
];

export const TabsBasic = (props: TabsProps) => {
    return <Tabs {...props} defaultActiveKey="1" items={items} />;
};
