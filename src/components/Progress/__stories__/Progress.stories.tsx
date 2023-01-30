import { Progress, ProgressProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Feedback / Progress',
    component: Progress,
    argTypes: {
        percent: {
            control: 'number',
            defaultValue: 30,
        },
        showInfo: {
            control: 'boolean',
            defaultValue: true,
        },
        status: {
            control: 'inline-radio',
            options: ['success', 'exception', 'normal', 'active'],
            defaultValue: 'normal',
        },
        strokeLinecap: {
            control: 'inline-radio',
            options: ['round', 'butt', 'square'],
            defaultValue: 'round',
        },
        type: {
            control: 'inline-radio',
            options: ['line', 'circle', 'dashboard'],
            defaultValue: 'line',
        },
        size: {
            control: 'inline-radio',
            options: ['default', 'small'],
            defaultValue: 'default',
        },
        successPercent: {
            control: 'number',
            defaultValue: 0,
        },
    },
} as ComponentMeta<typeof Progress>;

export const ProgressBasic = (props: ProgressProps) => <Progress {...props} />;
