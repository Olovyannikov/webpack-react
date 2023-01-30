import { Button, Drawer, DrawerProps } from 'antd';
import { useState } from 'react';

export default {
    title: 'UI-Kit / Feedback / Drawer',
    component: Drawer,
    argTypes: {
        placement: {
            control: 'radio',
            options: ['right', 'left', 'top', 'bottom'],
            defaultValue: 'right',
        },
        title: {
            control: 'text',
            defaultValue: 'Basic Drawer Title',
        },
        closable: {
            control: 'boolean',
            defaultValue: true,
        },
    },
};

export const DrawerBasic = (props: DrawerProps) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer {...props} onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export const DrawerInsideDrawer = (props: DrawerProps) => {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open drawer
            </Button>
            <Drawer {...props} title="Multi-level drawer" width={520} onClose={onClose} open={open}>
                <Button type="primary" onClick={showChildrenDrawer}>
                    Two-level drawer
                </Button>
                <Drawer {...props} title="Two-level Drawer" width={320} onClose={onChildrenDrawerClose} open={childrenDrawer}>
                    This is two-level drawer
                </Drawer>
            </Drawer>
        </>
    );
};

DrawerInsideDrawer.args = {
    closable: false,
};
