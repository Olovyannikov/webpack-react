import { Segmented, SegmentedProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Data Display / Segmented',
    component: Segmented,
    argTypes: {
        size: {
            control: 'radio',
            options: ['large', 'middle', 'small'],
            defaultValue: 'middle',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Segmented>;

export const SegmentedBasic = (props: SegmentedProps) => (
    // @ts-ignore
    <Segmented {...props} options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
);
