import { Carousel, CarouselProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { CSSProperties } from 'react';

export default {
    title: 'UI-Kit / Data Display / Carousel',
    component: Carousel,
    argTypes: {
        autoplay: {
            control: 'boolean',
            defaultValue: false,
        },
        dotPosition: {
            control: 'inline-radio',
            options: ['top', 'bottom', 'left', 'right'],
            defaultValue: 'bottom',
        },
        dots: {
            control: 'boolean',
            defaultValue: true,
        },
        effect: {
            control: 'inline-radio',
            options: ['scrollx', 'fade'],
            defaultValue: 'scrollx',
        },
    },
} as ComponentMeta<typeof Carousel>;

export const CarouselBasic = (props: CarouselProps) => {
    const contentStyle: CSSProperties = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Carousel {...props}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};
