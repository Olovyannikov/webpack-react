import React from 'react';
import { Button, Upload, UploadProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import {InboxOutlined, UploadOutlined} from '@ant-design/icons';
import {DraggerProps} from "antd/es/upload";
import Dragger from "antd/es/upload/Dragger";

export default {
    title: 'UI-Kit / Data Entry / Upload',
    component: Upload,
} as ComponentMeta<typeof Upload>;

export const UploadBasic = (props: UploadProps) => {
    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
};

export const DraggerBasic = (props: DraggerProps) => {
    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
            </p>
        </Dragger>
    )
}