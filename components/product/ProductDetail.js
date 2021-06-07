import Image from 'next/image';
import {useRef, useState} from 'react';
import {Form, InputNumber} from 'antd';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/router';
import {GoToDetailButton} from '../form/button/GoToDetailButton';

import {SelectComponent} from '../form/select/SelectComponent';
import {ExpandableText} from '../expandableText/ExpandableText';

import styles from '../../styles/ProductDetail.module.scss';

export function ProductDetail({ product, selectMethod }) {
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
    quantityWeight,
    cuppingScoreRatingSca,
    description,
    characteristic,
  } = product || {};

  const { productData } = quantityWeight || {};

  const handleQuantityChange = (value) => setQuantity(value);

  const handleMethodChange = (value) => setMethodSelect(value);
  const handleWeightChange = (value) => setWeightSelect(value);

  function createMarkup(paragraph) {
    return { __html: `${paragraph}` };
  }


  return (
    <article key={id} className={styles.productDetail}>
        <h1>{productName}</h1>
      <div className={styles.topSection}>
        {horizontalProductView && (
          <Image
            src={horizontalProductView?.url}
            width={horizontalProductView?.width}
            height={horizontalProductView?.height}
            alt={horizontalProductView?.alt}
            title={horizontalProductView?.title}
          />
        )}
      </div>
      <p>{taste}</p>
      <span className={styles.bottomSection}>
        <ExpandableText
          id={`descriptionIconWrapper${id}`}
          title={t('shopList.description', {
            lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
          })}
          paragraph={
            <span dangerouslySetInnerHTML={createMarkup(description)} />
          }
        />

        <ExpandableText
          title={t('shopList.characteristic', {
            lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
          })}
          id={`characteristicIconWrapper${id}`}
          paragraph={
            <span dangerouslySetInnerHTML={createMarkup(characteristic)} />
          }
        />
      </span>

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
            label={t('select.amount', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
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
                options={productData?.map((data) => data?.weight)}
                handleChange={handleWeightChange}
              />
            </Form.Item>
          </div>
        </Form>
      </div>
      <p>{cuppingScoreRatingSca}</p>
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

      <h1 className={styles.price}>
        {(weightSelect === 50
          ? productData?.[0]?.price
          : weightSelect === 250
          ? productData?.[1]?.price
          : productData?.[2]?.price) * quantity}{' '}
        Kč
      </h1>

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
          data-item-url={router?.pathname.indexOf('details') > 0?router?.pathname?.replace('[id]', id):router?.pathname}
          data-item-description={taste}
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
        {!router?.pathname.includes('details')  && (
          <GoToDetailButton id={id} />
        )}
      </div>
    </article>
  );
}
