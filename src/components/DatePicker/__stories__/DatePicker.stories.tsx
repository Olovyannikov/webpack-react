import { DatePicker, DatePickerProps, TimePicker, TimePickerProps } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import React from 'react';

export default {
    title: 'UI-Kit / Data Entry / DatePicker',
    component: DatePicker,
    argTypes: {
        picker: {
            control: 'radio',
            options: ['date', 'week', 'month', 'quarter', 'year'],
            defaultValue: 'date',
        },
        showTime: {
            control: 'boolean',
            defaultValue: false,
        },
        size: {
            control: 'radio',
            options: ['large', 'middle', 'small'],
            defaultValue: 'middle',
        },
        bordered: {
            control: 'boolean',
            defaultValue: true,
        },
        status: {
            control: 'radio',
            options: ['error', 'warning'],
        },
        placement: {
            control: 'radio',
            options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
        },
    },
};

export const DatePickerBasic = (props: DatePickerProps) => {
    return <DatePicker {...props} />;
};

export const DatePickerWithRange = (props: RangePickerProps) => {
    return <DatePicker.RangePicker {...props} />;
};

export const DatePickerTimeOnly = (props: TimePickerProps) => {
    return <TimePicker {...props} />;
};

DatePickerTimeOnly.argTypes = {
    picker: {
        control: false,
    },
    showTime: {
        control: false,
    },
};

DatePicker.displayName = 'DatePicker';
