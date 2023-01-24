import { Avatar, List, Popover, Steps, StepsProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { LoadingOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export default {
    title: 'UI-Kit / Navigation / Steps',
    component: Steps,
    argTypes: {
        size: {
            control: 'select',
            options: ['small'],
        },
        direction: {
            control: 'radio',
            options: ['vertical', 'horizontal'],
            defaultValue: 'horizontal',
        },
        current: {
            control: 'number',
            defaultValue: 1,
        },
        labelPlacement: {
            control: 'radio',
            options: ['vertical', 'horizontal'],
            defaultValue: 'horizontal',
        },
        showProgress: {
            control: 'boolean',
            defaultValue: false,
        },
        percent: {
            control: 'number',
            defaultValue: 60,
            if: { arg: 'showProgress' },
        },
        status: {
            control: 'radio',
            options: ['wait', 'process', 'finish', 'error'],
        },
    },
} as ComponentMeta<typeof Steps>;

const icons = [<UserOutlined />, <SolutionOutlined />, <LoadingOutlined />];

const description = 'This is a description.';
const items = [
    {
        title: 'Finished',
        description,
    },
    {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
    },
    {
        title: 'Waiting',
        description,
    },
];

const items_2 = items.map((item, idx) => ({ ...item, icon: icons[idx] }));

const items_3 = [
    {
        title: 'Ant Design Title 1',
        current: 0,
    },
    {
        title: 'Ant Design Title 2',
        current: 1,
        status: 'error',
    },
    {
        title: 'Ant Design Title 3',
        current: 2,
    },
    {
        title: 'Ant Design Title 4',
        current: 1,
    },
];
export const StepsDefault = (props: StepsProps) => {
    return <Steps current={1} items={items} {...props} />;
};

export const StepsWithIcon = (props: StepsProps) => {
    return <Steps current={1} items={items_2} {...props} />;
};

export const StepsVertical = (props: StepsProps) => {
    return <Steps current={2} items={items} direction="vertical" {...props} />;
};

export const StepsInline = (props: StepsProps) => {
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={items_3}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <Steps
                            style={{ marginTop: 8 }}
                            type="inline"
                            current={item.current}
                            status={item.status as StepsProps['status']}
                            items={items}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export const StepsProgress = (props: StepsProps) => {
    return (
        <Steps
            current={1}
            items={[
                {
                    title: 'Finished',
                    description,
                },
                {
                    title: 'In Progress',
                    subTitle: 'Left 00:00:08',
                    description,
                },
                {
                    title: 'Waiting',
                    description,
                },
            ]}
            {...props}
        />
    );
};

StepsProgress.args = {
    showProgress: true,
    percent: 60,
};

const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);
export const StepsCustomDots = (props: StepsProps) => {
    const description = 'You can hover on the dot.';
    return (
        <Steps
            current={1}
            progressDot={customDot}
            items={[
                {
                    title: 'Finished',
                    description,
                },
                {
                    title: 'In Progress',
                    description,
                },
                {
                    title: 'Waiting',
                    description,
                },
                {
                    title: 'Waiting',
                    description,
                },
            ]}
            {...props}
        />
    );
};

StepsCustomDots.parameters = { controls: { exclude: ['showProgress'] } };

export const StepsStatus = (props: StepsProps) => {
    return (
        <Steps
            {...props}
            current={1}
            items={[
                {
                    title: 'Finished',
                    description,
                },
                {
                    title: 'In Process',
                    description,
                },
                {
                    title: 'Waiting',
                    description,
                },
            ]}
        />
    );
};

StepsStatus.args = {
    status: 'error',
};

export const StepsWithOnChange = (props: StepsProps) => {
    const [current, setCurrent] = useState(0);

    const onChange = (value: number) => {
        setCurrent(value);
    };
    const description = 'This is a description.';

    return (
        <Steps
            {...props}
            current={current}
            onChange={onChange}
            items={[
                {
                    title: 'Step 1',
                    description,
                },
                {
                    title: 'Step 2',
                    description,
                },
                {
                    title: 'Step 3',
                    description,
                },
            ]}
        />
    );
};
