import { Button, Popover, PopoverProps } from 'antd';

export default {
    title: 'UI-Kit / Data Display / Popover',
    component: Popover,
    argTypes: {
        placement: {
            control: 'select',
            options: [
                'topLeft',
                'top',
                'topRight',
                'rightTop',
                'right',
                'rightBottom',
                'bottomRight',
                'bottom',
                'bottomLeft',
                'leftBottom',
                'left',
                'leftTop',
            ],
            defaultValue: 'topLeft',
        },
        trigger: {
            control: 'radio',
            options: ['click', 'hover', 'focus'],
            defaultValue: 'hover',
        },
    },
};

const text = <span>Title</span>;

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const buttonWidth = 70;

export const PopoverBasic = (props: PopoverProps) => {
    return (
        <Popover {...props} title={text} content={content}>
            <Button>Hover Me or Click</Button>
        </Popover>
    );
};
