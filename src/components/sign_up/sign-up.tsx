import React from 'react';
import '@/index.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { authService } from '@/apis/auth/auth.service';
import { type ISignUp } from '@/apis/auth/types/auth.type';

export const SignUp = () => {
    const onFinish = async (values: ISignUp) => {
        const dob = new Date(values.date_of_birth).getTime();
        const payload: ISignUp = {
            username: values.username,
            password: values.password,
            name: values.name,
            date_of_birth: dob,
            avatar: values.avatar,
        };
        const data = await authService.signUp(payload);
        console.log('Received values of form: ', data);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Name"
                />
            </Form.Item>

            <Form.Item
                name="date_of_birth"
                rules={[
                    {
                        required: true,
                        message: 'Please input your date of birth!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="date"
                    placeholder="Date of birth"
                />
            </Form.Item>

            <Form.Item
                name="avatar"
                rules={[
                    {
                        required: true,
                        message: 'Please input your avatar!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Avatar"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                </Button>
                Or <a href="">Sign up now!</a>
            </Form.Item>
        </Form>
    );
};
