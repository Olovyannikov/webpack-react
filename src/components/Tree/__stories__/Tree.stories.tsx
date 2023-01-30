import { Tree, TreeProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { DataNode } from 'antd/es/tree';

export default {
    title: 'UI-Kit / Data Display / Tree',
    component: Tree,
    argTypes: {
        checkable: {
            control: 'boolean',
            defaultValue: false,
        },
        autoExpandParent: {
            control: 'boolean',
            defaultValue: false,
        },
        blockNode: {
            control: 'boolean',
            defaultValue: false,
        },
        checkStrictly: {
            control: 'boolean',
            defaultValue: false,
        },
        defaultExpandAll: {
            control: 'boolean',
            defaultValue: false,
        },
        defaultExpandParent: {
            control: 'boolean',
            defaultValue: true,
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
        draggable: {
            control: 'boolean',
            defaultValue: false,
        },
        multiple: {
            control: 'boolean',
            defaultValue: false,
        },
        showIcon: {
            control: 'boolean',
            defaultValue: false,
        },
        showLine: {
            control: 'boolean',
            defaultValue: false,
        },
        virtual: {
            control: 'boolean',
            defaultValue: true,
        },
    },
} as ComponentMeta<typeof Tree>;

const treeData: DataNode[] = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: <span style={{ color: '#1890ff' }}>Any Content</span>, key: '0-0-1-0' }],
            },
        ],
    },
];

export const TreeBasic = (props: TreeProps) => {
    return (
        <Tree
            {...props}
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            treeData={treeData}
        />
    );
};

TreeBasic.args = {
    checkable: true,
};
