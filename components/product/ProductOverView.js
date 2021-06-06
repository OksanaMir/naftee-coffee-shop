import Image from 'next/image';
import { Form, InputNumber } from 'antd';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectComponent } from '../form/select/SelectComponent';
import styles from '../../styles/ProductOverView.module.scss';
import Link from 'next/link';

export function ProductOverView({ data, selectMethod }) {
  const formRef = useRef(null);
  const { t } = useTranslation();

  const router = useRouter();
  const [form] = Form.useForm();
  const [weightSelect, setWeightSelect] = useState(250);
  const [methodSelect, setMethodSelect] = useState('espresso');
  const [quantity, setQuantity] = useState(1);
  const {
    productName,
    horizontalProductView,
    id,
    quantityWeight,
    taste,
    cuppingScoreRatingSca,
  } = data || {};

  const { productData } = quantityWeight || {};

  const handleMethodChange = (value) => setMethodSelect(value);
  const handleWeightChange = (value) => setWeightSelect(value);
  const handleQuantityChange = (value) => setQuantity(value);

  return (
    <>
      {data && (
        <article className={styles.productOverView}>
          <div className={styles.productImg}>
            <h1>{productName}</h1>
            {horizontalProductView && (
              <Image
                width={horizontalProductView?.width}
                height={horizontalProductView?.height}
                src={horizontalProductView?.url}
                alt={horizontalProductView?.alt}
                title={horizontalProductView?.title}
              />
            )}
          </div>
          <p>{taste}</p>

          <div>
            <Form
              form={form}
              ref={formRef}
              name={`productsSelect-${id}-overview`}
            >
              <div
                id={`method-select-${id}-overview`}
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
                      id={`method-select-${id}-overview`}
                      options={selectMethod ?? []}
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
                id={`weight-select-${id}-overview`}
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
                    id={`weight-select-${id}-overview`}
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
          <p className={styles.price}>
            {(weightSelect === 50
              ? productData?.[0]?.price
              : weightSelect === 250
              ? productData?.[1]?.price
              : productData?.[2]?.price) * quantity}
          </p>
          <button
            className="snipcart-add-item"
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
            data-item-description={taste}
            data-item-custom1-name={t('select.weight', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
            data-item-custom1-id={`weight-${id}`}
            data-item-custom1-value={weightSelect}
            data-item-custom2-name={t('select.method', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
            data-item-custom2-id={`method-${id}`}
            data-item-custom2-value={methodSelect}
            data-item-quantity={quantity}
          >
            {t('button.addToCart', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
          </button>
          <Link href={`/shop/details/${id}`} locale={router.locale}>
            <a>
              {t('button.productDetail', {
                lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
              })}
            </a>
          </Link>
        </article>
      )}
    </>
  );
}
