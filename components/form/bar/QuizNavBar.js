import { Button, Form } from 'antd';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import styles from '../../../styles/QuizNavBar.module.scss';

export function QuizNavBar({ onContinue, quizItemIndex, length }) {
  const router = useRouter();
  const goBackInHistory = () => router.back();
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.navigation}>
      <Form.Item noStyle>
        <Button onClick={goBackInHistory}>
          <span>{t('quiz.quit')}</span>
        </Button>
      </Form.Item>
      <div>
        {quizItemIndex}/{length}
      </div>
      <Form.Item noStyle>
        <Button onClick={onContinue}>{t('quiz.skip')}</Button>
      </Form.Item>
    </div>
  );
}
