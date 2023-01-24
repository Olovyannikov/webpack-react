import { Input, InputProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { TextAreaProps } from 'antd/es/input';

export default {
    title: 'UI-Kit / Data Entry / Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: 'text',
            defaultValue: 'This is a Placeholder',
        },
        size: {
            control: 'radio',
            options: ['large', 'default', 'small'],
            defaultValue: 'default',
        },
        prefix: {
            control: 'text',
        },
        suffix: {
            control: 'text',
        },
    },
} as ComponentMeta<typeof Input>;

export const InputBasic = (props: InputProps) => {
    return <Input style={{ width: 200 }} {...props} />;
};

export const InputSearch = (props: InputProps) => {
    return <Input.Search style={{ width: 200 }} {...props} />;
};

export const InputTextArea = (props: TextAreaProps) => {
    return <Input.TextArea {...props} placeholder="Controlled autosize" autoSize={{ minRows: 3, maxRows: 5 }} />;
};

Input.TextArea.displayName = 'Input.TextArea';
