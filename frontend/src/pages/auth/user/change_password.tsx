import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useChangePassMutation } from "src/services/rest/auth/auth.query";
import Cookies from "js-cookie";

const ChangePassword = () => {
  const { mutate: doChangePass } = useChangePassMutation();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);

    const { password } = values;
    doChangePass(
      { password },
      {
        onSuccess: (dt) => {
          
        },
      }
    );
  };

  return (
    <div className="bg-backgroundAuth">
      <div className="w-80 mx-auto py-60">
        <div className="flex">
            <h1>Change Password</h1>
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

export default ChangePassword;
