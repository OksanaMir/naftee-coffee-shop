import Image from 'next/image';
import {useRef, useState} from 'react';
import { InputNumber, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import { SelectComponent } from '../form/select/SelectComponent';

import styles from '../../styles/ProductDetail.module.scss';

export function ProductDetail({ product, selectMethod, selectWeight }) {
  const { t } = useTranslation();
  const router = useRouter();
  const formRef = useRef(null);
    const [weightSelect, setWeightSelect] = useState(50);
    const [methodSelect, setMethodSelect] = useState('espresso');
  const {
    productName,
    productPhoto,
    id,
    taste,
      prices,
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
    const handleMethodChange =
        (value) => setMethodSelect(value)
    const handleWeightChange =
        (value) => setWeightSelect(value)


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
            <div id={`method-select-${id}-detail`} className={styles.selectWrapper}>

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
                  id={`method-select-${id}-detail`}
                options={selectMethod}
                handleChange={handleMethodChange}
              />
            </Form.Item>
            )}</div>

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
            <div id={`weight-select-${id}-detail`} className={styles.selectWrapper}>

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
                  id={`weight-select-${id}-detail`}

                  options={selectWeight}
                handleChange={handleWeightChange}
              />
            </Form.Item>
            )}</div>
        </Form>
      </div>
      <p>{cuppingScoreRatingSca}</p>
        <p>{weightSelect === 50? (prices?.prices[0]) : weightSelect === 250 ? prices?.prices[1] : prices?.prices[2]}</p>
      <p>{description}</p>
      <p>{characteristic}</p>
      <button
        className="snipcart-add-item"
        data-item-id={id}
        data-item-price={weightSelect === 50? (prices?.prices[0]) : weightSelect === 250 ? prices?.prices[1] : prices?.prices[2]}
        data-item-url={router?.pathname || ''}
        data-item-description={description}
        data-item-image={productPhoto.url}
        data-item-name={productName}

        data-item-custom1-name="Weight"
        data-item-custom1-value={weightSelect}
        data-item-custom2-name="Method"
        data-item-custom2-value={methodSelect}
      >
        Add to cart
      </button>
    </article>
  );
}
