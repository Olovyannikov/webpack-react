import { TreeSelect, TreeSelectProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Data Entry / TreeSelect',
    component: TreeSelect,
    argTypes: {
        showSearch: {
            control: 'boolean',
            defaultValue: false,
        },
        placeholder: {
            control: 'text',
            defaultValue: 'Please Select',
        },
        allowClear: {
            control: 'boolean',
            defaultValue: false,
        },
        treeDefaultExpandAll: {
            control: 'boolean',
            defaultValue: false,
        },
        placement: {
            control: 'radio',
            options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
        },
        multiple: {
            control: 'boolean',
            defaultValue: false,
        },
        treeCheckable: {
            control: 'boolean',
            defaultValue: false,
        },
        showCheckedStrategy: {
            control: 'radio',
            options: [TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD, TreeSelect.SHOW_ALL],
            defaultValue: TreeSelect.SHOW_PARENT,
            if: { arg: 'treeCheckable' },
        },
        treeLine: {
            control: 'boolean',
            defaultValue: false
        },
        status: {
            control: 'radio',
            options: ['error', 'warning']
        }
    },
} as ComponentMeta<typeof TreeSelect>;

const treeData = [
    {
        value: 'parent 1',
        title: 'parent 1',
        children: [
            {
                value: 'parent 1-0',
                title: 'parent 1-0',
                children: [
                    {
                        value: 'leaf1',
                        title: 'leaf1',
                    },
                    {
                        value: 'leaf2',
                        title: 'leaf2',
                    },
                ],
            },
            {
                value: 'parent 1-1',
                title: 'parent 1-1',
                children: [
                    {
                        value: 'leaf3',
                        title: <b style={{ color: '#08c' }}>This might be a custom color</b>,
                    },
                ],
            },
        ],
    },
];

export const TreeSelectBasic = (props: TreeSelectProps) => {
    return <TreeSelect {...props} style={{ width: 300 }} treeData={treeData} />;
};
