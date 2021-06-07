import Image from 'next/image';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Form, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import { GoToDetailButton } from '../form/button/GoToDetailButton';
import { SelectComponent } from '../form/select/SelectComponent';
import styles from '../../styles/ProductTeaser.module.scss';

export function ProductTeaser({ data, selectMethod, selectWeight }) {
  const { t } = useTranslation();
  const router = useRouter();
  const formRef = useRef(null);
  const [weightSelect, setWeightSelect] = useState(250);
  const [methodSelect, setMethodSelect] = useState('espresso');
  const [quantity, setQuantity] = useState(1);

  const {
    id,
    productBanner,
    productName,
    horizontalProductView,
    quantityWeight,
    cuppingScoreRatingSca,
  } = data ?? {};

  const { productData } = quantityWeight || {};

  function handleQuantityChange(value) {
    setQuantity(value);
  }
  const handleMethodChange = (value) => setMethodSelect(value);
  const handleWeightChange = (value) => setWeightSelect(value);

  const [switchContent, setSwitchContent] = useState(false);
  const changeContent = () => {
    setSwitchContent(!switchContent);
  };

    console.log((weightSelect === 50 && productData?.[0]?.quantity ===0) ||
        (weightSelect === 250 && productData?.[1]?.quantity === 0) ||
        (weightSelect === 1000 && productData?.[2]?.quantity === 0 ), "disable", id )

  return (
    <div className={styles.productTeaser}>
      <div
        className={styles.content}
        onMouseLeave={changeContent}
        onMouseEnter={changeContent}
        onClick={changeContent}
      >
        {horizontalProductView && (
          <Image
            src={
              switchContent ? horizontalProductView?.url : productBanner?.url
            }
            alt={'product teaser'}
            width={
              switchContent
                ? horizontalProductView?.width
                : productBanner?.width
            }
            height={
              switchContent
                ? horizontalProductView?.height
                : productBanner?.height
            }
          />
        )}
      </div>
      <div className={styles.infoWrapper}>
        <h1>{productName}</h1>
        <div className={styles.inputBlock}>
          <Form
            initialValues={{ amount: 1 }}
            ref={formRef}
            name={`productsSelect-${id}-detail`}
          >
            <div
              id={`method-select-${id}-detail`}
              className={styles.selectWrapper}
            >
              {selectMethod && (
                <Form.Item
                  name="method"
                  label={t('select.method', {
                    lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                  })}
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
                  label={t('select.weight', {
                    lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                  })}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <SelectComponent
                    id={`weight-select-${id}-detail`}
                    options={productData?.map((data) => data.weight)}
                    handleChange={handleWeightChange}
                  />
                </Form.Item>
              )}
            </div>

        <p>{cuppingScoreRatingSca}</p>
          </Form>
        </div>
<div className={styles.priceAmount}>
        <h1 className={styles.price}>
          {(weightSelect === 50
              ? productData?.[0]?.price
              : weightSelect === 250
                  ? productData?.[1]?.price
                  : productData?.[2]?.price) * quantity}
          Kč
        </h1>
        <p>
          {(weightSelect === 50 && productData?.[0]?.quantity) ||
          (weightSelect === 250 && productData?.[1]?.quantity) ||
          (weightSelect === 1000 && productData?.[2]?.quantity)
              ? t('quantaty.inStock', {
                lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
              })
              : t('quantaty.outOfStock', {
                lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
              })}
        </p>
</div>

        <div className={styles.snipcartAddItem}>
          <button
              disabled={(weightSelect === 50 && productData?.[0]?.quantity ===0) ||
                  (weightSelect === 250 && productData?.[1]?.quantity === 0) ||
                  (weightSelect === 1000 && productData?.[2]?.quantity === 0 ) }
            className="snipcart-add-item "
            data-item-id={id}
            data-item-price={
              weightSelect === 50
                ? productData?.[0]?.price
                : weightSelect === 250
                ? productData?.[1]?.price
                : productData?.[2]?.price
            }
            data-item-url={router?.pathname}
            data-item-image={horizontalProductView?.url}
            data-item-name={productName}
            data-item-custom1-name={t('select.weight', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
            data-item-custom1-value={weightSelect}
            data-item-custom2-name={t('select.method', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
            data-item-custom2-value={methodSelect}
            data-item-quantity={quantity}
          >
            {t('button.addToCart', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
          </button>
          <GoToDetailButton id={id} />
        </div>
      </div>
    </div>
  );
}
