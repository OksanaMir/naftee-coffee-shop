import { Form, Input, Button, Checkbox, Radio, Space } from 'antd';
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
    <>
      <h1>Shipping Details</h1>
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="First name"
          name="first_name"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="last_name"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Company name"
          name="company_name"
          rules={[
            {
              required: true,
              message: 'Please input your company name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[
            {
              required: true,
              message: 'Please input your country!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: 'Please input your city!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Postal code"
          name="postal_code"
          rules={[
            {
              required: true,
              message: 'Please input your postal code!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <h1>Shipping Details</h1>
        <p>Up to 3 working days</p>
        <p>Free</p>
        <Radio>česká pošta</Radio>

        <h1>Payment</h1>

        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>Credit/Debit Cards</Radio>
          <Radio value={2}>PayPal</Radio>
          <Radio value={3}>Manual Payment</Radio>
        </Radio.Group>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
