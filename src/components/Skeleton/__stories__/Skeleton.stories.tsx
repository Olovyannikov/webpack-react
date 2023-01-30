import { Skeleton, SkeletonProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Feedback / Skeleton',
    component: Skeleton,
    argTypes: {
        active: {
            control: 'boolean',
            defaultValue: false,
        },
        avatar: {
            control: 'boolean',
            defaultValue: false,
        },
        loading: {
            control: 'boolean',
            defaultValue: true,
        },
        paragraph: {
            control: 'boolean',
            defaultValue: true,
        },
        round: {
            control: 'boolean',
            defaultValue: false,
        },
        title: {
            control: 'boolean',
            defaultValue: true,
        },
    },
} as ComponentMeta<typeof Skeleton>;

export const SkeletonBasic = (props: SkeletonProps) => {
    return (
        <div>
            <Skeleton {...props} />
        </div>
    );
};
