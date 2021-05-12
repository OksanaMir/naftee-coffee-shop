import Image from 'next/image';
import 'antd/dist/antd.css';
import styles from '../../styles/ProductOverView.module.scss';

import { Form } from 'antd';
import { useRef, useState, useEffect } from 'react';
import { request } from '../../lib/datoCMS';
import { SelectComponent } from '../form/select/SelectComponent';

export function ProductOverView(props) {
  const formRef = useRef(null);
  const { data } = props;
  const [selectsData, setSelectsData] = useState({});

  useEffect(() => {
    request({
      query: SELECTORS_QUERY,
      variables: {},
    }).then((response) => {
      setSelectsData(response);
    });
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log(values);
  };

  console.log(selectsData, 'data');

  return (
    <>
      {data && (
        <article className={styles.productOverView}>
          <div>
            <p>{data.productName}</p>
            <Image
              width={data.productPhoto.width / 5}
              height={data.productPhoto.height / 5}
              src={data.productPhoto.url}
              alt={data.productPhoto.alt}
              title={data.productPhoto.title}
            />
          </div>
          <p>{data.taste}</p>
          <div>
            <Form ref={formRef} name="control-ref" onFinish={onFinish}>
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
                    handleChange={handleChange}
                  />
                </Form.Item>
              )}
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
                    options={
                      selectsData?.allSelectors?.[1]?.select?.selectWeight ?? []
                    }
                    handleChange={handleChange}
                  />
                </Form.Item>
              )}
            </Form>
          </div>
          <p>{data.cuppingScoreRatingSca}</p>
          <p>{data.price}</p>
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
