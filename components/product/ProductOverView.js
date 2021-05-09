import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styles from '../../styles/ProductOverView.module.scss';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { request } from '../../lib/datoCMS';
import { SelectComponent } from '../form/select/SelectComponent';

export function ProductOverView(props) {
  const { Option } = SelectComponent;
  const formRef = useRef(null);
  const { data } = props;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const onFinish = (values) => {
    console.log(values);
  };
  console.log(data, 'data');
  return (
    <>
      {data && (
        <article className={styles.productOverView}>
          <div>
            <p>{data.productName}</p>
            <img src="/assets/teamPicFinal.png"></img>
          </div>
          <div>
            <Form ref={formRef} name="control-ref" onFinish={onFinish}>
              <Form.Item
                name="method"
                label="Method"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                {' '}
                <SelectComponent
                  options={data?.select?.selectMethod ?? []}
                  handleChange={handleChange}
                />
              </Form.Item>
            </Form>
          </div>
        </article>
      )}{' '}
    </>
  );
}
