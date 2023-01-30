import { Button, message, Popconfirm, PopconfirmProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Feedback / Popconfirm',
    component: Popconfirm,
    argTypes: {
        title: {
            control: 'text',
            defaultValue: 'Delete the task',
        },
        description: {
            control: 'text',
            defaultValue: 'Are you sure to delete this task?',
        },
        okText: {
            control: 'text',
            defaultValue: 'YES',
        },
        cancelText: {
            control: 'text',
            defaultValue: 'NO',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
        showCancel: {
            control: 'boolean',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Popconfirm>;

export const PopconfirmBasic = (props: PopconfirmProps) => {
    const [messageApi, contextHolder] = message.useMessage();
    const confirm = () => messageApi.success('Click on Yes');

    const cancel = () => messageApi.error('Click on No');

    return (
        <>
            {contextHolder}
            <Popconfirm {...props} onConfirm={confirm} onCancel={cancel}>
                <Button type="link">Delete</Button>
            </Popconfirm>
        </>
    );
};
