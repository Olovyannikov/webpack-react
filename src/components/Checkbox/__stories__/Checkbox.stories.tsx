import React, { useState } from 'react';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Checkbox, CheckboxProps, Divider } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

export default {
    title: 'UI-Kit / Data Entry / Checkbox',
    component: Checkbox,
    argTypes: {
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
};

Checkbox.Group.displayName = 'Checkbox.Group';

export const CheckboxBasic = (props: CheckboxProps) => {
    return <Checkbox {...props}>Checkbox</Checkbox>;
};

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
export const CheckboxGroup = (props: CheckboxProps) => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            <Checkbox {...props} indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
            </Checkbox>
            <Divider />
            <Checkbox.Group disabled={props.disabled} options={plainOptions} value={checkedList} onChange={onChange} />
        </>
    );
};
