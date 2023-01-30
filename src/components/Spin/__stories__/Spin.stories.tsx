import {Spin, SpinProps} from "antd";
import {ComponentMeta} from "@storybook/react";

export default {
    title: 'UI-Kit / Feedback / Spin',
    component: Spin,
    argTypes: {
        delay: {
            control: 'number',
            defaultValue: 0
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'default', 'large'],
            defaultValue: 'default'
        },
        spinning: {
            control: 'boolean',
            defaultValue: true
        },
        tip: {
            control: 'text',
            defaultValue: 'loading...'
        }
    }
} as ComponentMeta<typeof Spin>;

export const SpinBasic = (props: SpinProps) => {
    return <Spin {...props}/>
}