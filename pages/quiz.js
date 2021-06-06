import Head from 'next/head';
import { QuizForm } from '../components/form/forms/QuizForm';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { request } from '../lib/datoCMS';
import { useState, useEffect } from 'react';
import { Button, Result } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';
import { ProductQuiz } from '../components/product/ProductQuiz';
import { Layout } from '../components/layout/Layout';
import styles from '../styles/Quiz.module.scss';

export default function QuizPage() {
  const [isFinished, setIsfinished] = useState(false);
  const [answers, setAnswers] = useState({
    method: '',
    package: '',
    coffeSort: '',
  });
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});

  // useEffect(() => {
  //   request({
  //     query: PRODUCT_QUERY,
  //     variables: { filter: { id: answers.coffeeSort.id } },
  //   })
  //     .then((response) => {
  //       setData(response);
  //     })
  //     .catch(console.error);
  // }, [i18n.language]);

  const onFinished = (ans) => {
    setAnswers(ans);
    setIsfinished(true);
  };
  const ResultBlock = () => {
    return (
      <>
        {/* <ProductQuiz
          product={data.product}
          quantity={answers.package}
          method={answers.method}
        /> */}
        <div>
          Best choice for you:
          <br />
          sort: {answers.coffeSort}
          <br />
          method: {answers.method}
          <br />
          package: {answers.package}
        </div>
        <span>
          If you got more than one sort in quiz results we recommend you to buy
          a pack of varieties first.
        </span>
      </>
    );
  };
  const router = useRouter();
  const goBackInHistory = () => router.back();
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <Layout>
        <section className={styles.quizContainer}>
          {!isFinished ? (
            <div className={styles.quest}>
              <h1 className={styles.question}>How to choose coffee?</h1>
              <h3 className={styles.invitation}>
                Answer the questions below to make your choice easier.
              </h3>
              <QuizForm onFinished={onFinished} />
            </div>
          ) : (
            <>
              <div className={styles.result}>
                <Result
                  icon={<CoffeeOutlined />}
                  title="Thank you for answering questions!"
                  subTitle={<ResultBlock />}
                  extra={[
                    <Button type="primary" key="home">
                      {t('quiz.back')}
                    </Button>,
                    <Button key="buy">{t('quiz.buy')}</Button>,
                  ]}
                  // extra={[
                  //   <Button onClick={goBackInHistory} type="primary" key="home">
                  //     {t('quiz.back')}
                  //   </Button>,
                  //   <Button
                  //     onClick={(window.location.href = '/shop/shop-list')}
                  //     key="buy"
                  //   >
                  //     {t('quiz.buy')}
                  //   </Button>,
                  // ]}
                />
              </div>
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
const PRODUCT_QUERY = `query ProductQuery($filter: ProductModelFilter){
  product(filter: $filter) {
    productName
    id
    quantityWeight 
    horizontalProductView {
      alt
      id
      url
      title
      width
      height
    }

  }}`;
