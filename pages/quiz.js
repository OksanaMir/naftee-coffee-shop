import Head from 'next/head';
import { QuizForm } from '../components/form/forms/QuizForm';
import { useState } from 'react';
import { Button, Result } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';
import { Layout } from '../components/layout/Layout';
import styles from '../styles/Quiz.module.scss';
export default function QuizPage() {
  const [isFinished, setIsfinished] = useState(false);
  const [answers, setAnswers] = useState([]);
  const onFinished = () => {
    setIsfinished(true);
  };
  const ResultBlock = () => {
    return (
      <>
        <div>
          Best choice for you:
          <br />
          sort: {answers[1]}, {answers[3]}, {answers[4]}
          <br />
          method: {answers[0]}
          <br />
          package: {answers[2]}
        </div>
        <span>
          If you got more than one sort in quiz results we recommend you to buy
          a pack of varieties first.
        </span>
      </>
    );
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
              <QuizForm
                onFinished={onFinished}
                answers={answers}
                setAnswers={setAnswers}
              />
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
