import Head from 'next/head';

import { QuizForm } from '../components/form/forms/QuizForm';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
        {!isFinished ? (
          <>
            <h1 className={styles.question}>How to choose coffee?</h1>
            <p>Answer the questions below to make your choice easier</p>
            <QuizForm onFinished={onFinished} />
          </>
        ) : (
          <>
            <h1>Thank you for answering question</h1>
            <p>Your best coffee choice is '' </p>
          </>
        )}
      </Layout>
    </>
  );
}
