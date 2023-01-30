import { Tooltip, TooltipProps } from 'antd';

export default {
    title: 'UI-Kit / Data Display / Tooltip',
    component: Tooltip,
    argTypes: {
        placement: {
            control: 'select',
            defaultValue: 'top',
            options: [
                'top',
                'left',
                'right',
                'bottom',
                'topLeft',
                'topRight',
                'bottomLeft',
                'bottomRight',
                'leftTop',
                'leftBottom',
                'rightTop',
                'rightBottom',
            ],
        },
        title: {
            control: 'text',
            defaultValue: 'Tooltip text',
        },
    },
};

export const TooltipBasic = (props: TooltipProps) => {
    return (
        <Tooltip {...props}>
            <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
    );
};
