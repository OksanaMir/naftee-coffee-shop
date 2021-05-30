import Image from 'next/image';

import 'antd/dist/antd.css';
import styles from '../../styles/ProductOverView.module.scss';
import { Select } from 'antd';
import { useRouter } from 'next/router';
import { Form } from 'antd';
import { useRef, useState, useEffect } from 'react';
import { request } from '../../lib/datoCMS';
import { SelectComponent } from '../form/select/SelectComponent';

export function ProductOverView({ data }) {
  const formRef = useRef(null);
  const router = useRouter();
  const [form] = Form.useForm();
  const [selectsData, setSelectsData] = useState({});
  const [weightSelect, setWeightSelect] = useState(50);
  const [methodSelect, setMethodSelect] = useState('espresso');
  const { Option } = Select;
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
  } = data;
  useEffect(() => {
    request({
      query: SELECTORS_QUERY,
      variables: {},
    }).then((response) => {
      setSelectsData(response);
    });
  }, []);

  const handleMethodChange = (event) => {
    form.setFieldsValue({ method: event.target.value });
  };
  const handleWeightChange = (value) => {
    form.setFieldsValue({ weight: value });
    console.log(value, 'value');
    console.log(form.getFieldsValue('weight'), 'form');
  };

  const onFinish = (values) => {
    console.log(values);
  };

  console.log(selectsData, 'data');

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
                    options={
                      selectsData?.allSelectors?.[0]?.select?.selectMethod ?? []
                    }
                    handleChange={(value) => setMethodSelect(value)}
                  />
                </Form.Item>
              )}
              {selectsData?.allSelectors?.[1]?.select?.selectWeight && (
                <Form.Item
                  id={'area'}
                  name="weight"
                  label="Weight"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  {/* <SelectComponent
                    options={
                      selectsData?.allSelectors?.[1]?.select?.selectWeight ?? []
                    }
                    handleChange={(value) => setWeightSelect(value)}
                  /> */}
                  <Select
                    placeholder="Select"
                    style={{ width: 220 }}
                    getPopupContainer={() => document.getElementById('area')}
                    onChange={(value) => setWeightSelect(value)}
                  >
                    {selectsData?.allSelectors?.[1]?.select?.selectWeight.map(
                      (option) => {
                        return (
                          <Option key={option} value={option}>
                            {option}
                          </Option>
                        );
                      },
                    )}
                  </Select>
                </Form.Item>
              )}
            </Form>
          </div>
          <p>{cuppingScoreRatingSca}</p>
          <p>{parseInt(price, 10) * form.getFieldsValue('weight')}</p>
          <button
            className="snipcart-add-item"
            data-item-id={id}
            data-item-price={
              parseInt(price, 10) * form.getFieldsValue('weight')
            }
            data-item-url={router?.pathname || ''}
            data-item-image={productPhoto.url}
            data-item-name={productName}
          >
            Add to cart
          </button>
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
