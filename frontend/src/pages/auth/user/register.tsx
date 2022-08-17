
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "src/services/rest/auth/auth.query";
import Cookies from "js-cookie";
const Register = () => {
  const { mutate: doRegister } = useRegisterMutation();

  const onFinish = async (values: any) => {
   
    const { firstname, lastname, email, password} = values;
    doRegister(
      {firstname, lastname, email, password},
      {
        onSuccess: (dt) => {
          console.log(dt);
        },
      }
    );
  };

  return (
    <div className="bg-backgroundAuth">
      <div className="w-80 mx-auto py-60">
        <div className="flex">
          <h1>Register</h1>
        </div>
        <Form
          name="normal_login"
          className="login-form w-80 mx-auto"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: "Please input your first name!" }]}
          >
            <Input
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Please input your last name!" }]}
          >
            <Input
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input  placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password"/>
          </Form.Item>
          <Form.Item
            name="confirm"
            
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
          <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
       
      </div>
    </div>
  );
};

export default Register;
