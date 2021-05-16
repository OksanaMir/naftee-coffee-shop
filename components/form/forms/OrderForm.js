import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect } from 'react';

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

export function OrderForm() {
  const [form] = Form.useForm();
  const { SiteClient } = require('datocms-client');
  const client = new SiteClient('dcf7c70ca6f6fb69721273dbc749b3');

  async function createRecord() {
    const record = await client.items.create({
      itemType: '800455', // model ID
      password: form.getFieldsValue().password,
      user_name: form.getFieldsValue().user_name,
    });
    console.log(record);
  }
  useEffect(() => {
    console.log(form.getFieldsValue(), 'hdskds');
  }, [form]);

  const onFinish = (values) => {
    console.log('Success:', values);
    createRecord();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="user_name"
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

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
