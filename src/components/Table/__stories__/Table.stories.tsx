import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Space, Table, TableProps, Tag } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import { TablePaginationConfig } from 'antd/lib';
import qs from 'qs';

export default {
    title: 'UI-Kit / Data Display / Table',
    component: Table,
    argTypes: {
        loading: {
            control: 'boolean',
            defaultValue: false,
        },
        size: {
            control: 'inline-radio',
            options: ['large', 'middle', 'small'],
            defaultValue: 'middle',
        },
    },
} as ComponentMeta<typeof Table>;

interface DataType {
    name: string;
    gender: string;
    email: string;

    key: string | number;
    age: number;
    address: string;
    tags: string[];
}

interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue | null>;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
        ],
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

const getRandomuserParams = (params: TableParams) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

export const TableBasic = (props: TableProps<any>) => {
    const [data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    const fetchData = () => {
        setLoading(true);
        fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
            .then((res) => res.json())
            .then(({ results }) => {
                setData(results);
                setLoading(false);
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: 200,
                        // 200 is mock data, you should read it from server
                        // total: data.totalCount,
                    },
                });
            });
    };

    useEffect(() => {
        fetchData();
    }, [JSON.stringify(tableParams)]);

    const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, FilterValue | null>,
        sorter: SorterResult<DataType> | SorterResult<DataType>[]
    ) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };

    return (
        <Table
            {...props}
            columns={columns}
            rowKey={(record) => record.login.uuid}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
};
