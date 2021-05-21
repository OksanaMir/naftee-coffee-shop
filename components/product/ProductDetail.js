import Image from 'next/image';
import { useRef } from 'react';
import { InputNumber, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import { SelectComponent } from '../form/select/SelectComponent';

import styles from '../../styles/ProductDetail.module.scss';

export function ProductDetail({ product, selectMethod, selectWeight }) {
  const { t } = useTranslation();
  const router = useRouter();
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

  function onChange(value) {
    console.log('changed', value);
  }

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
        <Form
          initialValues={{ amount: 1 }}
          ref={formRef}
          name="productsSelect"
          onFinish={onFinish}
        >
          {selectMethod && (
            <Form.Item
              name="method"
              label={t('select.method')}
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
          <Form.Item
            name="amount"
            label={t('select.amount')}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber min={1} onChange={onChange} />
          </Form.Item>
          {selectWeight && (
            <Form.Item
              name="weight"
              label={t('select.weight')}
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
      <button
        className="snipcart-add-item"
        data-item-id={id}
        data-item-price={price}
        data-item-url={router?.pathname || ''}
        data-item-description={description}
        data-item-image={productPhoto.url}
        data-item-name={productName}
      >
        Add to cart
      </button>
    </article>
  );
}
