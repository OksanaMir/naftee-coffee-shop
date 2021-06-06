import Image from 'next/image';
import { Form, InputNumber } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { request } from '../../lib/datoCMS';
import { Loader } from '../ loader/Loader';
import { useTranslation } from 'react-i18next';
import { SelectComponent } from '../form/select/SelectComponent';
import styles from '../../styles/ProductOverView.module.scss';

export function ProductOverView({ data }) {
  const formRef = useRef(null);
  const { t } = useTranslation();

  const router = useRouter();
  const [form] = Form.useForm();
  const [selectsData, setSelectsData] = useState({});
  const [weightSelect, setWeightSelect] = useState(250);
  const [methodSelect, setMethodSelect] = useState('espresso');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const {
    productName,
    horizontalProductView,
    id,
    quantityWeight,
    taste,
    cuppingScoreRatingSca,
  } = data;

  const { productData } = quantityWeight;
  useEffect(() => {
    setIsLoading(true);
    request({
      query: SELECTORS_QUERY,
      variables: {},
    })
      .then((response) => {
        setSelectsData(response);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const handleMethodChange = (value) => setMethodSelect(value);
  const handleWeightChange = (value) => setWeightSelect(value);
  function handleQuantityChange(value) {
    setQuantity(value);
  }
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data && (
            <article className={styles.productOverView}>
              <div className={styles.productImg}>
                <h1>{productName}</h1>
                <Image
                  width={horizontalProductView.width / 5}
                  height={horizontalProductView.height / 5}
                  src={horizontalProductView.url}
                  alt={horizontalProductView.alt}
                  title={horizontalProductView.title}
                />
              </div>
              <p>{taste}</p>

              <div>
                <Form
                  form={form}
                  ref={formRef}
                  name={`productsSelect-${id}-overview`}
                  onFinish={onFinish}
                >
                  <div
                    id={`method-select-${id}-overview`}
                    className={styles.selectWrapper}
                  >
                    {selectsData?.allSelectors?.[0]?.select?.selectMethod && (
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
                          id={`method-select-${id}-overview`}
                          options={
                            selectsData?.allSelectors?.[0]?.select
                              ?.selectMethod ?? []
                          }
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
                    id={`weight-select-${id}-overview`}
                    className={styles.selectWrapper}
                  >
                    {selectsData?.allSelectors?.[1]?.select?.selectWeight && (
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
                          id={`weight-select-${id}-overview`}
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
                {(weightSelect === 50 && productData?.[0]?.quantity) ||
                (weightSelect === 250 && productData?.[1]?.quantity) ||
                (weightSelect === 1000 && productData?.[2]?.quantity)
                  ? t('quantaty.inStock')
                  : t('quantaty.outOfStock')}
              </p>

              <p className={styles.price}>
                {(weightSelect === 50
                  ? productData?.[0]?.price
                  : weightSelect === 250
                  ? productData?.[1]?.price
                  : productData?.[2]?.price) * quantity}
                Kč
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
                data-item-image={horizontalProductView.url}
                data-item-name={productName}
                data-item-description={taste}
                data-item-custom1-name={t('select.weight')}
                data-item-custom1-id={`weight-${id}`}
                data-item-custom1-value={weightSelect}
                data-item-custom2-name={t('select.method')}
                data-item-custom2-id={`method-${id}`}
                data-item-quantity={quantity}
                data-item-custom2-value={methodSelect}
              >
                Add to cart
              </button>
            </article>
          )}
        </>
      )}
    </>
  );
}
const SELECTORS_QUERY = `query SelectorsQuery{
    allSelectors {
     id
      select
    
    }
  }`;
