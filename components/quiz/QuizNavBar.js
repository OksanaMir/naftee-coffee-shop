import {Button, Form} from 'antd';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/router';
import styles from '../../styles/QuizNavBar.module.scss';

export function QuizNavBar({ onContinue, quizItemIndex, length }) {
  const router = useRouter();
  const goBackInHistory = () => router.back();
  const { t } = useTranslation();
  return (
    <div className={styles.navigation}>
      <Form.Item noStyle>
        <Button onClick={goBackInHistory}>
          <span>{t('quiz.quit' , {lng: router.locale  === "cs"? 'cs_CZ': "en"})}</span>
        </Button>
      </Form.Item>
      <div>
        {quizItemIndex}/{length}
      </div>
      <Form.Item noStyle>
        <Button onClick={onContinue}>{t('quiz.skip', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}</Button>
      </Form.Item>
    </div>
  );
}
