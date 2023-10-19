"use client"
import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const onChange = (date, dateString) => {
    console.log(date, dateString);
};
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
export const AddTodo = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className='bg-blue-400 w-full flex flex-col items-center justify-center p-10 rounded-full'>
            <h1 className='flex justify-center text-[40px] mb-5'>Add Todo</h1>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    name="Title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Todo"
                    label="Todo"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Date"
                >
                    <DatePicker onChange={onChange} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        <EditOutlined />
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        <DeleteOutlined />
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
