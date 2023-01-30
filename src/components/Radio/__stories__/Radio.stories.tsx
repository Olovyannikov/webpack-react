import { Radio, RadioGroupProps, RadioProps } from 'antd';

export default {
    title: 'UI-Kit / Data Entry / Radio',
    component: Radio,
    argTypes: {
        optionType: {
            control: 'radio',
            options: ['default', 'button'],
        },
        buttonStyle: {
            control: 'radio',
            options: ['outline', 'solid'],
            if: { arg: 'optionType', eq: 'button' },
        },
        size: {
            control: 'radio',
            options: ['large', 'middle', 'small'],
            defaultValue: 'middle',
            if: { arg: 'optionType', eq: 'button' },
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
};

export const RadioBasic = (props: RadioProps) => {
    return <Radio {...props}>Default</Radio>;
};

RadioBasic.argTypes = {
    optionType: {
        control: false,
    },
    buttonStyle: {
        control: false,
    },
    size: {
        control: false,
    },
};

export const RadioGroup = (props: RadioGroupProps) => {
    return (
        <Radio.Group {...props} defaultValue={1}>
            <Radio value={1}>A</Radio>
            <Radio disabled value={2}>
                B
            </Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </Radio.Group>
    );
};
