import { Avatar, Card, CardProps, Col, Row } from 'antd';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export default {
    title: 'UI-Kit / Data Display / Card',
    component: Card,
    argTypes: {
        activeTabKey: {
            control: 'text',
        },
        bordered: {
            control: 'boolean',
            defaultValue: true,
        },
        hoverable: {
            control: 'boolean',
            defaultValue: false,
        },
        loading: {
            control: 'boolean',
            defaultValue: false,
        },
        size: {
            control: 'inline-radio',
            options: ['default', 'small'],
            defaultValue: 'default',
        },
        title: {
            control: 'text',
            defaultValue: 'Every Node',
        },
        extra: {
            control: 'text',
            defaultValue: 'Every node',
        },
        type: {
            control: 'check',
            options: ['inner'],
        },
    },
} as ComponentMeta<typeof Card>;

export const CardBasic = (props: CardProps) => {
    return (
        <Card {...props} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
};

CardBasic.args = {
    title: 'Default size card',
    extra: <a href="#">More</a>,
};

export const CardCustomContent = (props: CardProps) => {
    return (
        <Card
            {...props}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );
};

CardCustomContent.args = {
    hoverable: true,
    title: '',
    extra: '',
};

Card.Meta.displayName = 'Card.Meta';

export const CardInColumns = (props: CardProps) => {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card {...props}>Card content</Card>
                </Col>
                <Col span={8}>
                    <Card {...props}>Card content</Card>
                </Col>
                <Col span={8}>
                    <Card {...props}>Card content</Card>
                </Col>
            </Row>
        </div>
    );
};

CardInColumns.args = {
    bordered: false,
    title: 'Card Title',
};

export const CardInsideCard = (props: CardProps) => {
    return (
        <Card {...props} title="Card title">
            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                Inner Card content
            </Card>
            <Card style={{ marginTop: 16 }} type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                Inner Card content
            </Card>
        </Card>
    );
};
