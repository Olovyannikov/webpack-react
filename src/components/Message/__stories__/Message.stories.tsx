import React, { useState } from 'react';
import { Button, message, Segmented, Space } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';

export default {
    title: 'UI-Kit / Feedback / Message',
};

const info = () => {
    message.info('This is a normal message');
};

export const MessageBasic = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const info = () => messageApi.info('Info, Ant Design!');
    const success = () => messageApi.success('Success, Ant Design!');
    const error = () => messageApi.error('Error, Ant Design!');
    const warning = () => messageApi.warning('Warning, Ant Design!');
    const loading = () => messageApi.loading('Loading, Ant Design!');

    const messageMap = [info, success, error, warning, loading];

    const [messageType, setMessageType] = useState(0);
    const messages = ['info', 'success', 'error', 'warning', 'loading'] as SegmentedValue[];

    return (
        <Space direction="vertical">
            {contextHolder}
            <Segmented options={messages} onChange={(value) => setMessageType(messages.indexOf(value))} />
            <Button type="primary" onClick={messageMap[messageType]}>
                Display normal message
            </Button>
        </Space>
    );
};
