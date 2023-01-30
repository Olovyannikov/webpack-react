import { AutoComplete, AutoCompleteProps, Input, SelectProps } from 'antd';
import { ComponentMeta } from '@storybook/react';
import { DefaultOptionType } from 'antd/es/select';
import { useState } from 'react';

export default {
    title: 'UI-Kit / Data Entry / AutoComplete',
    component: AutoComplete,
    argTypes: {
        status: {
            control: 'radio',
            options: ['error', 'warning'],
        },
    },
} as ComponentMeta<typeof AutoComplete>;

const options = [
    { label: 'Burns Bay Road', value: 'Burns Bay Road' },
    { label: 'Downing Street', value: 'Downing Street' },
    { label: 'Wall Street', value: 'Wall Street' },
];

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

const filterOption = (inputValue: string, option: DefaultOptionType | undefined) =>
    option?.value?.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;

const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
    label: str.repeat(repeat),
});

export const AutoCompleteBasic = (props: AutoCompleteProps) => {
    return (
        <AutoComplete
            {...props}
            style={{ width: 200 }}
            options={options}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) => filterOption(inputValue, option)}
        />
    );
};

export const AutoCompleteAsSearch = (props: AutoCompleteProps) => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    return (
        <AutoComplete
            {...props}
            dropdownMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
        >
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    );
};

AutoCompleteAsSearch.argTypes = { status: { control: false } };

export const AutoCompleteStatus = (props: AutoCompleteProps) => {
    const [options, setOptions] = useState<DefaultOptionType[]>([]);

    const onSearch = (searchText: string) => {
        setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
    };
    return <AutoComplete {...props} options={options} onSearch={onSearch} style={{ width: 200 }} />;
};

AutoCompleteStatus.args = {
    status: 'error',
};
