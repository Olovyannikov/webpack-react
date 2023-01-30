import { Button, Result, ResultProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
    title: 'UI-Kit / Feedback / Result',
    component: Result,
    argTypes: {
        status: {
            control: 'radio',
            options: ['success', 'error', 'info', 'warning', '404', '403', '500'],
            defaultValue: 'info',
        },
        title: {
            control: 'text',
            defaultValue: 'This is a TITLE',
        },
        subTitle: {
            control: 'text',
            defaultValue: 'This is a SUB_TITLE',
        },
    },
} as ComponentMeta<typeof Result>;

export const ResultBasic = (props: ResultProps) => {
    return (
        <Result
            {...props}
            extra={[
                <Button type="primary" key="console">
                    I'm button
                </Button>,
                <Button key="buy">Me too</Button>,
            ]}
        />
    );
};
