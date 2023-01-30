import { Alert, AlertProps, Button } from 'antd';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

export default {
    title: 'UI-Kit / Feedback / Alert',
    component: Alert,
    argTypes: {
        banner: {
            control: 'boolean',
            defaultValue: false,
        },
        closable: {
            control: 'boolean',
            defaultValue: false,
        },
        closeText: {
            control: 'text',
            defaultValue: '',
        },
        message: {
            control: 'text',
            defaultValue: 'message of alert',
        },
        description: {
            control: 'text',
            defaultValue: 'description of alert',
        },
        showIcon: {
            control: 'boolean',
            defaultValue: false,
            if: { arg: 'banner', truthy: true },
        },
        type: {
            control: 'radio',
            options: ['success', 'info', 'warning', 'error'],
            defaultValue: 'info',
        },
    },
} as ComponentMeta<typeof Alert>;

export const AlertBasic = (props: AlertProps) => {
    return <Alert {...props} />;
};

export const ErrorBoundaryBasic = (props: AlertProps) => {
    const ThrowError = () => {
        const [error, setError] = useState<Error>();
        const onClick = () => {
            setError(new Error('An Uncaught Error'));
        };

        if (error) {
            throw error;
        }
        return (
            <Button danger onClick={onClick}>
                Click me to throw a error
            </Button>
        );
    };

    return (
        <Alert.ErrorBoundary {...props}>
            <ThrowError />
        </Alert.ErrorBoundary>
    );
};
