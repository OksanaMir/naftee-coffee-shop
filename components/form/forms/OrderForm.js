import { Form, Input, Button, Radio } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const [postMethod, setPostMethod] = useState('česká pošta');
  const [paymentMethod, setPaymentMethod] = useState('Credit/Debit Cards');

  const { SiteClient } = require('datocms-client');
  const client = new SiteClient('dcf7c70ca6f6fb69721273dbc749b3');

  async function createRecord() {
    const record = await client.items.create({
      itemType: '800455', // model ID
      email_for_order_confirmation: form.getFieldsValue().email,
      first_name: form.getFieldsValue().first_name,
      last_name: form.getFieldsValue().last_name,
      company_name: form.getFieldsValue().company_name,
      country: form.getFieldsValue().country,
      city: form.getFieldsValue().city,
      address: form.getFieldsValue().address,
      postal_code: form.getFieldsValue().postal_code,
      phone: form.getFieldsValue().phone,
      post_method: postMethod,
      payment_method: paymentMethod,
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

  const choosePostMethod = (event) => {
    setPostMethod(event.target.value);
  };
  const choosePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
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
          label={t('order.email_for_order_confirmation')}
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.first_name')}
          name="first_name"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.last_name')}
          name="last_name"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.company_name')}
          name="company_name"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input your company name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.country')}
          name="country"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input your country!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.city')}
          name="city"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input your city!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.address')}
          name="address"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.postal_code')}
          name="postal_code"
          rules={[
            {
              //type: 'number',
              required: true,
              message: 'Please input your postal code!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('order.phone')}
          name="phone"
          rules={[
            {
              pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
              message: 'něco',
            },

            {
              type: 'string',
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

        <Radio.Group
          name={t('order.post_method')}
          defaultValue={'česká pošta'}
          onChange={choosePostMethod}
        >
          <Radio value={'česká pošta'}>česká pošta</Radio>
        </Radio.Group>

        <h1>Payment</h1>

        <Radio.Group
          name={t('order.payment_method')}
          defaultValue={'Credit/Debit Cards'}
          onChange={choosePaymentMethod}
        >
          <Radio value={'Credit/Debit Cards'}>Credit/Debit Cards</Radio>
          <Radio value={'PayPal'}>PayPal</Radio>
          <Radio value={'Manual Payment'}>Manual Payment</Radio>
        </Radio.Group>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
