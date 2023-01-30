import { Empty, EmptyProps } from 'antd';

export default {
    title: 'UI-Kit / Data Display / Empty',
    component: Empty,
    argTypes: {
        description: {
            control: 'text',
            defaultValue: 'No Data. You Can Provide any content here',
        },
    },
};

export const EmptyBasic = (props: EmptyProps) => {
    return <Empty {...props} />;
};

export const EmptyCustomImage = (props: EmptyProps) => {
    return <Empty {...props} image={Empty.PRESENTED_IMAGE_SIMPLE} />;
};
