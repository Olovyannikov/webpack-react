import Text, { TextProps } from 'antd/lib/typography/Text';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / General / Typography / Text',
    component: Text,
    argTypes: {
        type: {
            options: ['secondary', 'success', 'warning', 'danger'],
            control: 'radio',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
        mark: {
            control: 'boolean',
            defaultValue: false,
        },
        code: {
            control: 'boolean',
            defaultValue: false,
        },
        keyboard: {
            control: 'boolean',
            defaultValue: false,
        },
        underline: {
            control: 'boolean',
            defaultValue: false,
        },
        delete: {
            control: 'boolean',
            defaultValue: false,
        },
        strong: {
            control: 'boolean',
            defaultValue: false,
        },
        italic: {
            control: 'boolean',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Text>;

export const TextDefault = (props: TextProps) => {
    return <Text {...props}>Text Default</Text>;
};

export const TextSecondary = (props: TextProps) => {
    return <Text {...props}>Text Secondary</Text>;
};
TextSecondary.args = {
    type: 'secondary',
};
export const TextSuccess = (props: TextProps) => {
    return <Text {...props}>Text Success</Text>;
};
TextSuccess.args = {
    type: 'success',
};
export const TextWarning = (props: TextProps) => {
    return <Text {...props}>Text Warning</Text>;
};
TextWarning.args = {
    type: 'warning',
};
export const TextDanger = (props: TextProps) => {
    return <Text {...props}>Text Danger</Text>;
};
TextDanger.args = {
    type: 'danger',
};

export const TextMark = (props: TextProps) => {
    return <Text {...props}>Text Mark</Text>;
};
TextMark.args = {
    mark: true,
};

export const TextCode = (props: TextProps) => {
    return <Text {...props}>Text Code</Text>;
};
TextCode.args = {
    code: true,
};
export const TextDisabled = (props: TextProps) => {
    return <Text {...props}>Text Disabled</Text>;
};
TextDisabled.args = {
    disabled: true,
};
export const TextKeyboard = (props: TextProps) => {
    return <Text {...props}>Text Keyboard</Text>;
};
TextKeyboard.args = {
    keyboard: true,
};
export const TextUnderline = (props: TextProps) => {
    return <Text {...props}>Text Underline</Text>;
};
TextUnderline.args = {
    underline: true,
};
export const TextDelete = (props: TextProps) => {
    return <Text {...props}>Text Delete</Text>;
};
TextDelete.args = {
    delete: true,
};
export const TextStrong = (props: TextProps) => {
    return <Text {...props}>Text Strong</Text>;
};
TextStrong.args = {
    strong: true,
};

export const TextItalic = (props: TextProps) => {
    return <Text {...props}>Text Italic</Text>;
};
TextItalic.args = {
    italic: true,
};
Text.displayName = 'Text';
