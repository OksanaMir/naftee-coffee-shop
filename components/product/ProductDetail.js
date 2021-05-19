import Image from 'next/image';
import { useRef } from 'react';
import styles from '../../styles/ProductDetail.module.scss';
import { SelectComponent } from '../form/select/SelectComponent';

import { Form } from 'antd';

export function ProductDetail({ product, selectMethod, selectWeight }) {
  const formRef = useRef(null);
  const {
    productName,
    productPhoto,
    id,
    amount,
    taste,
    method,
    select,
    price,
    cuppingScoreRatingSca,
    characteristic,
    description,
  } = product;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <article key={id} className={styles.productDetail}>
      <div>
        <p>{productName}</p>
        {productPhoto && (
          <Image
            src={productPhoto?.url || ''}
            width={(productPhoto?.width || 640) / 5}
            height={(productPhoto?.height || 900) / 5}
            alt={productPhoto?.alt || ''}
            title={productPhoto?.title || ''}
          />
        )}
      </div>
      <p>{taste}</p>
      <div>
        <Form ref={formRef} name="productsSelect" onFinish={onFinish}>
          {selectMethod && (
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
                options={selectMethod}
                handleChange={handleChange}
              />
            </Form.Item>
          )}
          {selectWeight && (
            <Form.Item
              name="weight"
              label="Weight"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <SelectComponent
                options={selectWeight}
                handleChange={handleChange}
              />
            </Form.Item>
          )}
        </Form>
      </div>
      <p>{cuppingScoreRatingSca}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{characteristic}</p>
    </article>
  );
}
