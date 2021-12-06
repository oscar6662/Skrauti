import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Result } from 'antd';
import Greinar from "../Greinar/Greinar";
import s from './Admin.module.scss';

export default function Stjorn() {
  const [login, setLogin] = useState(false);
  const [state, setstate] = useState(false);

  const onFinish = async (values) => {
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios({
      method: 'post',
      url: '/api/admin',
      data: {
        username: values.username,
        password: values.password
      },
      config
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        setLogin(true);
      }
    }).catch((e) => {
      console.log(e);
    });
  }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  console.log(login);
  return (
    !login ? (
      <div className={s.container}>
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
          className={s.form}
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
        {
          state && (
            <Result
              status="error"
              title="Login Failed"
            />
          )
        }
      </div>
    ) : (
      <Greinar></Greinar>
    )
  )
};