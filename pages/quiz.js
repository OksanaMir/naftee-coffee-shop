import Head from 'next/head';

import { QuizForm } from '../components/form/forms/QuizForm';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button, Result } from 'antd';

import { CoffeeOutlined } from '@ant-design/icons';

import { Layout } from '../components/layout/Layout';
import styles from '../styles/Quiz.module.scss';

export default function QuizPage() {
  const { t, i18n } = useTranslation();
  const [isFinished, setIsfinished] = useState(false);

  const onFinished = () => {
    setIsfinished(true);
  };

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
                  subTitle="Your best coffee choice is ''."
                  extra={[
                    <Button type="primary" key="home">
                      Back
                    </Button>,
                    <Button key="buy">Buy now</Button>,
                  ]}
                />
              </div>
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
