import {Button, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import {useTranslation} from 'react-i18next';

import styles from '../../../styles/ContactForm.module.scss';
import {useRouter} from "next/router";

export function ContactForm() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { SiteClient } = require('datocms-client');
  const client = new SiteClient('dcf7c70ca6f6fb69721273dbc749b3');
const router = useRouter()
  async function createRecord() {
    const record = await client.items.create({
      itemType: '801810', // model ID
      user_email: form.getFieldsValue().user_email,
      user_name: form.getFieldsValue().user_name,
      subject: form.getFieldsValue().subject,
      message: form.getFieldsValue().message,
    });
  }


  const onFinish = () => {
    createRecord();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <Form
      form={form}
      {...layout}
      id={'area'}
      name="contacts"
      className={styles.form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={t('contacts.userName', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}
        name={'user_name'}
        rules={[{ required: true, message: t('message.userNameIsRequired', {lng: router.locale  === "cs"? 'cs_CZ': "en"}) }]}
      >
        <Input placeholder={t('contacts.userName', {lng: router.locale  === "cs"? 'cs_CZ': "en"})} />
      </Form.Item>
      <Form.Item
        label={t('contacts.email', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}
        name="user_email"
        rules={[
          {
            type: 'email',
            required: true,
            message: t('message.emailIsRequired', {lng: router.locale  === "cs"? 'cs_CZ': "en"}),
          },
        ]}
      >
        <Input placeholder={t('contacts.email', {lng: router.locale  === "cs"? 'cs_CZ': "en"})} />
      </Form.Item>
      <Form.Item
        label={t('contacts.subject', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}
        name={'subject'}
        rules={[
          {
            type: 'string',
            required: true,
            message: t('message.subjectIsRequired', {lng: router.locale  === "cs"? 'cs_CZ': "en"}),
          },
        ]}
      >
        <Input placeholder={t('contacts.subject', {lng: router.locale  === "cs"? 'cs_CZ': "en"})} />
      </Form.Item>
      <Form.Item
        label={t('contacts.message', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}
        name="message"
        rules={[
          {
            type: 'string',
            required: true,
            message: t('message.messageIsRequired'),
          },
        ]}
      >
        <Input.TextArea placeholder={t('contacts.message', {lng: router.locale  === "cs"? 'cs_CZ': "en"})} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          {t('contacts.button', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}
        </Button>
      </Form.Item>
    </Form>
  );
}
