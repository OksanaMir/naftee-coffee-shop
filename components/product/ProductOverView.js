import Image from 'next/image';

import 'antd/dist/antd.css';
import styles from '../../styles/ProductOverView.module.scss';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { request } from '../../lib/datoCMS';
import { SelectComponent } from '../form/select/SelectComponent';

export function ProductOverView({ data }) {
  const formRef = useRef(null);
  const router = useRouter();
  const [form] = Form.useForm();
  const [selectsData, setSelectsData] = useState({});
  const [weightSelect, setWeightSelect] = useState(50);
  const [methodSelect, setMethodSelect] = useState('espresso');
  const {
    productName,
    productPhoto,
    id,
    prices,
    taste,
    cuppingScoreRatingSca,
  } = data;
  useEffect(() => {
    request({
      query: SELECTORS_QUERY,
      variables: {},
    }).then((response) => {
      setSelectsData(response);
    });
  }, []);

  const handleMethodChange = (value) => setMethodSelect(value);
  const handleWeightChange = (value) => setWeightSelect(value);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      {data && (
        <article className={styles.productOverView}>
          <div className={styles.productImg}>
            <p>{productName}</p>
            <Image
              width={productPhoto.width / 5}
              height={productPhoto.height / 5}
              src={productPhoto.url}
              alt={productPhoto.alt}
              title={productPhoto.title}
            />
          </div>
          <p>{taste}</p>
          <div>
            <Form
              form={form}
              ref={formRef}
              name="control-ref"
              onFinish={onFinish}
            >
              <div
                id={`method-select-${id}-overview`}
                className={styles.selectWrapper}
              >
                {selectsData?.allSelectors?.[0]?.select?.selectMethod && (
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
                      id={`method-select-${id}-overview`}
                      options={
                        selectsData?.allSelectors?.[0]?.select?.selectMethod ??
                        []
                      }
                      handleChange={handleMethodChange}
                    />
                  </Form.Item>
                )}
              </div>
              <div
                id={`weight-select-${id}-overview`}
                className={styles.selectWrapper}
              >
                {selectsData?.allSelectors?.[1]?.select?.selectWeight && (
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
                      id={`weight-select-${id}-overview`}
                      options={
                        selectsData?.allSelectors?.[1]?.select?.selectWeight ??
                        []
                      }
                      handleChange={handleWeightChange}
                    />
                  </Form.Item>
                )}
              </div>
            </Form>
          </div>
          <p>{cuppingScoreRatingSca}</p>
          <p>
            {weightSelect === 50
              ? prices?.prices[0]
              : weightSelect === 250
              ? prices?.prices[1]
              : prices?.prices[2]}
          </p>
          {/* <button
            className="snipcart-add-item"
            data-item-id={id}
            data-item-price={weightSelect === 50? (prices?.prices[0]) : weightSelect === 250 ? prices?.prices[1] : prices?.prices[2]}
            data-item-url={router?.pathname || ''}
            data-item-image={productPhoto.url}
            data-item-name={productName}


            data-item-custom1-name="Weight"
            data-item-custom1-value={weightSelect}
            data-item-custom2-name="Method"
            data-item-custom2-value={methodSelect}
          >
            Add to cart
          </button> */}
        </article>
      )}{' '}
    </>
  );
}
const SELECTORS_QUERY = `query SelectorsQuery{

    allSelectors {
     id
      select
    
    }
  }`;
