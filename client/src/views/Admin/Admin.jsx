import React from "react";
import fetch from 'node-fetch';
import { Form, Input, Button, Result } from 'antd';


export default function Stjorn() {
  const onFinish = async (values) => {
    const response = await fetch('/api/admin', {
      method: 'post',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response) {
      <Result
        status="error"
        title="Login Failed"
      ></Result>
    } else {
      <Result
        status="success"
        title="Successfully logged in"
      ></Result>
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};