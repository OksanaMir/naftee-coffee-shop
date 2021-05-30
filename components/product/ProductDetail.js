import Image from 'next/image';
import { useRef, useState } from 'react';
import { Form, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import { SelectComponent } from '../form/select/SelectComponent';
import { ExpandableText } from '../expandableText/ExpandableText';

import styles from '../../styles/ProductDetail.module.scss';

export function ProductDetail({ product, selectMethod, selectWeight }) {
  const { t } = useTranslation();
  const router = useRouter();
  const formRef = useRef(null);
  const [weightSelect, setWeightSelect] = useState(250);
  const [methodSelect, setMethodSelect] = useState('espresso');
  const [quantity, setQuantity] = useState(1);
  const {
    productName,
    horizontalProductView,
    id,
    taste,
    prices,
    quantityWeight,
    cuppingScoreRatingSca,
  } = product;

  const { productData } = quantityWeight;

  const onFinish = (values) => {
    console.log(values);
  };

  function handleQuantityChange(value) {
    setQuantity(value);
  }
  const handleMethodChange = (value) => setMethodSelect(value);
  const handleWeightChange = (value) => setWeightSelect(value);
  function createMarkup(paragraph) {
    return { __html: `${paragraph}` };
  }

  return (
    <article key={id} className={styles.productDetail}>
      <div className={styles.topSection}>
        <h1>{productName}</h1>
        {horizontalProductView && (
          <Image
            src={horizontalProductView?.url || ''}
            width={(horizontalProductView?.width || 640) / 5}
            height={(horizontalProductView?.height || 900) / 5}
            alt={horizontalProductView?.alt || ''}
            title={horizontalProductView?.title || ''}
          />
        )}
      </div>
      <p>Taste:{taste}</p>
      <span className={styles.bottomSection}>
        <ExpandableText
          id={`descriptionIconWrapper${id}`}
          title={'Description'}
          paragraph={
            <span dangerouslySetInnerHTML={createMarkup(product.description)} />
          }
        />

        <ExpandableText
          title={'Characteristic'}
          id={`characteristicIconWrapper${id}`}
          paragraph={
            <span
              dangerouslySetInnerHTML={createMarkup(product.characteristic)}
            />
          }
        />
      </span>

      <div>
        <Form
          initialValues={{ amount: 1 }}
          ref={formRef}
          name={`productsSelect-${id}-detail`}
          onFinish={onFinish}
        >
          <div
            id={`method-select-${id}-detail`}
            className={styles.selectWrapper}
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
                  id={`method-select-${id}-detail`}
                  options={selectMethod}
                  handleChange={handleMethodChange}
                />
              </Form.Item>
            )}
          </div>

          <Form.Item
            name="amount"
            label={t('select.amount')}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber min={1} onChange={handleQuantityChange} />
          </Form.Item>
          <div
            id={`weight-select-${id}-detail`}
            className={styles.selectWrapper}
          >
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
                  options={productData.map((data) => data.weight)}
                  handleChange={handleWeightChange}
                />
              </Form.Item>
            )}
          </div>
        </Form>
      </div>
      <p>{cuppingScoreRatingSca}</p>
      <p>
        Quantity:
        {(weightSelect === 50
          ? productData?.[0]?.quantity
          : weightSelect === 250
          ? productData?.[1]?.quantity
          : productData?.[2]?.quantity) === 0
          ? 'out of stock'
          : weightSelect === 50
          ? productData?.[0]?.quantity
          : weightSelect === 250
          ? productData?.[1]?.quantity
          : productData?.[2]?.quantity}
      </p>

      <h1 className={styles.price}>
        {(weightSelect === 50
          ? productData?.[0]?.price
          : weightSelect === 250
          ? productData?.[1]?.price
          : productData?.[2]?.price) * quantity}
      </h1>

      <div className={styles.snipcartAddItem}>
        <button>
          className="snipcart-add-item " data-item-id={`detail-${id}`}
          data-item-price=
          {weightSelect === 50
            ? prices?.prices[0]
            : weightSelect === 250
            ? prices?.prices[1]
            : prices?.prices[2]}
          data-item-url={router?.pathname || ''}
          data-item-description={taste}
          data-item-image={horizontalProductView.url}
          data-item-name={productName}
          data-item-custom1-name={t('select.weight')}
          data-item-custom1-value={weightSelect}
          data-item-custom2-name={t('select.method')}
          data-item-custom2-value={methodSelect}
          data-item-quantity={quantity}
          Add to cart
        </button>
      </div>
    </article>
  );
}
