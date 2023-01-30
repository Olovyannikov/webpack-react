import { Select, SelectProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import {DefaultOptionType} from "antd/es/select";
import Chevron from '../../../assets/icons/chevron.svg';

export default {
    title: 'UI-Kit / Data Entry / Select',
    component: Select,
    argTypes: {
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
        loading: {
            control: 'boolean',
            defaultValue: false
        },
        allowClear: {
            control: 'boolean',
            defaultValue: false
        },
        placeholder: {
            control: 'text',
            defaultValue: 'Select item'
        },
        size: {
            control: 'radio',
            options: ['large', 'default', 'small'],
            defaultValue: 'default'
        },
        mode: {
            control: 'radio',
            options: ['multiple', 'tags']
        },
        bordered: {
            control: 'boolean',
            defaultValue: true
        },
        suffixIcon: {
            defaultValue: <Chevron style={{color: '#655091'}} />
        }
    },
} as ComponentMeta<typeof Select>;

const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
];

export const SelectBasic = (props: SelectProps) => {
    return <Select {...props} options={options} defaultValue={options[0]} style={{width: 150}} />;
};
export const SelectWithSearch = (props: SelectProps) => {
    const filterOption = (input: string, option?: DefaultOptionType) =>
        (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase());
    return <Select {...props} options={options} placeholder='Search...' style={{width: 150}} showSearch optionFilterProp='children' filterOption={(i,o) => filterOption(i, o)} />;
};
export const SelectWithMultiple = (props: SelectProps) => {
    return (
        <Select
            {...props}
            allowClear
            style={{ width: 300 }}
            placeholder="Please select"
            defaultValue={[options[0], options[2]]}
            options={options}
        />
    )
}

SelectWithMultiple.args = {
    mode: 'multiple'
}

export const SelectWithGroup = (props: SelectProps) => {
    return (
        <Select
            {...props}
            defaultValue="lucy"
            style={{ width: 200 }}
            options={[
                {
                    label: 'Manager',
                    options: [
                        { label: 'Jack', value: 'jack' },
                        { label: 'Lucy', value: 'lucy' },
                    ],
                },
                {
                    label: 'Engineer',
                    options: [{ label: 'yiminghe', value: 'Yiminghe' }],
                },
            ]}
        />
    )
}