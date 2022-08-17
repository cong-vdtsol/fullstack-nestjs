import { Button, Form, Input } from "antd";
import React from "react";
import { useResetMutation } from "src/services/rest/auth/auth.query";
import Cookies from "js-cookie";

const ResetPassword = () => {
  const { mutate: doReset } = useResetMutation();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);

    const { email } = values;
    doReset(
      { email },
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
          <h1>Reset Password</h1>
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
          <Form.Item>
          <Button type="primary" htmlType="submit">Reset</Button>
          </Form.Item>
        </Form>
       
      </div>
    </div>
  );
};

export default ResetPassword;
