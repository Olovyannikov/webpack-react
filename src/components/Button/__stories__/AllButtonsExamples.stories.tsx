import { Button, ButtonProps, Space, Tooltip, Typography } from 'antd';
const { Title } = Typography;
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons';

import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

export default {
    title: 'UI-Kit / General / Button / All Buttons Example',
    component: Button,
} as ComponentMeta<typeof Button>;
export const AllButtonsExamples = (props: ButtonProps) => {
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    return (
        <div style={{ background: '#e5e5e5', padding: 20 }}>
            <Space direction="vertical">
                <Title level={2}>Default: </Title>
                <Space wrap>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </Space>
            </Space>
            <br />
            <Space direction="vertical">
                <Title level={2}>Icon: </Title>
                <Space wrap>
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                </Space>
                <Space wrap>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Button icon={<SearchOutlined />} href="https://www.google.com" />
                </Space>
            </Space>
            <br />
            <Space direction="vertical">
                <Title level={2}>Danger: </Title>
                <Space wrap>
                    <Button type="primary" danger>
                        Primary
                    </Button>
                    <Button danger>Default</Button>
                    <Button type="dashed" danger>
                        Dashed
                    </Button>
                    <Button type="text" danger>
                        Text
                    </Button>
                    <Button type="link" danger>
                        Link
                    </Button>
                </Space>
            </Space>
            <br />
            <Space direction="vertical">
                <Title level={2}>Ghost: </Title>
                <Space className="site-button-ghost-wrapper" wrap>
                    <Button type="primary" ghost>
                        Primary
                    </Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>
                        Dashed
                    </Button>
                    <Button type="primary" danger ghost>
                        Danger
                    </Button>
                </Space>
            </Space>
            <br />
            <Space direction="vertical">
                <Title level={2}>Loading: </Title>
                <Space wrap>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                </Space>

                <Space wrap>
                    <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                        Click me!
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>
                        Click me!
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[2]} onClick={() => enterLoading(2)} />
                </Space>
            </Space>
        </div>
    );
};
