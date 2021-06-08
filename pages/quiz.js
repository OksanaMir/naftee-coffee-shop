import Head from 'next/head';
import { QuizForm } from '../components/quiz/QuizForm';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { request } from '../lib/datoCMS';
import { useEffect, useRef, useState } from 'react';
import { Result } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';
import { Layout } from '../components/layout/Layout';
import styles from '../styles/Quiz.module.scss';
import { ResultBlock } from '../components/quiz/QuizResultBlock';
import Link from 'next/link';

export default function QuizPage({ quizData }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isFinished, setIsfinished] = useState(false);
  const [product, setProduct] = useState(null);
  const [answers, setAnswers] = useState({
    method: '',
    package: '',
    coffeeSort: '',
  });
  {
    t('quiz.method', {
      lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
    });
  }

  const ref = useRef(false);

  useEffect(() => {
    if (answers.coffeeSort) {
      if (!ref.current) {
        ref.current = true;
        request({
          query: PRODUCT_QUERY,
          variables: {
            filter: { id: { eq: answers.coffeeSort } },
            locale: router.locale === 'CZ' ? 'cs' : 'en',
          },
        })
          .then((response) => {
            console.log(response.product);
            setProduct(response.product);
            setIsfinished(true);
          })
          .catch(console.error);
      }
    }
  }, [answers.coffeeSort]);

  const onFinished = (ans) => {
    setAnswers(ans);
  };

  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <Layout>
        <section className={styles.quizContainer}>
          <h1 className={styles.mainHeadline}>
            {t('quiz.quiz', {
              lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
            })}
          </h1>
          {!isFinished ? (
            <div className={styles.quest}>
              <h3 className={styles.invitation}>
                {t('quiz.instruction', {
                  lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                })}
              </h3>
              <QuizForm
                quiz={quizData?.allCoffeeQuizzes}
                onFinished={onFinished}
              />
            </div>
          ) : (
            <>
              <div className={styles.result}>
                {product && (
                  <Result
                    icon={<CoffeeOutlined />}
                    title={t('quiz.headline', {
                      lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                    })}
                    subTitle={
                      <ResultBlock product={product} answers={answers} />
                    }
                    extra={[
                      <Link href={'/shop/shop-list'} locale={router.locale}>
                        <a>
                          {t('quiz.toShop', {
                            lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                          })}
                        </a>
                      </Link>,
                    ]}
                  />
                )}
              </div>
            </>
          )}
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;
  const quizData = await request({
    query: QUIZ_QUERY,
    variables: { locale: locale === 'cs' ? 'cs_CZ' : 'en' },
  });

  return {
    props: {
      quizData,
    },
  };
}

const QUIZ_QUERY = `query QuizQuery($locale: SiteLocale)
{
  allCoffeeQuizzes(locale:$locale) {
      id
      question
      option
      instruction
      recommendation
    } 
}`;

const PRODUCT_QUERY = `query ProductQuery($filter: ProductModelFilter, $locale: SiteLocale){
  product(filter: $filter, locale:$locale) {
    productName
    id
    taste
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
