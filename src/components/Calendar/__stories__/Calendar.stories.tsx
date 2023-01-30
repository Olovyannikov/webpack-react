import { Badge, BadgeProps, Calendar, CalendarProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import type { Dayjs } from 'dayjs';
import React from 'react';
import { useToken } from 'antd/es/theme/internal';
import { ThemeConfig } from 'antd/es/config-provider/context';
import { theme } from '../../../../theme.config';

export default {
    title: 'UI-Kit / Data Display / Calendar',
    component: Calendar,
} as ComponentMeta<typeof Calendar>;

export const CalendarBasic = (props: CalendarProps<any>) => {
    return (
        <div style={{ padding: 20, background: 'white' }}>
            <Calendar {...props} />
        </div>
    );
};

export const CalendarWithNotice = (props: CalendarProps<any>) => {
    const getListData = (value: Dayjs) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    };

    const getMonthData = (value: Dayjs) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul style={{ padding: 0, margin: 0 }}>
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div style={{ background: 'white', padding: 20 }}>
            <Calendar {...props} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
    );
};

export const CalendarCard = (props: CalendarProps<any>) => {
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${theme?.token?.colorBorderSecondary}`,
        borderRadius: theme?.token?.borderRadiusLG,
    };

    return (
        <div style={wrapperStyle}>
            <Calendar {...props} fullscreen={false} />
        </div>
    );
};
