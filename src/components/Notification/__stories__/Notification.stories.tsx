import { Button, notification, Radio, Row, Space } from 'antd';
import React, { useState } from 'react';
import { NotificationPlacement } from 'antd/es/notification/interface';

export default {
    title: 'UI-Kit / Feedback / Notification',
};

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const NotificationBasic = () => {
    const [api, contextHolder] = notification.useNotification();
    const [placementType, setPlacementType] = useState<NotificationPlacement>('topRight');

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: placementType,
        });
    };

    return (
        <>
            {contextHolder}
            <Space direction="vertical">
                <Row>
                    <Space>
                        <Radio.Group optionType="button" value={placementType} onChange={(e) => setPlacementType(e.target.value)}>
                            <Radio value="top">Top</Radio>
                            <Radio value="topLeft">Top Left</Radio>
                            <Radio value="topRight">Top Right</Radio>
                            <Radio value="bottom">Bottom</Radio>
                            <Radio value="bottomLeft">Bottom Left</Radio>
                            <Radio value="bottomRight">Bottom Right</Radio>
                        </Radio.Group>
                    </Space>
                </Row>
                <Row>
                    <Space>
                        <Button type="primary" onClick={() => openNotificationWithIcon('success')}>
                            Success
                        </Button>
                        <Button type="default" onClick={() => openNotificationWithIcon('info')}>
                            Info
                        </Button>
                        <Button type="primary" ghost onClick={() => openNotificationWithIcon('warning')}>
                            Warning
                        </Button>
                        <Button type="primary" danger onClick={() => openNotificationWithIcon('error')}>
                            Error
                        </Button>
                    </Space>
                </Row>
            </Space>
        </>
    );
};
