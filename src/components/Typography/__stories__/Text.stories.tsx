import Text, { TextProps } from 'antd/lib/typography/Text';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / General / Typography / Text',
    component: Text,
    argTypes: {
        type: {
            options: ['secondary', 'success', 'warning', 'danger'],
            control: { type: 'select' },
        },
        disabled: {
            control: 'boolean',
        },
        mark: {
            control: 'boolean',
        },
        code: {
            control: 'boolean',
        },
        keyboard: {
            control: 'boolean',
        },
        underline: {
            control: 'boolean',
        },
        delete: {
            control: 'boolean',
        },
        strong: {
            control: 'boolean',
        },
        italic: {
            control: 'boolean',
        },
    },
} as ComponentMeta<typeof Text>;

export const TextDefault = (props: TextProps) => {
    return <Text {...props}>Text Default</Text>;
};

export const TextSecondary = (props: TextProps) => {
    return (
        <Text type="secondary" {...props}>
            Text Secondary
        </Text>
    );
};
export const TextSuccess = (props: TextProps) => {
    return (
        <Text type="success" {...props}>
            Text Success
        </Text>
    );
};
export const TextWarning = (props: TextProps) => {
    return (
        <Text type="warning" {...props}>
            Text Warning
        </Text>
    );
};
export const TextDanger = (props: TextProps) => {
    return (
        <Text type="danger" {...props}>
            Text Danger
        </Text>
    );
};

export const TextMark = (props: TextProps) => {
    return (
        <Text mark {...props}>
            Text Mark
        </Text>
    );
};

export const TextCode = (props: TextProps) => {
    return (
        <Text code {...props}>
            Text Code
        </Text>
    );
};
export const TextDisabled = (props: TextProps) => {
    return (
        <Text disabled {...props}>
            Text Disabled
        </Text>
    );
};
export const TextKeyboard = (props: TextProps) => {
    return (
        <Text keyboard {...props}>
            Text Keyboard
        </Text>
    );
};
export const TextUnderline = (props: TextProps) => {
    return (
        <Text underline {...props}>
            Text Underline
        </Text>
    );
};
export const TextDelete = (props: TextProps) => {
    return (
        <Text delete {...props}>
            Text Delete
        </Text>
    );
};
export const TextStrong = (props: TextProps) => {
    return (
        <Text strong {...props}>
            Text Strong
        </Text>
    );
};

export const TextItalic = (props: TextProps) => {
    return (
        <Text italic {...props}>
            Text Italic
        </Text>
    );
};

Text.displayName = 'Text';
