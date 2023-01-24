import { Pagination, PaginationProps } from 'antd';

export default {
    title: 'UI-Kit / Navigation / Pagination',
    component: Pagination,
    argTypes: {
        defaultCurrent: {
            control: 'number',
            defaultValue: 1,
            description: 'Default initial page number',
        },
        showSizeChanger: {
            control: 'boolean',
            defaultValue: false,
        },
        pageSize: {
            control: 'number',
            defaultValue: 5,
            if: { arg: 'showSizeChanger', truthy: false },
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
        hideOnSinglePage: {
            control: 'boolean',
            defaultValue: false,
        },
        showQuickJumper: {
            control: 'boolean',
            defaultValue: false,
        },
    },
};

export const PaginationBasic = (props: PaginationProps) => {
    return <Pagination {...props} total={50} />;
};
export const PaginationMore = (props: PaginationProps) => {
    return <Pagination {...props} defaultCurrent={6} total={500} />;
};
export const PaginationTotal = (props: PaginationProps) => {
    return (
        <>
            <Pagination {...props} total={85} showTotal={(total) => `Total ${total} items`} />
            <br />
            <Pagination {...props} total={85} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} />
        </>
    );
};

PaginationTotal.args = {
    showSizeChanger: true,
};

export const PaginationQuickJumper = (props: PaginationProps) => {
    return <Pagination {...props} defaultCurrent={6} total={500} />;
};

PaginationQuickJumper.args = {
    showQuickJumper: true,
};

export const PaginationCustomNavigation = (props: PaginationProps) => {
    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };

    return <Pagination {...props} total={500} itemRender={itemRender} />;
};
