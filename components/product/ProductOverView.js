import Image from 'next/image';
import 'antd/dist/antd.css';
import styles from '../../styles/ProductOverView.module.scss';

import { Form } from 'antd';
import styles from '../../styles/ProductOverView.module.scss';
import 'antd/dist/antd.css';

import { useRef } from 'react';

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
            <Image
              width={data.productPhoto.width / 5}
              height={data.productPhoto.height / 5}
              src={data.productPhoto.url}
              alt={data.productPhoto.alt}
              title={data.productPhoto.title}
            />
          </div>
          <p>{data.taste}</p>
          <div>
            <Form ref={formRef} name="control-ref" onFinish={onFinish}>
              {data?.select?.selectMethod && (
                <Form.Item
                  name="method"
                  label="Method"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <SelectComponent
                    options={data?.select?.selectMethod ?? []}
                    handleChange={handleChange}
                  />
                </Form.Item>
              )}
            </Form>
          </div>
          <p>{data.cuppingScoreRatingSca}</p>
          <p>{data.price}</p>
        </article>
      )}{' '}
    </>
  );
}
