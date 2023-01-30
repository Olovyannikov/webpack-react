import { Collapse, CollapseProps } from 'antd';
import { ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-Kit / Data Display / Collapse',
    component: Collapse,
    argTypes: {
        accordion: {
            control: 'boolean',
            defaultValue: false,
        },
        bordered: {
            control: 'boolean',
            defaultValue: true,
        },
        collapsible: {
            control: 'radio',
            options: ['header', 'icon', 'disabled'],
            defaultValue: 'header',
        },
    },
} as ComponentMeta<typeof Collapse>;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export const CollapseBasic = (props: CollapseProps) => {
    return (
        <Collapse {...props}>
            <Collapse.Panel header="This is panel header 1" key="1">
                <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
                <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
                <p>{text}</p>
            </Collapse.Panel>
        </Collapse>
    );
};

Collapse.Panel.displayName = 'Collapse.Panel';

export const CollapseAccordion = (props: CollapseProps) => {
    return (
        <Collapse {...props}>
            <Collapse.Panel header="This is panel header 1" key="1">
                <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
                <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
                <p>{text}</p>
            </Collapse.Panel>
        </Collapse>
    );
};

CollapseAccordion.args = {
    accordion: true,
};

export const CollapseNested = (props: CollapseProps) => {
    return (
        <Collapse {...props}>
            <Collapse.Panel header="This is panel header 1" key="1">
                <Collapse defaultActiveKey="1">
                    <Collapse.Panel header="This is panel nest panel" key="1">
                        <p>{text}</p>
                    </Collapse.Panel>
                </Collapse>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
                <p>{text}</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
                <p>{text}</p>
            </Collapse.Panel>
        </Collapse>
    );
};
