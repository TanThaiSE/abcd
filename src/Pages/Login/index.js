import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.txtUsername === "admin" && values.txtPassword === "123456") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: values.txtUsername,
          password: values.txtPassword,
        })
      );
      navigate("/about");
      notification.open({
        message: "Đăng Nhập Thành công",
        icon: <CheckOutlined style={{ color: "green" }} />,
      });
    } else {
      notification.open({
        message: "Đăng Nhập sai",
        description: "Sai tên đăng nhập hoặc mật khẩu",
        icon: <CloseOutlined style={{ color: "red" }} />,
      });
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
      // neu da login thi Redirect
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="txtUsername"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="txtPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
