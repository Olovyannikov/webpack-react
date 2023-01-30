import { Cascader, CascaderProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

export default {
    title: 'UI-Kit / Data Entry / Cascader',
    component: Cascader,
    argTypes: {
        multiple: {
            control: 'boolean',
            defaultValue: false,
        },
        placement: {
            control: 'radio',
            options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
        },
        changeOnSelect: {
            control: 'boolean',
            defaultValue: false,
        },
        expandTrigger: {
            control: 'radio',
            options: ['hover', 'click'],
            defaultValue: 'click',
        },
    },
};

interface Option {
    value: string | number;
    label: string;
    children?: Option[];
}

const options: Option[] = [
    {
        value: 'russia',
        label: 'Russia',
        children: [
            {
                value: 'moscow-district',
                label: 'Moscow District',
                children: [
                    {
                        value: 'Moscow City',
                        label: 'Moscow City',
                    },
                ],
            },
        ],
    },
    {
        value: 'australia',
        label: 'Australia',
        children: [
            {
                value: 'victoria',
                label: 'Victoria State',
                children: [
                    {
                        value: 'melbourne',
                        label: 'Melbourne',
                    },
                ],
            },
            {
                value: 'ast',
                label: 'AST',
                children: [
                    {
                        value: 'canberra',
                        label: 'Canberra',
                    },
                    {
                        value: 'queanbeyan',
                        label: 'Queanbeyan',
                    },
                ],
            },
        ],
    },
];

const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some((option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

export const CascaderBasic = (props: CascaderProps<Option>) => {
    return <Cascader {...props} options={options} placeholder="Please select" />;
};

export const CascaderMultiple = (props: CascaderProps<Option>) => {
    return <Cascader {...props} style={{ width: '100%' }} options={options} maxTagCount="responsive" />;
};

CascaderMultiple.argTypes = {
    showCheckedStrategy: {
        control: 'radio',
        defaultValue: false,
        options: [false, Cascader.SHOW_CHILD, Cascader.SHOW_PARENT],
    },
};

CascaderMultiple.args = {
    multiple: true,
};

export const CascaderWithSearch = (props: CascaderProps<Option>) => {
    return (
        <Cascader
            {...props}
            options={options}
            placeholder="Please select"
            showSearch={{ filter }}
            onSearch={(value) => console.log(value)}
        />
    );
};
