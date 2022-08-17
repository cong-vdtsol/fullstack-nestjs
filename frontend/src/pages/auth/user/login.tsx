import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useLoginMutation } from "src/services/rest/auth/auth.query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
const Login = () => {
  const { mutate: doLogin } = useLoginMutation();
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);

    const { email, password } = values;
    doLogin(
      { email, password },
      {
        onSuccess: (dt) => {
          Cookies.set("token", dt.accessToken);
          Cookies.set("refreshToken", dt.refreshToken);
        },
      }
    );
  };

  return (
    <div className="bg-backgroundAuth">
      <div className="w-80 mx-auto py-60">
        <div className="flex">
            <h1>Login</h1>
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
              required: true,
              message: "Please input your Username!",
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
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a onClick={() => router.push("../User/ResetPassword")} className="login-form-forgot float-right" >
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <Link href='/auth/user/register'>
            <a className="float-right">register now!</a>
          </Link>
        </Form.Item>
      </Form>
      </div>
      
    </div>
  );
};

export default Login;
