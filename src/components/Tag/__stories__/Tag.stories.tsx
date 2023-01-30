import { Tag, TagProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Data Display / Tag',
    component: Tag,
    argTypes: {
        closable: {
            control: 'boolean',
            defaultValue: false,
        },
        color: {
            control: 'radio',
            options: ['success', 'warning', 'processing', 'error', 'default'],
            defaultValue: 'default',
        },
    },
} as ComponentMeta<typeof Tag>;

export const TagBasic = (props: TagProps) => {
    return <Tag {...props}>Tag 1</Tag>;
};
