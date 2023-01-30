import { Button, Modal, ModalProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

export default {
    title: 'UI-Kit / Feedback / Modal',
    component: Modal,
    argTypes: {
        title: {
            control: 'text',
            defaultValue: 'Basic Modal',
        },
        centered: {
            control: 'boolean',
            defaultValue: false,
        },
        closable: {
            control: 'boolean',
            defaultValue: true,
        },
        confirmLoading: {
            control: 'boolean',
            defaultValue: false,
        },
        destroyOnClose: {
            control: 'boolean',
            defaultValue: false,
        },
        focusTriggerAfterClose: {
            control: 'boolean',
            defaultValue: true,
        },
        forceRender: {
            control: 'boolean',
            defaultValue: false,
        },
        keyboard: {
            control: 'boolean',
            defaultValue: true,
        },
        mask: {
            control: 'boolean',
            defaultValue: true,
        },
        okText: {
            control: 'text',
            defaultValue: 'OK',
        },
        okType: {
            control: 'radio',
            defaultValue: 'primary',
            options: ['primary', 'link', 'text', 'default'],
        },
        width: {
            control: 'number',
            defaultValue: 520,
        },
    },
} as ComponentMeta<typeof Modal>;

export const ModalBasic = (props: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal {...props} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
